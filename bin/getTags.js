var phantom = require('phantom');

module.exports = function() {
    var phInstance = null;
    phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']).then(function (ph) {
        phInstance = ph;
        return ph.createPage();
    }).then(function (page) {
        page.open("https://www.tumblr.com/explore/trending").then(function (status) {
            console.log("Opened tumblr?", status);
            return page.property('viewportSize', {width: 1900, height: 1080}).then(function() {
                return page.evaluate(function () {
                    var elms = document.querySelectorAll('div.posts-holder article section.post_tags div.post_tags_inner a.post_tag');
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
                });
            });
        }).then(function (html) {
            console.log(html);
            console.log('done');
        });
    }).catch(function (error) {
        console.log(error);
        phInstance.exit();
    });
};