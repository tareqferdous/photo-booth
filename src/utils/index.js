export const getDateDifference = (fromDate) => {
  const now = new Date();
  const past = new Date(fromDate);

  const difference = now - past; // difference in milliseconds

  const second = Math.floor(difference / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);

  if (year > 0) return `${year} year${year > 1 ? "s" : ""} ago`;
  if (month > 0) return `${month} month${month > 1 ? "s" : ""} ago`;
  if (week > 0) return `${week} week${week > 1 ? "s" : ""} ago`;
  if (day > 0) return `${day} day${day > 1 ? "s" : ""} ago`;
  if (hour > 0) return `${hour} hour${hour > 1 ? "s" : ""} ago`;
  if (minute > 0) return `${minute} minute${minute > 1 ? "s" : ""} ago`;
  if (second >= 0) return `${second} second${second > 1 ? "s" : ""} ago`;
};
