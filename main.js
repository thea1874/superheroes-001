const superheroes = [
  {
    name: "Bruce Wayne",
    good: true,
    power: [
      "money",
      "strength",
      "wings",
      "jawline",
      "immortal",
      "genius",
      "karate",
    ],
    height: 188,
    dob: {
      year: 1939,
      month: 5,
      day: 27,
    },
    image: "https://static1.funidelia.com/474152-f4_large/batman-kostume.jpg",
  },
  {
    name: "Batman",
    power: ["Strength", "rich", "intelligent", "strong"],
    good: true,
    height: 185,
    dob: {
      year: 1938,
      month: 4,
      day: 25,
    },
    image:
      "https://www.kino.dk/sites/default/files/primary-pictures/the-batman.jpg",
  },
  {
    name: "Catwoman",
    power: ["sharp claws", "agile", "speedy", "great balance", "precise"],
    good: true,
    height: 170,
    dob: {
      year: 1992,
      month: 3,
      day: 31,
    },
    image:
      "https://static.wikia.nocookie.net/dc-superherogirls/images/0/01/CI_NSwitch_DCSuperHeroGirlsTP_CatWomen.png/revision/latest?cb=20210605135951",
  },

  {
    name: "catwoman",
    power: ["flexible", "pickpocketing"],
    good: true,
    height: 170,
    dob: {
      year: "1992",
      month: "3",
      day: "31",
    },
    image:
      "https://www.latercera.com/resizer/L_HtYppsEdUCt9tTXinm3e0bqwk=/900x600/filters:focal(372x205:382x195)/cloudfront-us-east-1.images.arcpublishing.com/copesa/GKMIGUJ4TZD2BH6EZK76R4OEKE.jpg",
  },
  {
    name: "Json Derulo",
    power: ["superprogrammer", "mindreader", "goodlooks"],
    good: true,
    dob: { year: 1942, month: 8, day: 8 },
    height: 210,
    image: "https://pbs.twimg.com/media/D_qm0o5UwAArLFr?format=jpg&name=large",
  },
  {
    name: "jeffman",
    power: ["flyver", "telepati", "styrke", "usynlighed", "speed"],
    good: true,
    height: 180,
    dob: { year: 1989, month: 5, day: 16 },
    image:
      "https://www.imdb.com/title/tt5509176/mediaviewer/rm3242858496/?ref_=tt_ov_i",
  },
  {
    name: "jSONman",
    power: ["Invisibility", "Speed", "Flying"],
    good: true,
    height: 3.2,
    dob: {
      year: 1990,
      month: 9,
      date: 9,
    },
    image:
      "https://i.pinimg.com/736x/bb/85/b4/bb85b48059d56585c660d93c51dba850--superhero-names-superhero-ideas.jpg",
  },
  {
    name: "Mr. Snakeman",
    power: ["Laser Eyes", "Super Strength", "Never Thirsty"],
    good: false,
    height: 12,
    dob: {
      year: 1862,
      month: 7,
      day: 21,
    },
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Hulk",
    power: ["strong", "green", "growing big", "friendly"],
    good: true,
    height: 2.43,
    dob: {
      year: 1969,
      month: 12,
      day: 18,
    },
    image:
      "https://static.wikia.nocookie.net/characterprofile/images/d/d5/Hulk.png/revision/latest?cb=20160103071611",
  },
  {
    name: "spiderman",
    power: ["web", "strength", "speed", "reflexes", "durability", "healing"],
    good: true,
    height: 178,
    dob: { year: 1962, month: 8, day: 10 },
    image:
      "https://hbomax-images.warnermediacdn.com/images/GYeg4RQeJUMINtwEAAAHk/tileburnedin?size=1280x720&partner=hbomaxcom&v=adb737e6fe62cf76e6e48973c853fe7c&host=art-gallery.api.hbo.com&language=da-dk&w=1280",
  },
  {
    name: "black panter",
    power: ["fighting skills", "vibranium suit"],
    good: true,
    height: 180,
    dob: {
      year: 1987,
      month: 7,
      day: 25,
    },

    image: "https://nummer9.dk/wp-content/uploads/2018/03/p05y5wtj.jpg",
  },
  {
    name: "Spaghettimonster",
    power: [
      "flying",
      "invisibility",
      "invulnerability",
      "immortality",
      "omnificent",
      "omniscience",
    ],
    good: false,
    height: 5433,
    dob: {
      year: 2005,
      month: 1,
      day: 1,
    },
    image:
      "https://mentormedier-dagen-prod.cdn.arcpublishing.com/resizer/3YjllgWDvaVWF-G53T_XwA2_oew=/arc-photo-mentormedier/eu-central-1-prod/public/RFZXDDIGXOI3R5WUSA2X6MAYO4.jpg",
  },
  {
    name: "Spiderman",
    power: ["sticky", "strong", "endurance", "spidersense"],
    good: true,
    height: 178,
    dob: {
      year: 1996,
      month: 7,
      day: 29,
    },
    image:
      "https://billeder.jyllands-posten.dk/4XMD1ujeo_Ig_OmQyI52bLfwiXP1RC11SrTgDE5lGqI/resize:fill:940:0:0/plain/https%3A%2F%2Fbilleder.jyllands-posten.dk%2Fpictures%2Fimage%2F9704104%2Fe2yax2%2FALTERNATES%2Fmaster-3_2%2Ffilm-review-spider-man-homecoming",
  },
  {
    name: "spiderman",
    power: ["strong", "senses", "sticky"],
    good: true,
    height: 170,
    dob: {
      year: 1962,
      month: 8,
      day: 10,
    },
    image:
      "https://i-viaplay-com.akamaized.net/viaplay-prod/876/528/1646293395-c0c1299686959bf392ec32984548c30445be69e2.jpg?width=960&height=540",
  },
  {
    name: "antman",
    power: ["sizing", "suit", "strength"],
    good: true,
    height: 180,
    dob: {
      year: 1962,
      month: 1,
      day: 27,
    },
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt64173c3e44a0a011/antman--Sidekick-Tall-1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
  },
];
console.table(superheroes);
