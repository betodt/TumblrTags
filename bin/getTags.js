var phantom = require('phantom');

// takes an object of tag:count pairs
// and returns an object containing a
// sorted array of key and value arrays
// and the total number of tag occurrences
function sortTags(tags) {
    if (tags && typeof tags === 'object') {
        var sortedTags = {
            tags: [],
            total: 0
        };
        for (var tag in tags) {
            sortedTags.tags.push([tag, tags[tag]]);
            sortedTags.total += tags[tag];
        }
        sortedTags.tags.sort(function (a, b) {
            return b[1] - a[1];
        });
        return sortedTags;
    }
}

module.exports = function() {
    var phInstance = null;
    phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']).then(function (ph) {
        phInstance = ph;
        return ph.createPage();
    }).then(function (page) {
        page.open("https://www.tumblr.com/explore/trending").then(function (status) {
            console.log("Opened tumblr?", status);
            // continue scraping tags until a predefined max is reached
            setInterval(function (page) {
                page.property('content').then(function (content) {
                    var count = content.match(/class="post_tag "/g).length
                    // console.log(count);
                    if (count > 1000) {
                        page.evaluate(function () {
                            // get all available tags
                            var elms = document.querySelectorAll('div.posts-holder article section.post_tags div.post_tags_inner a.post_tag');
                            // count up all occurrences of tags
                            var tags = {};
                            for (var i = 0; i < elms.length; i++) {
                                if(elms[i]) {
                                    var key = elms[i].getAttribute('data-tag');
                                    if (tags[key] === undefined) {
                                        tags[key] = 1;
                                    } else {
                                        tags[key] = tags[key] + 1;
                                    }
                                }
                            }
                            return tags;
                        }).then(function (tags) {
                            var sortedTags = sortTags(tags);
                            if (sortedTags.total > 1000) {
                                // console.log(sortedTags.total);
                                console.log('done');
                                phInstance.exit();
                            }
                        });
                    } else {
                        page.evaluate(function () {
                            // scroll to load more trending posts
                            window.document.body.scrollTop = document.body.scrollHeight;
                        });
                    }
                });
            }, 1200, page);
        });
    }).catch(function (error) {
        console.log(error);
        phInstance.exit();
    });
};