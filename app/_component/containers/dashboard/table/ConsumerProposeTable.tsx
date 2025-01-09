// 이 테이블은 4줄짜리 테이블입니다.
// 테이블은 컴퍼넌트나 라이브러로 따로 쓰진 않았습니다.

import React from "react";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import Link from "next/link";

const mockData = [
  {
    id: 14,
    type: "플라스틱",
    shape: "펠렛",
    color: "투명",
    rawMaterialInfo: { pirPcr: "PIR" },
    deliveryVolume: "100",
    qualityAnalysis: "자동차 부품용",
    sample: "인증",
    estimate: "요청하기",
  },
];
const headers = [
  { label: "check", rowspan: 2 },
  { label: "소재정보", colspan: 5 },
  { label: "소재 품질 분석", rowspan: 2 },
  { label: "샘플 요청(kg)", rowspan: 2 },
  {
    label: "소재모아 견적 요청",
    rowspan: 2,
  },
];
const subHeaders = [
  { label: "종류", rowspan: 2 },
  { label: "형태", rowspan: 2 },
  { label: "색상", rowspan: 2 },
  { label: "원료 정보", rowspan: 1 },
  { label: "월간 물통(ton/월)", rowspan: 2 },
];

const ConsumerProposeTable = () => {
  return (
    <div
      className={
        "tablet:min-w-full mobile:max-w-[375px] overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
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
                  className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]"
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
                colSpan={1}
                rowSpan={subHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {subHeader.label}
              </th>
            ))}
          </tr>
          {/* 세부 헤더 */}
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr
              key={index}
              className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
              <td
                className={
                  "text-[16px] justify-center flex h-[48px] px-4  border-line_normal border whitespace-nowrap text-center"
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
                {item.qualityAnalysis}
              </td>
              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                {item.sample}
              </td>

              <td
                className={
                  "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                }>
                <Link
                  href={"/estimate"}
                  className={"text-normal_sub underline"}>
                  {item.estimate}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerProposeTable;
