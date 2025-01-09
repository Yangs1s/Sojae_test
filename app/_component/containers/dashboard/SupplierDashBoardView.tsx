"use client";
import React from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import StatusBox from "@/app/_component/presentations/StatusBox";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import Image from "next/image";
import MaterialRequestTable from "@/app/_component/containers/dashboard/table/MaterialRequestTable";
import Button from "@/app/_component/presentations/Button";

const SupplierDashBoardView = () => {
  return (
    <div className={"flex flex-col gap-12"}>
      <DashBoardField title={"전체현황"}>
        <SearchFilterBox>
          <SearchFilterBox.Type1 />
        </SearchFilterBox>
        <div
          className={
            "flex gap-6 tablet:flex-row mobile:flex-col tablet:justify-between w-full mobile:items-center"
          }>
          <StatusBox
            info={[
              {
                num: 9,
                desc: "소재 등록",
                textColor: "text-primary-normal",
              },
              {
                num: 5,
                desc: "승인 검토 중",
                textColor: "text-normal_sub",
              },
              {
                num: 4,
                desc: "등록 승인",
                textColor: "text-normal_sub",
              },
            ]}
            variant={"bg-primary"}
          />
          <StatusBox
            customStyle={
              "tablet:flex tablet:w-fit tablet:justify-between tablet:h-full tablet:items-center tablet:px-3 " +
              "mobile:grid mobile:grid-cols-[_minmax(124px,_1fr)_160px] gap-2 mobile:w-full mobile:h-[400px] "
            }
            info={[
              {
                num: 3,
                desc: "고객사 제안",
                textColor: "text-error",
              },
              {
                num: 1,
                desc: "미제안",
                textColor: "text-normal_sub",
              },
              {
                num: 1,
                desc: "고객사 검토 중",
                textColor: "text-normal_sub",
              },
              {
                num: 1,
                desc: "고객사 거절",
                textColor: "text-normal_sub",
              },
            ]}
            variant={"bg-error"}
          />
          <StatusBox
            info={[
              {
                num: 2,
                desc: "계약 체결",
                textColor: "text-secondary-normal",
              },
              {
                num: 1,
                desc: "소재 준비중",
                textColor: "text-normal_sub",
              },
              {
                num: 1,
                desc: "공급중",
                textColor: "text-normal_sub",
              },
            ]}
            variant={"bg-secondary"}
          />
        </div>
      </DashBoardField>
      <DashBoardField title={"소재 등록 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <SearchFilterBox>
          <SearchFilterBox.Type1 />
        </SearchFilterBox>
        <MaterialRequestTable />
      </DashBoardField>
      <DashBoardField title={"소재 제안 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <SearchFilterBox>
          <SearchFilterBox.Type1 />
        </SearchFilterBox>
        <MaterialRequestTable />
      </DashBoardField>
      <div
        className={
          "tablet:grid grid-cols-2 grid-rows-1 mobile:flex flex-col gap-4 mb-[5%]"
        }>
        <DashBoardField title={"소재 별 수요사 수"}>
          {/* 어떤 라이브러리를 이용하실 지 몰라서 우선 이미지로만 붙여놨습니다. */}
          <figure>
            <Image src="/graph.png" alt="그래프" width={420} height={400} />
          </figure>
        </DashBoardField>
        <DashBoardField title={"공급/수요 업체 위치"}>
          <figure>
            <Image src="/map.png" alt="그래프" width={488} height={400} />
          </figure>
        </DashBoardField>
      </div>
    </div>
  );
};

export default SupplierDashBoardView;
