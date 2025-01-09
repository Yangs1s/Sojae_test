import React from "react";

const Arrow = ({ color }: { color: string }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="15"
        viewBox="0 0 17 15"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5261 6.20633L8.07005 1.72597L9.538 0.25L16.5 7.25L9.538 14.25L8.07005 12.774L12.5261 8.29367H0.5V6.20633H12.5261Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Arrow;
