"use client";
import React, { useState } from "react";
import EstimateTableView from "@/app/_component/containers/dashboard/table/EstimateTableView";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import Button from "@/app/_component/presentations/Button";
import Dialog from "@/app/_component/presentations/Dialog";
import ConsumerProposeTable from "@/app/_component/containers/dashboard/table/ConsumerProposeTable";

const EstimateProposeView = () => {
  const [popUp, setPopUp] = useState(true);
  const [popUp2, setPopUp2] = useState(true);
  return (
    <div className={"flex flex-col gap-6 relative"}>
      <div className={"absolute top-0 z-20 right-0"}>
        <Button
          title={"엑셀 저장"}
          onClick={() => {}}
          variant={"bg-primary"}
          buttonSize={"md"}
        />
      </div>
      <DashBoardField title={"견적 제안 현황"}>
        <EstimateTableView />
      </DashBoardField>
      <DashBoardField title={"견적 제안 목록"}>
        <MaterialTableView />
      </DashBoardField>
      <DashBoardField title={"제안 & RFQ비교"}>
        <div className={" w-full h-full gap-4 flex flex-col"}>
          <h4>
            RFQ 요청 내용과 실제 제안한 내용의 수치를 비교하는 차트입니다.
          </h4>
          <div>그래프 영역입니다.</div>
        </div>
      </DashBoardField>
      <Dialog
        title={"ROSH 규제물질 시험결과"}
        content={
          <div
            className={
              "web:w-[900px] tablet:w-[750px] mobile:w-[300px] overflow-visible box-border p-2 mb-4 flex flex-col gap-4"
            }>
            <ConsumerProposeTable />
          </div>
        }
        isOpen={popUp2}
        hasBtn
        align={"start"}
        onClose={() => {}}
        isAlert={true}
        size={"full"}
        btn1Title={"닫기"}
        onButton1Click={() => {
          setPopUp2(false);
        }}
      />
      <Dialog
        title={"클레임 신청"}
        content={
          <div
            className={
              "tablet:w-[400px] mobile:w-[300px] overflow-visible box-border py-2 px-4 mb-4 flex flex-col gap-4"
            }>
            <div className={"flex flex-col gap-2"}>
              <textarea
                placeholder={"클레임 신청 사유를 작성해 주세요."}
                className={
                  "resize-none border-2 border-line_normal rounded-2xl w-full h-[80px] p-2"
                }
                value={""}
                onChange={() => {}}
              />
            </div>
          </div>
        }
        hasBtn
        align={"start"}
        isOpen={popUp}
        onClose={() => {}}
        isAlert={true}
        size={"full"}
        btn1Title={"닫기"}
        onButton1Click={() => {
          setPopUp(false);
        }}
      />
    </div>
  );
};

export default EstimateProposeView;
