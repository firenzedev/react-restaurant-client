import { useEffect, useState } from "react";
import Star from "./Star";

const maximum = new Array(5).fill();

export default function Rating({ rating, onChange }) {
  const [value, setValue] = useState(Math.ceil(rating));
  function onStarClicked(value) {
    return function () {
      if (onChange) {
        setValue(value);
        onChange(value);
      }
    };
  }

  useEffect(() => {
    setValue(Math.ceil(rating));
  }, [rating]);

  return (
    <div className="flex items-center">
      {maximum.map((item, index) => (
        <Star
          onClick={onStarClicked(index + 1)}
          key={`rating-${index}`}
          color={
            value > index
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-500"
          }
        />
      ))}
    </div>
  );
}
