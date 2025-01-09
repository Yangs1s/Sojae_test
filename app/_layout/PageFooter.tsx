"use client";
import React from "react";
import { useSelectedLayoutSegments } from "next/navigation";

const PageFooter = () => {
  const url = useSelectedLayoutSegments();
  const shouldShowFooter = url.find((u) => u === "find" || u === "modify");

  return (
    <footer className={`w-full bg-white ${shouldShowFooter ? "hidden" : ""}`}>
      <div className={"w-full max-w-[1280px] mx-auto px-4 py-8"}>
        <div className={"flex flex-col gap-4 border-t border-[#EEE] pt-8"}>
          <figure className="flex-shrink-0">
            <img
              src={"/small-logo.png"}
              alt="logo"
              className="w-auto h-[24px] tablet:h-[32px]"
            />
          </figure>

          <div className={"mobile:hidden tablet:grid tablet:grid-cols-2 gap-1"}>
            <div className={"flex gap-6 flex-wrap"}>
              <span className={"text-body1 whitespace-nowrap"}>
                대표자: 홍길동
              </span>
              <span className={"text-body1 break-keep"}>
                소재지 : 서울시 강남구 강남대로 0길 00 빌딩 1111호
              </span>
            </div>

            <div className={"flex gap-3 justify-end flex-wrap"}>
              <span className={"text-body1"}>개인정보 처리방침</span>
              <p>|</p>
              <span className={"text-body1"}>이용약관</span>
            </div>
            <div className={"flex gap-6 flex-wrap"}>
              <span className={"text-body1"}>대표번호 : 000-0000</span>
              <span className={"text-body1"}>이메일 : info@mail.com</span>
              <span className={"text-body1"}>
                사업자 등록 번호 : 000-00-00000
              </span>
            </div>
            <div className={"flex justify-end"}>
              <span className={"text-body1"}>
                Copyright ⓒ 소재모아 All right reserves.
              </span>
            </div>
          </div>

          <div className={"tablet:hidden mobile:flex mobile:flex-col gap-3"}>
            <div className={"flex flex-col gap-2"}>
              <span className={"text-[13px]"}>대표자: 홍길동</span>
              <span className={"text-[13px] break-keep"}>
                소재지 : 서울시 강남구 강남대로 0길 00 미르빌딩 1111호
              </span>
              <span className={"text-[13px]"}>대표번호 : 000-0000</span>
              <span className={"text-[13px]"}>이메일 : info@mail.com</span>
              <span className={"text-[13px]"}>
                사업자 등록 번호 : 000-00-00000
              </span>
              <div className={"flex gap-2"}>
                <span className={"text-[13px]"}>개인정보 처리방침</span>
                <p>|</p>
                <span className={"text-[13px]"}>이용약관</span>
              </div>
              <span className={"text-[13px] mt-4"}>
                Copyright ⓒ 소재모아 All right reserves.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
