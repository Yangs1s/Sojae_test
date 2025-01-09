"use client";
import React, { useState } from "react";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import Radio from "@/app/_component/presentations/Radio";
import FieldSet from "@/app/_component/presentations/FieldSet";
import Input from "@/app/_component/presentations/Input";
import Button from "@/app/_component/presentations/Button";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";
import Image from "next/image";
import ConsumerProposeTable from "@/app/_component/containers/dashboard/table/ConsumerProposeTable";
import Dialog from "@/app/_component/presentations/Dialog";
import ContractPaper from "@/app/_component/presentations/ContractPaper";
const headers = [
  { label: "계약 번호", rowspan: 1 },
  { label: "납품시작일", rowspan: 1 },
  { label: "납품 종료일", rowspan: 1 },
  { label: "납품 가 (원/kg)", rowspan: 1 },
  { label: "납품 차수", rowspan: 1 },
  { label: "납품 일자", rowspan: 1 },
  { label: "완료", rowspan: 1 },
  { label: "잔여 차수", rowspan: 1 },
  { label: "소재 상세 정보", rowspan: 1 },
  { label: "계약서", rowspan: 1 },
];
const mockData = [
  {
    id: "1",
    contract: {
      number: "1234",
      date: "24.12.31",
      degree: "12",
    },
    supply: {
      startDate: "25.01.04",
      endDate: "25.01.04",
      degree: "10",
      price: "850",
      volume: "200",
    },
    contractPaper: "",
  },
  {
    id: "2",
    contract: {
      number: "1234",
      date: "24.12.31",
      degree: "12",
    },
    supply: {
      startDate: "25.01.04",
      endDate: "25.01.04",
      degree: "10",

      price: "850",
      volume: "200",
    },

    contractPaper: "",
  },
  {
    id: "3",
    contract: {
      number: "1234",
      date: "24.12.31",
      degree: "12",
    },
    supply: {
      startDate: "25.01.04",
      endDate: "25.01.04",
      degree: "10",
      price: "850",
      volume: "200",
    },

    contractPaper: "",
  },
];
const MaterialContractView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className={"flex flex-col gap-12 "}>
      <DashBoardField title={"계약 목록"}>
        <SearchFilterBox>
          <div className={"flex gap-4 flex-col"}>
            <div className={"flex tablet:flex-row mobile:flex-col gap-4"}>
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
              <div
                className={
                  "flex gap-2 tablet:items-center tablet:flex-row mobile:flex-col"
                }>
                <CustomDatePicker value={""} onChange={() => {}} />
                <span className={"mobile:hidden tablet:block"}>~</span>
                <CustomDatePicker value={""} onChange={() => {}} />
              </div>
            </div>

            <FieldSet
              label={"계약번호"}
              required
              align={"center"}
              requiredText={"(*필수입력사항)"}>
              <div
                className={
                  "flex mobile:flex-col tablet:flex-row items-center gap-4 mobile:w-full tablet:w-fit"
                }>
                <Input
                  labelPosition={"no-label"}
                  classNames={"bg-white w-[500px]"}
                  name={"contractNumber"}
                  value={""}
                  type={"text"}
                  handleChange={() => {}}
                />
                <Button
                  title={"검색"}
                  onClick={() => {}}
                  variant={"bg-black"}
                  buttonSize={"md"}
                />
              </div>
            </FieldSet>
          </div>
        </SearchFilterBox>
        <div
          className={
            "web:max-w-[1000px] tablet:min-w-full mobile:max-w-[375px]  overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
          }>
          <table
            className={
              "tablet:border-separate tablet:border-spacing-0 tablet:rounded-[20px] tablet:overflow-hidden"
            }>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    colSpan={1}
                    rowSpan={header.rowspan || 1}
                    className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.id}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.contract.number}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.contract.date}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.contract.degree}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.startDate}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.endDate}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.degree}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.price}
                  </td>
                  <td className="text-[16px] h-[48px]  px-4 border-line_normal border whitespace-nowrap text-center">
                    <div className={"justify-center flex"}>
                      <Image
                        src="/paper.svg"
                        alt="다운로드"
                        width={24}
                        height={24}
                      />
                    </div>
                  </td>
                  <td className="text-[16px] flex justify-center h-[48px]  px-4 border-line_normal border whitespace-nowrap text-center">
                    <div className={"justify-center flex"}>
                      <Image
                        src="/download.svg"
                        alt="다운로드"
                        width={24}
                        height={24}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashBoardField>

      <DashBoardField title={"소재 상세정보"}>
        {/*<MaterialTableView />*/}

        <div
          className={
            "web:max-w-[1000px] tablet:min-w-full mobile:max-w-[375px]  overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
          }>
          <table
            className={
              "tablet:border-separate tablet:border-spacing-0 tablet:rounded-[20px] tablet:overflow-hidden"
            }>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    colSpan={1}
                    rowSpan={header.rowspan || 1}
                    className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.id}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.contract.number}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.contract.date}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.contract.degree}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.startDate}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.endDate}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.degree}
                  </td>
                  <td className="text-[16px] h-[48px] px-4 border-line_normal border whitespace-nowrap text-center">
                    {item.supply.price}
                  </td>
                  <td className="text-[16px] h-[48px]  px-4 border-line_normal border whitespace-nowrap text-center">
                    <div className={"justify-center flex"}>
                      <button
                        onClick={() => {
                          setOpen(true);
                        }}>
                        <Image
                          src="/paper.svg"
                          alt="다운로드"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="text-[16px] flex justify-center h-[48px]  px-4 border-line_normal border whitespace-nowrap text-center">
                    <div className={"justify-center flex"}>
                      <Image
                        src="/download.svg"
                        alt="다운로드"
                        width={24}
                        height={24}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Dialog
          title={""}
          content={
            <div
              className={
                "web:w-[900px] tablet:w-[750px] mobile:w-full overflow-visible box-border py-2 px-6 mb-4 flex flex-col gap-4"
              }>
              <h3 className={"text-common-normal text-title2 font-[700] "}>
                위탁판매 계약서(판매자용)
              </h3>
              {/**/}
              <ContractPaper />
              {/*버튼랩*/}
              <div className={"flex w-full justify-center"}>
                <div
                  className={
                    "flex gap-3 tablet:flex-row mobile:flex-col m-auto w-full justify-center"
                  }>
                  <button
                    className={
                      "tablet:w-[172px] mobile:w-full rounded-[12px] bg-black text-white h-[48px] "
                    }>
                    Pdf다운로드
                  </button>
                  <button
                    className={
                      "tablet:w-[172px] mobile:w-full rounded-[12px] h-[48px] bg-bg_normal"
                    }>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          }
          isOpen={open}
          onClose={() => {}}
          isAlert={false}
          size={"full"}
          btn2Title={"확인"}
          btn1Title={"닫기"}
          onButton1Click={() => {}}
          onButton2Click={() => {}}
          hasframe={true}
          hasBtn={false}
          headerTitle={"위탁판매계약서.PDF"}
        />
      </DashBoardField>
    </div>
  );
};

export default MaterialContractView;
