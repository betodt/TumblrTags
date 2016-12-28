var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [
    {
      "_id": "5860baed4bd7a167bc23f767",
      "index": 0,
      "guid": "5cbc8008-c7cc-4301-964f-0f3018d7755b",
      "isActive": true,
      "balance": "$2,335.08",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": {
        "first": "Natalia",
        "last": "Aguirre"
      },
      "company": "EXOZENT",
      "email": "natalia.aguirre@exozent.name",
      "phone": "+1 (816) 572-3284",
      "address": "509 Erskine Loop, Munjor, Oregon, 802",
      "about": "Est ut sunt Lorem elit excepteur. Nisi irure proident quis laboris minim anim cupidatat aliquip nisi adipisicing dolore anim. Excepteur aliqua eu aliquip officia ex nisi velit deserunt laborum.",
      "registered": "Thursday, June 16, 2016 12:26 PM",
      "latitude": "-11.468473",
      "longitude": "-49.996545",
      "tags": [
        "officia",
        "enim",
        "cupidatat",
        "cillum",
        "laboris"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Riley Beach"
        },
        {
          "id": 1,
          "name": "Cleo Duke"
        },
        {
          "id": 2,
          "name": "Hester Sharpe"
        }
      ],
      "greeting": "Hello, Natalia! You have 9 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5860baedf4cd5b3c0bdea09c",
      "index": 1,
      "guid": "c5a600c6-e8a0-43e2-983f-9c7b48a2f44a",
      "isActive": false,
      "balance": "$2,274.65",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Mcknight",
        "last": "Wilder"
      },
      "company": "LUNCHPOD",
      "email": "mcknight.wilder@lunchpod.me",
      "phone": "+1 (993) 443-2697",
      "address": "266 Lott Street, Benson, West Virginia, 7426",
      "about": "Dolor sit quis mollit velit velit nisi ut ipsum elit. Consequat minim reprehenderit id in qui fugiat veniam eiusmod mollit dolore eiusmod proident adipisicing. Mollit esse est nisi excepteur et deserunt irure Lorem. Reprehenderit velit duis in laborum duis.",
      "registered": "Thursday, June 4, 2015 2:20 AM",
      "latitude": "79.30868",
      "longitude": "61.735857",
      "tags": [
        "culpa",
        "enim",
        "sit",
        "eu",
        "magna"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Serrano Sargent"
        },
        {
          "id": 1,
          "name": "Kara Norman"
        },
        {
          "id": 2,
          "name": "Bowman Alvarez"
        }
      ],
      "greeting": "Hello, Mcknight! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5860baed21a84720df9c9254",
      "index": 2,
      "guid": "d248d9b9-8a63-45c8-9f38-0aea94b6ea07",
      "isActive": true,
      "balance": "$3,914.97",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": {
        "first": "Lynch",
        "last": "Cantu"
      },
      "company": "INRT",
      "email": "lynch.cantu@inrt.biz",
      "phone": "+1 (851) 440-3613",
      "address": "595 Dwight Street, Noblestown, South Carolina, 9301",
      "about": "Irure laborum laboris laboris duis consectetur laborum culpa do laboris consectetur do ut. Aliqua mollit ad ex minim commodo sunt. Aliqua ea exercitation mollit laboris duis voluptate do ullamco id magna.",
      "registered": "Tuesday, May 26, 2015 12:00 PM",
      "latitude": "69.628965",
      "longitude": "-146.148461",
      "tags": [
        "esse",
        "incididunt",
        "sit",
        "commodo",
        "laboris"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Maribel Casey"
        },
        {
          "id": 1,
          "name": "Vang Doyle"
        },
        {
          "id": 2,
          "name": "Branch Ratliff"
        }
      ],
      "greeting": "Hello, Lynch! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5860baed3e20c19b6b7b7e33",
      "index": 3,
      "guid": "f592b69e-a231-46ea-8be0-b00320426c30",
      "isActive": false,
      "balance": "$3,146.42",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "green",
      "name": {
        "first": "Hazel",
        "last": "Ball"
      },
      "company": "AQUAMATE",
      "email": "hazel.ball@aquamate.ca",
      "phone": "+1 (919) 453-3827",
      "address": "566 Seagate Terrace, Hickory, Michigan, 551",
      "about": "Veniam esse labore commodo incididunt in voluptate adipisicing et nulla eiusmod aliqua. Tempor non nisi ipsum reprehenderit ea esse incididunt proident incididunt commodo officia dolor eiusmod. Nulla cillum occaecat ea cillum amet aliqua qui officia consectetur officia. Minim occaecat officia cupidatat eiusmod labore cupidatat occaecat laborum adipisicing irure irure eu. Velit tempor aliquip ullamco exercitation eiusmod.",
      "registered": "Sunday, November 15, 2015 5:07 AM",
      "latitude": "8.262047",
      "longitude": "-44.326753",
      "tags": [
        "ipsum",
        "ex",
        "et",
        "officia",
        "consequat"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lynne Sheppard"
        },
        {
          "id": 1,
          "name": "Ericka Parks"
        },
        {
          "id": 2,
          "name": "Vance Noel"
        }
      ],
      "greeting": "Hello, Hazel! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5860baeda48194f32c1c7370",
      "index": 4,
      "guid": "eb0be48f-adcf-4798-89eb-41e4e0911d6c",
      "isActive": false,
      "balance": "$3,554.43",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Iva",
        "last": "Lewis"
      },
      "company": "BITREX",
      "email": "iva.lewis@bitrex.co.uk",
      "phone": "+1 (946) 553-2771",
      "address": "242 Elm Avenue, Loomis, Wisconsin, 4389",
      "about": "Aute adipisicing anim ea nulla consequat cupidatat ea ipsum ad. Sint ad excepteur veniam cillum amet aute. Ullamco ad aliqua consequat anim Lorem laborum ipsum minim id do magna excepteur. Ullamco sint ex eiusmod pariatur reprehenderit.",
      "registered": "Wednesday, July 29, 2015 6:21 AM",
      "latitude": "32.364072",
      "longitude": "-169.806283",
      "tags": [
        "eu",
        "labore",
        "excepteur",
        "mollit",
        "ex"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Beth Serrano"
        },
        {
          "id": 1,
          "name": "Finch Cook"
        },
        {
          "id": 2,
          "name": "Goodman Caldwell"
        }
      ],
      "greeting": "Hello, Iva! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5860baed7302ea25fcc6799f",
      "index": 5,
      "guid": "f5d46044-2247-4b42-a828-149cb016e587",
      "isActive": true,
      "balance": "$2,040.78",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": {
        "first": "Ines",
        "last": "Hamilton"
      },
      "company": "PURIA",
      "email": "ines.hamilton@puria.com",
      "phone": "+1 (896) 532-3766",
      "address": "523 Myrtle Avenue, Wadsworth, Nevada, 6863",
      "about": "Dolore dolore cupidatat aliquip non et do duis eu sit duis excepteur officia eu. Reprehenderit aute tempor exercitation ullamco. In ex ut ea adipisicing nisi. Anim laboris ipsum exercitation veniam aliqua sit qui ea. Pariatur ex officia do id duis magna ipsum. Ut veniam pariatur adipisicing consequat culpa ut eu sit exercitation dolore incididunt ea dolor nulla.",
      "registered": "Saturday, December 19, 2015 10:37 PM",
      "latitude": "62.717562",
      "longitude": "-54.919356",
      "tags": [
        "aliquip",
        "incididunt",
        "exercitation",
        "aliqua",
        "ad"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sheree Castillo"
        },
        {
          "id": 1,
          "name": "Beasley Larson"
        },
        {
          "id": 2,
          "name": "Esperanza Rosa"
        }
      ],
      "greeting": "Hello, Ines! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5860baedf6a3ac4d17dfe590",
      "index": 6,
      "guid": "fc6b5e26-628a-4c5d-8280-9058ccd1b09f",
      "isActive": true,
      "balance": "$2,515.07",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": {
        "first": "Nellie",
        "last": "Duran"
      },
      "company": "REALYSIS",
      "email": "nellie.duran@realysis.net",
      "phone": "+1 (814) 486-3048",
      "address": "272 Thames Street, Remington, Alabama, 9436",
      "about": "Labore minim ea velit ad. Fugiat et ex veniam ipsum cupidatat nostrud non. Aliqua deserunt sint nulla et nisi incididunt. Magna veniam duis eiusmod labore laborum eu do cillum ad deserunt nulla amet excepteur. Nostrud amet cillum eiusmod do amet est proident quis aute. Magna aliqua et anim veniam ad nostrud sit eu sunt officia adipisicing fugiat laborum irure. In consectetur quis tempor elit exercitation minim eiusmod pariatur.",
      "registered": "Thursday, August 4, 2016 2:50 PM",
      "latitude": "-37.180035",
      "longitude": "-70.704313",
      "tags": [
        "irure",
        "mollit",
        "proident",
        "amet",
        "anim"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Amy Riddle"
        },
        {
          "id": 1,
          "name": "Holly Mcpherson"
        },
        {
          "id": 2,
          "name": "Wilkerson Chan"
        }
      ],
      "greeting": "Hello, Nellie! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5860baed82cef8d43c216e02",
      "index": 7,
      "guid": "98202c4b-d195-4fde-8fd9-d5a1f9589f81",
      "isActive": false,
      "balance": "$2,304.65",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": {
        "first": "Claire",
        "last": "Hernandez"
      },
      "company": "BISBA",
      "email": "claire.hernandez@bisba.io",
      "phone": "+1 (865) 495-2406",
      "address": "393 Dupont Street, Calpine, Minnesota, 4502",
      "about": "Pariatur ex pariatur velit est esse occaecat Lorem laboris enim officia anim aute dolor dolore. Aliqua anim incididunt pariatur commodo irure sit ex reprehenderit irure. Aliqua officia nulla sint pariatur duis anim elit adipisicing. In sit occaecat ut do. Ut ex tempor ex quis enim deserunt qui. Eu non consectetur dolor et eiusmod culpa magna exercitation minim. Mollit voluptate ex laboris deserunt id enim ullamco nulla non reprehenderit pariatur proident elit.",
      "registered": "Sunday, December 13, 2015 5:55 AM",
      "latitude": "-23.168958",
      "longitude": "8.594734",
      "tags": [
        "nisi",
        "dolore",
        "labore",
        "laborum",
        "et"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Crosby Chang"
        },
        {
          "id": 1,
          "name": "Leonor Chen"
        },
        {
          "id": 2,
          "name": "Thomas Hodges"
        }
      ],
      "greeting": "Hello, Claire! You have 5 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ];
  res.send(users);
});

module.exports = router;
