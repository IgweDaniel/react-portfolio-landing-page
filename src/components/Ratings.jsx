import React from "react";
import { ReactComponent as StarIcon } from "../assets/svg/star.svg";

const MAX_RATING = 5,
  MIN_RATING = 1,
  ICON_SIZE = 18;

export const Ratings = ({ value = MIN_RATING }) => {
  if (value > MAX_RATING) {
    value = MAX_RATING;
  } else if (value < MIN_RATING) {
    value = MIN_RATING;
  }

  return (
    <div className="flex">
      {Array.from({ length: MAX_RATING }).map((_, i) => (
        <StarIcon
          key={i}
          width={ICON_SIZE}
          height={ICON_SIZE}
          fill={i + 1 <= value ? "#FBB040" : "#ccc"}
        />
      ))}
    </div>
  );
};
