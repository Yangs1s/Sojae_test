"use client";
import React, { useState } from "react";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import Dropdown from "@/app/_component/presentations/Dropdown";
import { DROPDOWN_TEST_BOX } from "@/app/_constant";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Radio from "@/app/_component/presentations/Radio";
import Button from "@/app/_component/presentations/Button";
import Input from "@/app/_component/presentations/Input";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import MaterialRequestTable from "@/app/_component/containers/dashboard/table/MaterialRequestTable";

const MaterialAddView = () => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selected, setSelected] = React.useState<{
    label: string;
    value: string;
  }>({ label: "", value: "" });

  const handleOpenDropdown = () => {
    setDropDownOpen((p) => !p);
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  //TODO:테이블교체
  return (
    <div className={"flex flex-col gap-6 relative"}>
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
          <div className={"flex flex-col gap-2"}>
            <SearchFilterBox.Type1 />
            <FieldSet label={"등록번호"} required={false}>
              <div
                className={
                  "mobile:w-full tablet:w-fit flex gap-4 items-center mobile:flex-col tablet:flex-row"
                }>
                <Input
                  classNames={
                    "tablet:w-[216px] mobile:min-w-[300px] border-none h-[40px] rounded-[8px]"
                  }
                  name={"specEtc"}
                  value={""}
                  height={"h-[40px]"}
                  type={"text"}
                  handleChange={() => {}}
                  placeholder={"등록번호를 입력하세요"}
                  labelPosition={"no-label"}
                />
                <Button
                  title={"검색"}
                  onClick={() => {}}
                  variant={"bg-black"}
                  buttonSize={"md"}
                  className={"w-full"}
                />
              </div>
            </FieldSet>
          </div>
        </SearchFilterBox>
      </DashBoardField>
      <DashBoardField title={"등록한 소재 목록"}>
        <div
          className={
            "tablet:absolute top-[-12px] z-20 right-0 flex tablet:flex-row mobile:flex-col gap-2"
          }>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />{" "}
          <Button
            title={"등록 요청"}
            onClick={() => {}}
            variant={"bg-black"}
            buttonSize={"md"}
          />
        </div>
        <MaterialRequestTable />
      </DashBoardField>
      <DashBoardField title={"공급 소재 정보"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <MaterialRequestTable />
      </DashBoardField>
      <DashBoardField title={"등록 소재 상세 정보"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <MaterialRequestTable />
      </DashBoardField>
    </div>
  );
};

export default MaterialAddView;
