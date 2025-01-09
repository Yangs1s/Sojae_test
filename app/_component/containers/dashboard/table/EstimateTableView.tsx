// 이 테이블은 4줄짜리 테이블입니다.
// 테이블은 컴퍼넌트나 라이브러로 따로 쓰진 않았습니다.

import React from "react";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";

const mockData = [
  {
    id: 14,
    proposalNumber: "PRO-001",
    requestDate: "10/11/24",
    type: "플라스틱",
    shape: "펠렛",
    color: "투명",
    rawMaterialInfo: { pirPcr: "PIR" },
    deliveryVolume: "100",
    deliveryDate: "2024-12-30",
    purpose: "자동차 부품용",
    certification: "인증",
    wantedPrice: { min: "1000", max: "1200" },
    isAnalysis: "필요",
    viscosity: { min: "100", max: "12" },
    density: { min: "100", max: "12" },
    plastic: "필요",
    batch: { min: "100", max: "12" },
    water: { min: "100", max: "12" },
    rohs: "필요",
    additionalAnalysis: "불필요",
    suggestedSample: "500",
    additionalRequest: "없음",
    status: "진행",
    claim: true,
  },
];
const headers = [
  { label: "check", rowspan: 3 },
  { label: "번호", rowspan: 3 },
  { label: "제안 번호", rowspan: 3 },
  { label: "견적 요청일", rowspan: 3 },
  { label: "소재정보", colspan: 8 },
  { label: "희망 가격", colspan: 2, rowspan: 2 },
  { label: "소재 품질분석", colspan: 12 },
  { label: "샘플 요청", rowspan: 3 },
  { label: "추가 요청 사항", rowspan: 3 },
  { label: "진행 현황", rowspan: 3 },
  { label: "클레임", rowspan: 3 },
];
const subHeaders = [
  { label: "종류", rowspan: 2 },
  { label: "형태", rowspan: 2 },
  { label: "색상", rowspan: 2 },
  { label: "원료 정보", rowspan: 1 },
  { label: "납품가능물통(ton/월)", rowspan: 2 },
  { label: "납품 기한", rowspan: 2 },
  { label: "용도", rowspan: 2 },
  { label: "인증", rowspan: 2 },
  { label: "분석 필요 여부", rowspan: 2 },
  { label: "정도(g/10min)", colspan: 2 },
  { label: "밀도(g/10cm³)", colspan: 2 },
  { label: "플라스틱 주재질 시험", rowspan: 2 },
  { label: "회분", colspan: 2 },
  { label: "수분", colspan: 2 },
  { label: "ROHS 규제 물질", rowspan: 2 },
  { label: "추가 분석 요청", rowspan: 2 },
];

const detailHeaders = [
  "PIR/PCR",
  "Min",
  "Max",
  "Min",
  "Max",
  "Min",
  "Max",
  "Min",
  "Max",
  "Min",
  "Max",
];
const EstimateProposeTable = () => {
  return (
    <div
      className={
        "web:max-w-[1000px] tablet:min-w-full mobile:max-w-[375px] overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
      }>
      <table
        className={
          "tablet:border-separate tablet:border-spacing-0 tablet:rounded-[20px] tablet:overflow-hidden"
        }>
        <thead>
          <tr>
            {headers.map((header, index) =>
              header.label === "check" ? (
                <th
                  colSpan={0}
                  rowSpan={header.rowspan || 4}
                  className={`w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] 
                  whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]  
                 `}
                  key={index}>
                  <CheckboxGroup
                    type={"single"}
                    id={"check"}
                    checked={true}
                    onChange={() => {}}
                    size={"w-[24px] h-[24px] flex justify-center m-auto"}
                    multiChecked={[]}
                    setMultiChecked={() => {}}>
                    <CheckboxGroup.CheckBox />
                    <CheckboxGroup.Label label={""} htmlFor={"check"} />
                  </CheckboxGroup>
                </th>
              ) : (
                <th
                  key={index}
                  colSpan={header.colspan || 1}
                  rowSpan={header.rowspan || 1}
                  className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
                  {header.label}
                </th>
              )
            )}
          </tr>
          {/* 하위 헤더 */}
          <tr>
            {subHeaders.map((subHeader, index) => (
              <th
                key={index}
                colSpan={subHeader.colspan || 1}
                rowSpan={subHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {subHeader.label}
              </th>
            ))}
          </tr>
          {/* 세부 헤더 */}
          <tr>
            {detailHeaders.map((detail, index) => (
              <th
                key={index}
                className="w-full text-[14px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal border-line_normal px-2 py-1">
                {detail}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr
              key={index}
              className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
              <td
                className={
                  "text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                <CheckboxGroup
                  type={"single"}
                  id={"check"}
                  checked={true}
                  onChange={() => {}}
                  size={"w-[24px] h-[24px]"}
                  multiChecked={[]}
                  setMultiChecked={() => {}}>
                  <CheckboxGroup.CheckBox />
                  <CheckboxGroup.Label label={""} htmlFor={"agree"} />
                </CheckboxGroup>
              </td>
              <td
                className={`text-[16px] ${mockData.length - 1 === 1 ? "last:rounded-bl-[24px]" : "first:rounded-bl-[24px]"} px-4  border-line_normal border whitespace-nowrap text-center`}>
                {item.id}
              </td>
              <td
                className={
                  "text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.proposalNumber}
              </td>
              <td
                className={
                  "px-1 w-[120px] h-[48px] flex justify-center items-center border-line_normal border whitespace-nowrap text-center"
                }>
                {item.requestDate}
              </td>
              <td
                className={
                  "text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.type}
              </td>
              <td
                className={
                  "text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.shape}
              </td>
              <td
                className={
                  "text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.color}
              </td>
              <td
                className={
                  "text-[16px] h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.rawMaterialInfo.pirPcr}
              </td>
              <td
                className={
                  "text-[16px]  px-1 w-[120px] border-line_normal border whitespace-nowrap text-center"
                }>
                <div className={"flex justify-around items-center gap-2"}>
                  <p>{item.deliveryVolume}</p>
                  <p className={"text-[13px] text-medium-light"}>ton</p>
                </div>
              </td>

              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.deliveryDate}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.purpose}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.certification}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.wantedPrice.min}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.wantedPrice.max}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.isAnalysis}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.viscosity.min}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.viscosity.max}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.density.min}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.density.max}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.plastic}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.batch.min}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.batch.max}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.water.min}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.water.max}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                <button
                  onClick={() => {
                    console.log("modal!!");
                  }}>
                  {item.rohs}
                </button>
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.additionalAnalysis}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                <div className={"flex justify-around items-center gap-2"}>
                  <p>{item.suggestedSample}</p>
                  <p className={"text-[13px] text-medium-light"}>g</p>
                </div>
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.additionalRequest}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.status}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                <button>
                  <img
                    src={"/claimIcon.svg"}
                    alt={"claim-icon"}
                    width={20}
                    height={20}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstimateProposeTable;
