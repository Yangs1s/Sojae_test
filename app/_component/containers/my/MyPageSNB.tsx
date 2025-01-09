"use client";
import React from "react";
import Link from "next/link";
import {
  useSelectedLayoutSegments,
  usePathname,
  useSearchParams,
} from "next/navigation";

interface TabProps {
  label: string;
  link: string;
}

// 공급자랑 수요자 네비가 달라서 우선 두개 만들어놓겠습니다.
const MyPageSNB = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"web:w-[240px] mobile:w-full "} role={"navigation"}>
      {children}
    </div>
  );
};

export default MyPageSNB;

MyPageSNB.TabList = ({ sideTab }: { sideTab: TabProps[] }) => {
  const currentUrl = usePathname();
  const params = useSearchParams();

  const newUrl = () => {
    if (params.get("type") !== null) {
      return currentUrl + "?" + "type=" + params.get("type");
    }
    return currentUrl;
  };
  const shouldMarginAuto =
    currentUrl.includes("modify") ||
    currentUrl.includes("private") ||
    currentUrl.includes("corporation") ||
    currentUrl.includes("withdraw");
  const withdrawActive = currentUrl.includes("withdraw");

  return (
    <ul
      className={`
        flex bg-white border-primary_line h-max p-1 rounded-[8px] border-[1px]
        mobile:flex-row mobile:w-full mobile:max-w-[375px] mobile:gap-2
        web:fixed web:left-auto web:flex-col web:gap-1 web:w-[232px]
        tablet:w-full tablet:max-w-[300px] tablet:justify-start tablet:flex-row 
        ${shouldMarginAuto ? "tablet:m-auto" : "tablet:mr-auto"}
      `}>
      {sideTab.map((tab, idx) => {
        const isActive = tab.link === newUrl();
        return (
          <li
            key={idx}
            className={`
              flex items-center  mobile:justify-center px-4
              ${isActive ? "bg-primary_bg rounded-[8px] w-full" : ""}
              mobile:h-[40px] mobile:w-full
              tablet:h-[40px] tablet:w-[120px] 
              web:w-full web:h-[48px] web:justify-start
            `}>
            <Link
              href={tab.link}
              className={`
                text-title3 font-[500] 
                ${isActive ? "text-primary-normal" : "text-common-normal"}
              `}>
              {tab.label}
            </Link>
          </li>
        );
      })}

      {/* 회원탈퇴 링크 */}
      <li
        className={`
          flex items-center whitespace-nowrap text-medium-light underline text-body2
          mobile:h-[40px] mobile:w-full mobile:justify-center 
          tablet:h-[40px] tablet:w-[240px]
          web:w-full web:h-[48px] web:px-4 web:justify-start 
          ${withdrawActive ? "bg-primary_bg rounded-[8px] text-primary-normal w-full" : ""}
        `}>
        <Link href={"/my/withdraw"}>회원탈퇴</Link>
      </li>
    </ul>
  );
};

MyPageSNB.GridTabList = ({
  sideTab,
  withDrawPage,
}: {
  sideTab: TabProps[];
  withDrawPage: boolean;
}) => {
  const urls = useSelectedLayoutSegments();
  const currentUrl = usePathname();
  const params = useSearchParams();

  const newUrl = () => {
    if (params.get("type") !== null) {
      return currentUrl + "?" + "type=" + params.get("type");
    }
    return currentUrl;
  };
  const shouldMarginAuto =
    urls.includes("modify") ||
    urls.includes("private") ||
    currentUrl.includes("corporation") ||
    currentUrl.includes("withdraw");
  const withdrawActive = currentUrl.includes("withdraw");
  return (
    <div
      className={`bg-white h-max p-1 rounded-[8px] border-primary_line border-[1px]
      web:w-[240px] web:flex web:flex-col web:fixed web:left-auto 
      mobile:w-full tablet:flex tablet:flex-row tablet:max-w-fit ${shouldMarginAuto ? "tablet:m-auto" : "tablet:mr-auto"}
      `}>
      <ul
        className={`
        tablet:flex tablet:flex-row 
        mobile:grid mobile:grid-cols-2
        web:flex-col web:gap-1 
        web:w-[240px] web:pr-2
      `}>
        {sideTab.map((tab, idx) => {
          const isActive = tab.link === newUrl() || newUrl().includes(tab.link);
          console.log(newUrl(), tab.link);
          return (
            <li
              key={idx}
              className={`w-full 
                flex items-center  whitespace-nowrap px-4
              ${isActive ? "bg-primary_bg rounded-[8px]" : ""}
              mobile:h-[40px] mobile:w-full mobile:justify-center
              tablet:h-[40px] 
              web:w-full web:h-[48px] web:justify-start 
            `}>
              <Link
                href={tab.link}
                className={`
                text-title3 font-[500] 
                ${isActive ? "text-primary-normal" : "text-common-normal"}
              `}>
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* 회원탈퇴 링크 */}
      {withDrawPage && (
        <Link
          href={"/my/withdraw"}
          className={`
          flex web:justify-start mobile:items-center whitespace-nowrap text-medium-light underline text-body2
          mobile:h-[40px] mobile:w-full mobile:justify-center 
          tablet:h-[40px]
          web:w-full web:h-[48px] web:px-5 tablet:w-[100px]
          ${withdrawActive ? "bg-primary_bg rounded-[8px] text-primary-normal w-full" : ""}
        `}>
          회원탈퇴
        </Link>
      )}
    </div>
  );
};
