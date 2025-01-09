"use client";
import React from "react";
import MyPageSNB from "@/app/_component/containers/my/MyPageSNB";
import { useSearchParams } from "next/navigation";

// 수요자 : 대시보드 / 견적 요청 현황 / 견적 제안 현황 / 공급 소재 검색 / 소재 계약 현황
//
// 공급자 : 대시보드 / 소재 등록 현황 / 소재 제안 현황 / RFQ 제안 검색 / 계약 체결 및 납품 현황

const CONSUMER_SIDE_TAB_MENU = [
  { label: "대시보드", link: "/dashboard?type=consumer" },
  { label: "견적 요청 현황", link: "/dashboard/status?type=estimate-request" },
  { label: "견적 제안 현황", link: "/dashboard/status?type=estimate-propose" },
  { label: "공급 소재 검색", link: "/dashboard/supply-search" },
  { label: "소재 계약 현황", link: "/dashboard/status?type=material-contract" },
];

const SUPPLIER_SIDE_TAB_MENU = [
  { label: "대시보드", link: "/dashboard?type=supply" },
  {
    label: "소재 등록 현황",
    link: "/dashboard/status?type=material-add",
  },
  {
    label: "소재 제안 현황",
    link: "/dashboard/status?type=material-propose",
  },
  { label: "RFQ 제안 검색 ", link: "/dashboard/supply-rfq" },
  {
    label: "계약체결 및 납품현황",
    link: "/dashboard/status?type=delivery-contract",
  },
];

// 관리자 메뉴
const ADMIN_SIDE_TAB_MENU = [
  { label: "대시보드", link: "/dashboard?type=admin" },
  {
    label: "견적/제안 관리",
    link: "/dashboard/status?type=admin-material-add",
  },
  {
    label: "소재등록/제안 관리",
    link: "/dashboard/status?type=admin-material-propose",
  },
  { label: "소재계약/납품 관리", link: "/dashboard/material-contract" },
  { label: "회원관리", link: "/dashboard/admin-member" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  return (
    <div
      className={
        "tablet:w-[1000px] web:w-[1280px] web:m-0 tablet:m-auto mobile:w-auto tablet:mb-[96px] mobile:mb-[48px] tablet:min-h-screen mobile:h-full"
      }>
      <div
        className={
          "flex web:m-auto mobile:w-auto tablet:m-auto web:mt-[144px] mobile:mt-[56px] tablet:flex-col tablet:mt-[78px] web:flex-row mobile:flex-col web:w-[1280px]  web:min-h-screen overflow-y-auto gap-10"
        }>
        <MyPageSNB>
          <MyPageSNB.GridTabList
            withDrawPage={false}
            sideTab={ADMIN_SIDE_TAB_MENU}
          />
        </MyPageSNB>
        <div
          className={
            " web:w-full tablet:max-w-[1000px] mobile:w-full  overflow-hidden"
          }>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
