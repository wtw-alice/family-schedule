// The family's schedule. This is the only file you edit to add events.
// SAMPLE DATA ONLY: no real names, schools, addresses or photos while the repo is public.

window.FAMILY = {
  name: { en: "Max & Leo's Schedule", zh: "Max 和 Leo 的行程" },

  // Set up once. "photo" can point to an image file later; for now each person shows initials.
  people: {
    max: { name: { en: "Max", zh: "Max" }, initials: "M", photo: "" },
    leo: { name: { en: "Leo", zh: "Leo" }, initials: "L", photo: "" },
    mom: { name: { en: "Mom", zh: "媽媽" }, initials: "媽", photo: "" },
    dad: { name: { en: "Dad", zh: "爸爸" }, initials: "爸", photo: "" },
  },

  // Who comes along when an event doesn't say. Saves typing it every time.
  defaultParents: ["mom", "dad"],
};

// Each event:
//   kids      who it's for (ids from people above)
//   parents   optional, who's bringing them; leave out to use defaultParents
//   date      "YYYY-MM-DD"
//   start, end   "HH:MM" in 24-hour time
//   type      game, recital, beach, meal, party, school, or other (picks the icon)
//   place     name shown, plus what to search for in Maps
//   title, note, tips   in both languages: en (English), zh (Traditional Chinese)

window.EVENTS = [
  {
    kids: ["max", "leo"],
    date: "2026-11-14", start: "10:00", end: "11:15",
    type: "game",
    place: { name: "Riverside Park, Field 3", search: "Riverside Park" },
    title: { en: "Soccer game", zh: "足球比賽" },
    note: { en: "Last game of the fall season!", zh: "秋季最後一場比賽！" },
    tips: {
      en: ["Just come watch and cheer", "Bring a folding chair", "Record videos for the family"],
      zh: ["來看比賽、幫他們加油就好", "可以帶一張摺疊椅", "幫家人錄影片"],
    },
  },
  {
    kids: ["max"],
    parents: ["mom"],
    date: "2026-11-21", start: "15:30", end: "16:30",
    type: "recital",
    place: { name: "Community Center Hall", search: "Community Center" },
    title: { en: "Piano recital", zh: "鋼琴發表會" },
    note: { en: "Max plays second.", zh: "Max 第二個上台表演。" },
    tips: {
      en: ["Arrive 10 minutes early for a seat", "Flowers after the show are a nice touch"],
      zh: ["提早十分鐘到比較有位子", "表演結束後送一束花會很貼心"],
    },
  },
  {
    kids: ["max", "leo"],
    date: "2026-11-29", start: "12:00", end: "13:30",
    type: "meal",
    place: { name: "Golden Garden Dim Sum", search: "Golden Garden Dim Sum" },
    title: { en: "Family dim sum", zh: "家庭飲茶" },
    note: { en: "Our usual Sunday lunch. Pull up a chair!", zh: "我們平常的週日午餐，歡迎一起來！" },
    tips: { en: ["Come hungry"], zh: ["空著肚子來"] },
  },
  {
    kids: ["leo"],
    parents: ["dad"],
    date: "2026-12-05", start: "09:00", end: "09:45",
    type: "school",
    place: { name: "Elementary school gym", search: "Elementary School" },
    title: { en: "Winter class performance", zh: "冬季班級表演" },
    note: { en: "Leo's class is singing two songs.", zh: "Leo 的班級會唱兩首歌。" },
    tips: {
      en: ["Check in at the front office", "Bring a photo ID"],
      zh: ["請先到學校辦公室登記", "記得帶有照片的證件"],
    },
  },
  {
    kids: ["max", "leo"],
    date: "2026-12-19", start: "11:00", end: "14:00",
    type: "beach",
    place: { name: "Sunset Beach", search: "Sunset Beach" },
    title: { en: "Beach morning", zh: "海邊早晨" },
    note: { en: "Building sandcastles if the weather is nice.", zh: "天氣好的話，我們會去堆沙堡。" },
    tips: {
      en: ["Bring sunscreen and a hat", "Bring a towel or beach chair", "Wear shoes you can get sandy"],
      zh: ["帶防曬乳和帽子", "帶毛巾或海灘椅", "穿不怕弄髒的鞋子"],
    },
  },
];
