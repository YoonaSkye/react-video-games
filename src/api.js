//base URL
const base_url = "https://api.rawg.io/api/";
// API KEY
const apiKey = "66b04e46d2b44d50a48e4400b9b9e6ad";

// 获取当前月份
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  return month;
};

// 获取当前日期
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  return day;
};

// 当前日期 year-month-day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// 流行的游戏
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const popularGamesURL = () => `${base_url}${popularGames}`;
const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
const newGamesURL = () => `${base_url}${newGames}`;

// 游戏详情
const gameDetailURL = (game_id) => `${base_url}games/${game_id}?&key=${apiKey}`;

const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${apiKey}`;

const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=${apiKey}`;

export {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  gameDetailURL,
  gameScreenshotURL,
  searchGameURL,
};
