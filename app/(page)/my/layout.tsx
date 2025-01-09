"use client";
import React from "react";
import MyPageSNB from "@/app/_component/containers/my/MyPageSNB";
import { useSelectedLayoutSegments } from "next/navigation";

// 수요자

const CONSUMER_SIDE_TAB_MENU = [
  { label: "관심 소재", link: "/my/interest-material" },
  { label: "소재 제안하기", link: "/my/propose-material?type=consumer" },
  { label: "회원정보 수정", link: "/my/modify" },
];
// 공급자
const SUPPLIER_SIDE_TAB_MENU = [
  { label: "소재 제안하기", link: "/my/propose-material?type=supplier" },
  { label: "관심 RFQ", link: "/my/interest-rfq" },
  { label: "회원정보 수정", link: "/my/modify" },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "tablet:w-[1000px] web:w-[1280px] web:m-0 tablet:m-auto mobile:w-auto tablet:mb-[96px] mobile:mb-[48px] tablet:min-h-screen mobile:h-full"
      }>
      <div
        className={
          "flex web:m-auto tablet:m-auto web:mt-[144px] mobile:mt-[56px] tablet:flex-col tablet:mt-[78px] web:flex-row mobile:flex-col web:w-[1280px] mobile:w-auto h-full gap-10"
        }>
        <MyPageSNB>
          {/*<MyPageSNB.TabList sideTab={CONSUMER_SIDE_TAB_MENU} tabLength={4} />*/}
          <MyPageSNB.GridTabList
            sideTab={SUPPLIER_SIDE_TAB_MENU}
            withDrawPage={true}
          />
        </MyPageSNB>
        <div className={"max-w-[1000px] w-full h-full"}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
