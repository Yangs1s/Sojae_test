import React from "react";
import Button from "@/app/_component/presentations/Button";
import Link from "next/link";

const URLS = [
  { url: "/signin", label: "로그인" },
  { url: "/signup", label: "회원가입" },
  { url: "/signup/supplier", label: "공급자 회원가입 선택" },
  { url: "/signup/supplier/private", label: "공급자 개인 회원가입" },
  {
    url: "/signup/supplier/corporation",
    label: "공급자 법인 회원가입 (기본정보 입력)",
  },
  {
    url: "/signup/supplier/corporation/corInfo",
    label: "공급자 법인 회원가입 (회사정보 입력)",
  },
  {
    url: "/find/password",
    label: "비밀번호 찾기",
  },
  {
    url: "/find/email",
    label: "이메일 찾기",
  },
  {
    url: "/find/password-reset",
    label: "패스워드 재설정",
  },
  {
    url: "/estimate",
    label: "소재제안",
  },
  {
    url: "/my/interest-material",
    label: "마이페이지- 관심소재",
  },
  {
    url: "/my/modify",
    label: "마이페이지- 정보수정",
  },
  {
    url: "/my/withdraw",
    label: "마이페이지- 회원탈퇴",
  },
  {
    url: "/my/propose-material",
    label: "공급자 마이페이지 -소재 제안",
  },
  {
    url: "/my/interest-rfq",
    label: "공급자 마이페이지 -관심 RFQ",
  },
  {
    url: "/my/modify",
    label: "공급자 마이페이지 - 회원정보 수정",
  },
  {
    url: "/my/withdraw",
    label: "공급자 마이페이지 - 회원 탈퇴",
  },
  {
    url: "/my/interest-material",
    label: "수요자 마이페이지 - 관심 소재",
  },
  {
    url: "/my/withdraw",
    label: "수요자 마이페이지 - 소재 제안하기",
  },
  {
    url: "/my/withdraw",
    label: "수요자 마이페이지 - 회원정보 수정",
  },
  {
    url: "/dashboard?type=admin",
    label: "관리자 대시보드",
  },
  {
    url: "/dashboard?type=consumer",
    label: "수요자 대시보드",
  },
  {
    url: "/dashboard?type=supply",
    label: "공급자 대시보드",
  },
];

const Page = () => {
  return (
    <div className={" mobile:mt-[56px] h-full flex"}>
      <div
        className={
          "flex flex-col h-full items-center justify-center w-full max-w-[1280px] mt-[100px]"
        }>
        <h1 className={"text-[24px] font-bold"}>페이지 모음</h1>
        <div className={"flex flex-col gap-4 mt-[20px]"}>
          {URLS.map((url, index) => (
            <Link
              className={"text-[16px] font-bold"}
              href={url.url}
              key={index}>
              {url.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
