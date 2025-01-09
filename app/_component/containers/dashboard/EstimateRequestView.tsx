"use client";
import React, { useEffect, useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import EstimateTableView from "@/app/_component/containers/dashboard/table/EstimateTableView";
import Button from "@/app/_component/presentations/Button";
import Radio from "@/app/_component/presentations/Radio";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";
import Dialog from "@/app/_component/presentations/Dialog";

const EstimateRequestView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [popUp, setPopUp] = useState(true);
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setPopUp(true);
  }, []);
  return (
    <div className={"flex flex-col gap-12 relative "}>
      <div className={"absolute top-0 z-20 right-0"}>
        <Button
          title={"견적 요청"}
          onClick={() => {}}
          variant={"bg-primary"}
          buttonSize={"md"}
        />
      </div>
      <DashBoardField title={"견적 요청 진행 현황"}>
        <SearchFilterBox>
          <div
            className={
              "w-full flex web:flex-col tablet:flex-row tablet:items-start tablet:mb-0  mobile:flex-col mobile:mb-2 gap-6"
            }>
            <div className={"flex tablet:flex-col mobile:flex-col gap-6"}>
              <div
                className={
                  "flex gap-6 tablet:items-center mobile:items-start justify-center tablet:flex-row mobile:flex-col"
                }>
                <div className={"flex gap-2"}>
                  <Radio
                    value={"all"}
                    label={"전체"}
                    isChecked={selectedValue === "all"}
                    selectedValue={selectedValue}
                    onChange={(v) => {
                      handleRadioChange(v);
                    }}
                  />
                  <Radio
                    value={"date"}
                    label={"기간 설정"}
                    isChecked={selectedValue === "date"}
                    selectedValue={selectedValue}
                    onChange={(v) => {
                      handleRadioChange(v);
                    }}
                  />
                </div>
                <div className={"flex gap-3 tablet:flex-row mobile:flex-col"}>
                  <CustomDatePicker value={""} onChange={() => {}} />
                  <span className={"mobile:hidden tablet:block"}>~</span>
                  <CustomDatePicker value={""} onChange={() => {}} />
                </div>
              </div>
              <div className={"flex gap-6 mobile:flex-col tablet:flex-row"}>
                <div className={"flex tablet:flex-row mobile:flex-col gap-4"}>
                  <div className={"flex gap-4"}>
                    <Radio
                      value={"all"}
                      label={"전체"}
                      isChecked={selectedValue === "all"}
                      selectedValue={selectedValue}
                      onChange={(v) => {
                        handleRadioChange(v);
                      }}
                    />
                    <Radio
                      value={"save"}
                      label={"임시 저장"}
                      isChecked={selectedValue === "save"}
                      selectedValue={selectedValue}
                      onChange={(v) => {
                        handleRadioChange(v);
                      }}
                    />
                  </div>
                  <div className={"flex gap-4"}>
                    <Radio
                      value={"complete"}
                      label={"견적요청 완료"}
                      isChecked={selectedValue === "complete"}
                      selectedValue={selectedValue}
                      onChange={(v) => {
                        handleRadioChange(v);
                      }}
                    />
                    <Radio
                      value={"contract"}
                      label={"계약체결"}
                      isChecked={selectedValue === "contract"}
                      selectedValue={selectedValue}
                      onChange={(v) => {
                        handleRadioChange(v);
                      }}
                    />
                  </div>
                </div>
                <Button
                  className={"ml-auto"}
                  title={"검색"}
                  onClick={() => {}}
                  variant={"bg-black"}
                  buttonSize={"md"}
                />
              </div>
            </div>
          </div>
        </SearchFilterBox>
        <EstimateTableView />
      </DashBoardField>

      <DashBoardField title={"요청서 상세"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <EstimateTableView />
      </DashBoardField>

      <Dialog
        title={"샘플 요청 정보"}
        content={
          <div
            className={
              "flex px-4 pb-8 h-auto gap-5 bg-white flex-col tablet:w-[460px] mobile:w-[320px]"
            }>
            <div className={"flex-col flex gap-[15px]"}>
              <div className={"flex"}>
                <span
                  className={
                    "font-[500] w-[70px] whitespace-nowrap text-body1 text-common-normal"
                  }>
                  요청 일자
                </span>
                <p className={"text-normal_sub flex-1 text-body2"}>
                  2024.01.01
                </p>
              </div>
              <div className={"flex"}>
                <span
                  className={
                    "font-[500] w-[70px] whitespace-nowrap text-body1 text-common-normal"
                  }>
                  요청 물량
                </span>
                <p className={"text-normal_sub flex-1 text-body2"}>1000kg</p>
              </div>
              <div className={"flex"}>
                <span
                  className={
                    "font-[500] w-[70px] whitespace-nowrap text-body1 text-common-normal"
                  }>
                  요청자 명
                </span>
                <p className={"text-normal_sub flex-1 text-body2"}>홍길동</p>
              </div>
              <div className={"flex"}>
                <span
                  className={
                    "font-[500] w-[70px] whitespace-nowrap text-body1 text-common-normal"
                  }>
                  연락처
                </span>
                <p className={"text-normal_sub flex-1 text-body2"}>
                  010-9999-0000
                </p>
              </div>
            </div>
            <div className={"flex"}>
              <span
                className={
                  "font-[500] w-[70px] whitespace-nowrap text-body1 text-common-normal"
                }>
                주소
              </span>
              <textarea
                value={
                  "(01234) 서울시 강남구 테헤란로 124길 20, 소재모아 빌딩, 11F"
                }
                disabled={true}
                className={
                  "resize-none text-body2 overflow-hidden break-words whitespace-pre-wrap text-normal_sub flex-1"
                }
              />
              <button
                className={
                  "h-[28px] px-[12px] flex justify-center items-center bg-bg_normal rounded-[8px]"
                }>
                수정
              </button>
            </div>
          </div>
        }
        align={"start"}
        hasBtn
        isOpen={popUp}
        onClose={() => {}}
        isAlert={true}
        size={"full"}
        btn2Title={"확인"}
        btn1Title={"확인"}
        onButton1Click={() => {
          setPopUp(false);
        }}
        onButton2Click={() => {
          setPopUp(false);
        }}
      />
    </div>
  );
};

export default EstimateRequestView;
