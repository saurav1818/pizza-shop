export const convertSecondsToMinutes = (timeElapsed) => {
  let rem = Math.floor(timeElapsed / 60);
  if (rem > 1) {
    return `${rem} mins : ${timeElapsed - rem * 60} secs`;
  } else if (rem > 0) {
    return `${rem} min : ${timeElapsed - rem * 60} secs`;
  } else {
    return `${timeElapsed} secs`;
  }
};

export const orderMakingTime = (order) => {
  if (order.stage === "making") {
    if (order.size === "small") {
      return 180;
    } else if (order.size === "medium") {
      return 240;
    } else if (order.size === "large") {
      return 300;
    }
  }
  return 180;
};
