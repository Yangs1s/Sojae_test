"use client";
import React, { useState } from "react";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import SearchFilterBox from "@/app/_component/containers/common/SearchFilterBox";
import Radio from "@/app/_component/presentations/Radio";
import Button from "@/app/_component/presentations/Button";
import Table from "@/app/_component/containers/common/table/Table";
import Image from "next/image";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import CustomDatePicker from "@/app/_component/containers/common/CustomDatePicker";
import Dialog from "@/app/_component/presentations/Dialog";
import ContractPaper from "@/app/_component/presentations/ContractPaper";
const headers = [
  { label: "번호", key: "id", rowspan: 2 },
  { label: "계약 번호", key: "contractNumber" },
  { label: "계약 일자", key: "contractDate" },
  { label: "계약 차수", key: "contractStep" },
  { label: "납품 시작일", key: "deliveryStartDate" },
  { label: "소재 상세 정보", key: "materialDetail" },
  { label: "납품 종료일", key: "deliveryEndDate" },
];
const headers2 = [
  { label: "번호", key: "id", rowspan: 2 },
  { label: "납품 차수", key: "DeliveryDegree" },
  { label: "납품 일자", key: "DeliveryDate" },
  { label: "완료", key: "DeliveryComplete" },
  { label: "잔여차수", key: "DeliveryRemain" },
  { label: "납품가(원/kg)", key: "DeliveryPrice" },
  { label: "납품 물동(ton/월)", key: "DeliveryVolume" },
  { label: "소재 상세 정보", key: "materialDetail" },
];
const headers3 = [
  { label: "check", key: "check", rowspan: 4 },
  { label: "번호", key: "id", rowspan: 4 },
  { label: "등록 번호", key: "fqrNum", rowspan: 4 },
  { label: "등록 일자", key: "requestDate", rowspan: 4 },
  { label: "이미지", key: "materialImage", rowspan: 4 },
  {
    label: "소재정보",
    colspan: 10,
    children: [
      { label: "종류", key: "type", rowspan: 3 },
      { label: "형태", key: "shape", rowspan: 3 },
      { label: "색상", key: "color", rowspan: 3 },
      {
        label: "원료 정보",
        colspan: 2,
        children: [
          { label: "PIR/PCR", key: "rawMaterialInfo.pirPcr", rowspan: 2 },
          { label: "폐기물", key: "rawMaterialInfo.waste", rowspan: 2 },
        ],
      },
      { label: "납품 가능 물통(ton/월)", key: "deliveryVolume", rowspan: 3 },
      { label: "납품 기한", key: "deliveryDate", rowspan: 3 },
      { label: "보유 인증", key: "certification", rowspan: 3 },
      {
        label: "납품 희망가 (원/kg)",
        colspan: 2,
        children: [
          { label: "Min", key: "wantedPrice.min", rowspan: 1 },
          { label: "Price", key: "wantedPrice.price", rowspan: 1 },
        ],
      },
    ],
  },
  {
    label: "소재 품질분석",
    colspan: 17,
    children: [
      { label: "점도 (g/10min)", key: "viscosityMI", rowspan: 3 },
      { label: "밀도(g/10cm³)", key: "density", rowspan: 3 },
      { label: "플라스틱 주재질 시험", key: "plastic", rowspan: 3 },
      { label: "회분(%)", key: "ashContent", rowspan: 3 },
      { label: "수분(%)", key: "moisture", rowspan: 3 },
      {
        label: "ROHS 규제 물질",
        colspan: 10,
        children: [
          { label: "Pb", key: "rohsSubstances.Pb" },
          { label: "Cd", key: "rohsSubstances.Cd" },
          { label: "Hg", key: "rohsSubstances.Hg" },
          { label: "Cr6", key: "rohsSubstances.Cr6" },
          { label: "BBP", key: "rohsSubstances.BBP" },
          { label: "DBP", key: "rohsSubstances.DBP" },
          { label: "DEHP", key: "rohsSubstances.DEHP" },
          { label: "DIBP", key: "rohsSubstances.DIBP" },
          { label: "비페닐(pBBs)", key: "rohsSubstances.pBBs" },
          { label: "디페닐 에테르(PBDEs)", key: "rohsSubstances.PBDEs" },
        ],
      },
      { label: "추가 분석 결과", key: "additionalAnalysisResult", rowspan: 3 },
    ],
  },
  { label: "진행 현황", key: "status", rowspan: 4 },
];
const data = [
  {
    id: 1,
    contractNumber: "1234",
    contractDate: "2023-01-01",
    contractStep: "1",
    deliveryStartDate: "2023-02-01",
    materialDetail: (
      <div>
        <button
          onClick={() => {
            console.log("hi");
          }}>
          <Image src={"/paperIcon.svg"} alt={"이미지"} width={30} height={30} />
        </button>
      </div>
    ),
    deliveryEndDate: "2023-02-15",
  },
  {
    id: 2,
    contractNumber: "5678",
    contractDate: "2023-03-01",
    contractStep: "2",
    deliveryStartDate: "2023-04-01",
    deliveryEndDate: "2023-04-15",
    materialDetail: (
      <div>
        <button
          onClick={() => {
            console.log("hi");
          }}>
          <Image src={"/paperIcon.svg"} alt={"이미지"} width={30} height={30} />
        </button>
      </div>
    ),
  },
];
const data2 = [
  {
    id: 21,
    DeliveryDegree: 2,
    DeliveryDate: "2023-02-01",
    DeliveryComplete: "완료",
    DeliveryRemain: 2,
    DeliveryPrice: 20000,
    DeliveryVolume: 200,
    materialDetail: (
      <div>
        <button
          onClick={() => {
            console.log("hi");
          }}>
          <Image src={"/paperIcon.svg"} alt={"이미지"} width={30} height={30} />
        </button>
      </div>
    ),
  },
];
// 헤더 데이터 정의

// 예제 데이터
const data3 = [
  {
    id: 1,
    fqrNum: "PRO-001",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    requestDate: "11/10/24",
    type: "PE",
    shape: "펠릿",
    color: "검은색",
    rawMaterialInfo: { pirPcr: "PCR", waste: "페트병 뚜껑" },
    deliveryVolume: "120",
    deliveryDate: "2024-06-20",
    certification: "인증완료",
    wantedPrice: { min: "10", price: "20" },
    viscosityMI: "0.7",
    density: "0.8",
    plastic: "PE Mix",
    ashContent: "2",
    moisture: "0.03",
    rohsSubstances: {
      Pb: "검출안됨",
      Cd: "검출안됨",
      Hg: "검출안됨",
      Cr6: "검출안됨",
      BBP: "검출안됨",
      DBP: "검출안됨",
      DEHP: "검출안됨",
      DIBP: "검출안됨",
      pBBs: "검출안됨",
      PBDEs: "검출안됨",
    },
    additionalAnalysisResult: "결과 미검출",
    status: "",
  },
];
const DeliveryContractView = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [open, setOpen] = useState(true);
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className={"flex flex-col gap-6"}>
      <DashBoardField title={"계약 체결 및 납품 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <SearchFilterBox>
          <div className={"flex mobile:flex-col tablet:flex-row gap-5 z-2"}>
            <div className={"flex gap-3"}>
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
              <CustomDatePicker value={""} onChange={() => {}} />
              <span className={"mobile:hidden tablet:block"}>~</span>
              <CustomDatePicker value={""} onChange={() => {}} />

              <Button
                title={"검색"}
                onClick={() => {}}
                variant={"bg-black"}
                buttonSize={"md"}
              />
            </div>
          </div>
        </SearchFilterBox>
        {/*<ContractTable />*/}
        <Table headers={headers} data={data} />
      </DashBoardField>
      <DashBoardField title={"납품 현황"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <Table headers={headers2} data={data2} />
      </DashBoardField>
      <DashBoardField title={"공급 소재 상세 표"}>
        <div className={"absolute top-0 z-20 right-0"}>
          <Button
            title={"엑셀 저장"}
            onClick={() => {}}
            variant={"bg-primary"}
            buttonSize={"md"}
          />
        </div>
        <MaterialTableView />
      </DashBoardField>

      <Dialog
        title={""}
        align={"center"}
        content={
          <div
            className={
              "web:w-[900px] tablet:w-[750px] mobile:w-full overflow-visible box-border py-2 px-6  mb-4 flex flex-col gap-4"
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
                  onClick={() => {
                    setOpen(false);
                  }}
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
    </div>
  );
};

export default DeliveryContractView;
