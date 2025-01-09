import React from "react";
import Link from "next/link";
import Arrow from "@/public/Arrow";

interface LinkTabProps extends React.HTMLAttributes<HTMLDivElement> {
  bg: string;
  text: string;
  url: string;
  textColor: string;
  arrowColor: string;
}

const LinkTab = ({ bg, text, textColor, url, arrowColor }: LinkTabProps) => {
  return (
    <Link
      className={`w-full p-[16px] rounded-[12px] ${textColor}
        ${bg} flex items-center gap-3
        mobile:justify-between web:justify-center web:h-[105px] mobile:h-[80px]`}
      href={url}>
      <p className={`mobile:text-[20px]`}>{text}</p>
      <Arrow color={arrowColor} />
    </Link>
  );
};

export default LinkTab;
