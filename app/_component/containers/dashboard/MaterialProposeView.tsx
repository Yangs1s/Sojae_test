"use client";
import React, { useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Radio from "@/app/_component/presentations/Radio";
import Button from "@/app/_component/presentations/Button";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import MaterialRequestTable from "@/app/_component/containers/dashboard/table/MaterialRequestTable";
import MaterialProposeInfoTable from "@/app/_component/containers/dashboard/table/MaterialProposeInfoTable";
import MaterialProposeDetailTable from "@/app/_component/containers/dashboard/table/MaterialProposeDetailTable";

const MaterialProposeView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectNumber, setSelectNumber] = useState<string>("");
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className={"flex flex-col gap-6 relative"}>
      <DashBoardField title={"소재 제안 현황"}>
        <SearchFilterBox>
          <div
            className={
              "flex tablet:items-center gap-4 mobile:flex-col tablet:flex-row"
            }>
            <div className={"flex gap-5 z-2"}>
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
            <div className={"flex gap-3 tablet:flex-row mobile:flex-col mt-2"}>
              <input
                type={"date"}
                className={"tablet:w-[200px] mobile:w-full"}
              />
              <span className={"mobile:hidden tablet:block"}>~</span>
              <input
                type={"date"}
                className={"tablet:w-[200px] mobile:w-full"}
              />

              <Button
                title={"검색"}
                onClick={() => {}}
                variant={"bg-black"}
                buttonSize={"md"}
              />
            </div>
          </div>
        </SearchFilterBox>
      </DashBoardField>
      <DashBoardField title={"소재 제안 정보"}>
        {" "}
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <MaterialProposeInfoTable
          setSelectProposeNumber={setSelectNumber}
          selectProposeNumber={selectNumber}
        />
      </DashBoardField>
      <DashBoardField title={"소재 상세 정보"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        {<MaterialProposeDetailTable selectProposeNumber={selectNumber} />}
      </DashBoardField>
      <DashBoardField title={"RFQ & 제안 비교 차트"}>
        <div>그래프 영역</div>
      </DashBoardField>
    </div>
  );
};

export default MaterialProposeView;
