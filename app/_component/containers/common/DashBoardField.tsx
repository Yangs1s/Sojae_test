import React from "react";

const DashBoardField = ({
  children,
  title,
  subTitle,
}: {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className={"flex flex-col gap-6 relative"}>
      <div className={"flex gap-1 tablet:items-start mobile:items-center"}>
        <h2
          className={
            "tablet:text-h3 mobile:text-title2 font-[500] tablet:mb-3"
          }>
          {title}
        </h2>
        <h6
          className={
            "text-normal_sub tablet:text-title2 mobile:text-body2 mt-1"
          }>
          {subTitle}
        </h6>
      </div>
      {children}
    </div>
  );
};

export default DashBoardField;
