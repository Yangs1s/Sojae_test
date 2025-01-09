import React from "react";

const FlexibleLayout = ({
  children,
  extendStyleCode,
}: {
  children: React.ReactNode;
  extendStyleCode?: string;
}) => {
  return (
    <div className={`flex mobile:flex-col tablet:flex-row ${extendStyleCode}`}>
      {children}
    </div>
  );
};

export default FlexibleLayout;
