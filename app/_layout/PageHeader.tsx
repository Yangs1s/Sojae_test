"use client";
import React, { useState } from "react";
import Button from "@/app/_component/presentations/Button";
import Link from "next/link";
import Image from "next/image";
import Dialog from "@/app/_component/presentations/Dialog";
import { useRouter } from "next/navigation";

const PageHeader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <header
      className={
        "z-40 fixed top-0 bg-white w-full flex tablet:h-[72px] mobile:h-[56px] justify-center"
      }>
      <div className={"mobile:my-auto w-full max-w-[1280px] px-4"}>
        <div className={"flex items-center w-full"}>
          <div className={"w-full flex justify-between items-center"}>
            <Link href="/" className="flex-shrink-0">
              <img
                src={"/logo.png"}
                alt="logo"
                className="w-auto h-[24px] tablet:h-[32px]"
              />
            </Link>

            {/*로그인 전*/}
            {/* <div className={"flex items-center gap-4"}>
              <div className={"flex items-center"}>
                <div className={"web:flex mobile:hidden"}>
                  <Link className={"px-4"} href="/signin">
                    로그인
                  </Link>
                  <Link className={"px-4"} href="/signup">
                    회원가입
                  </Link>
                </div>
                <div
                  className={"web:hidden mobile:flex mobile:mr-2 tablet:mr-4"}>
                  <img
                    src={"/hamburger.svg"}
                    alt={"menu"}
                    className="w-6 h-6"
                  />
                </div>
                <Link
                  className={
                    "tablet:flex web:flex mobile:hidden items-center rounded-[12px] px-4 bg-black text-white h-[40px] text-center"
                  }
                  href="/estimate">
                  견적요청
                </Link>
              </div>
            </div> */}

            <div className={"flex gap-4"}>
              <div className={"flex gap-2 items-center"}>
                <p className={"tablet:block mobile:hidden"}>현재 잔여 크레딧</p>
                <div className={"flex items-center gap-1"}>
                  <Image
                    src={"/credit.svg"}
                    alt={"크레딧"}
                    width={28}
                    height={28}
                  />
                  <p>12</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setOpen(true);
                }}>
                <Image src={"/bell.svg"} alt={"알림"} width={24} height={24} />
              </button>
              <Link href={"/my/propose-material?type=supplier"}>
                <Image src={"/user.svg"} alt={"유저"} width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        title={""}
        size={"full"}
        isOpen={open}
        onClose={() => setOpen(false)}
        content={
          <div className={"flex w-full flex-col gap-4 p-4"}>
            <div className="h-[500px] w-[400px] flex flex-col gap-4">
              {/* header */}
              <div className={"flex justify-between"}>
                <h1 className={"text-[16px] font-bold"}>알림</h1>
              </div>
              {/* content */}
              <ul className={"flex flex-col w-full gap-2"}>
                <li
                  role="presentation"
                  onClick={() => {
                    router.push("/");
                  }}
                  className={
                    "w-full items-center flex p-2 border-b-[1px] cursor-pointer "
                  }>
                  <div
                    className={
                      "flex w-full justify-between  hover:bg-gray-100 hover:rounded-[12px] p-2"
                    }>
                    <div className={"flex h-[48px] flex-col w-full"}>
                      <p className={"text-[14px] font-semibold"}>
                        알림 내용 알림 내용 알림내용
                      </p>
                      <p className={"text-[12px] text-gray-500"}>20분전</p>
                    </div>
                    <Image
                      src={"/nextButton.svg"}
                      alt={"다음"}
                      width={24}
                      height={24}
                    />
                  </div>
                </li>
                <li
                  role="presentation"
                  onClick={() => {
                    router.push("/");
                  }}
                  className={"w-full items-center flex p-2 border-b-[1px] "}>
                  <div
                    className={
                      "flex w-full justify-between  hover:bg-gray-100 hover:rounded-[12px] p-2"
                    }>
                    <div className={"flex h-[48px] flex-col w-full"}>
                      <p className={"text-[14px] font-semibold"}>
                        알림 내용 알림 내용 알림내용2
                      </p>
                      <p className={"text-[12px] text-gray-500"}>20분전</p>
                    </div>
                    <Image
                      src={"/nextButton.svg"}
                      alt={"다음"}
                      width={24}
                      height={24}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        }
        hasBtn={true}
        isAlert={true}
        btn1Title={"닫기"}
        onButton1Click={() => {
          setOpen(false);
        }}
      />
    </header>
  );
};

export default PageHeader;
