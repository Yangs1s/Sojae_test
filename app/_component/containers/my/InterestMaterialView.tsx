"use client";

import React from "react";
import Pagination from "@/app/_component/containers/common/Pagination";
import Image from "next/image";
const mockData = [
  {
    id: 1,
    proposalNumber: "PRO-001",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    type: "플라스틱",
    shape: "펠렛",
    color: "투명",
    rawMaterialInfo: { pirPcr: "PIR", waste: "20%" },
    deliveryVolume: "100",
    deliveryDate: "2024-12-30",
    certification: "ISO 9001",
    deliveryPrice: { min: "1000", price: "1200" },
    suggestedPrice: "1100",
    qualityAnalysis: "우수",
  },
  {
    id: 2,
    proposalNumber: "PRO-001",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    type: "플라스틱",
    shape: "펠렛",
    color: "투명",
    rawMaterialInfo: { pirPcr: "PIR", waste: "20%" },
    deliveryVolume: "100",
    deliveryDate: "2024-12-30",
    certification: "ISO 9001",
    deliveryPrice: { min: "1000", price: "1200" },
    suggestedPrice: "1100",
    qualityAnalysis: "우수",
  },
  {
    id: 3,
    proposalNumber: "PRO-001",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    type: "플라스틱",
    shape: "펠렛",
    color: "투명",
    rawMaterialInfo: { pirPcr: "PIR", waste: "20%" },
    deliveryVolume: "100",
    deliveryDate: "2024-12-30",
    certification: "ISO 9001",
    deliveryPrice: { min: "1000", price: "1200" },
    suggestedPrice: "1100",
    qualityAnalysis: "우수",
  },
];

const headers = [
  { label: "번호", rowspan: 3 },
  { label: "제안 번호", rowspan: 3 },
  { label: "소재 이미지", rowspan: 3 },
  { label: "소재정보", colspan: 11 },
  { label: "소재 품질분석", rowspan: 3 },
  { label: "관심소재", rowspan: 3 },
];

const subHeaders = [
  { label: "종류", rowspan: 2 },
  { label: "형태", rowspan: 2 },
  { label: "색상", rowspan: 2 },
  { label: "원료 정보", colspan: 2 },
  { label: "납품가능물통(ton/월)", rowspan: 2 },
  { label: "납품 가능 일자", rowspan: 2 },
  { label: "보유 인증", rowspan: 2 },
  { label: "납품희망가", colspan: 2 },
  { label: "제안가(원/kg)", rowspan: 2 },
];

const detailHeaders = ["PIR/PCR", "폐기물", "Min", "가격"];

// 관심 소재 페이지 뷰

const InterestMaterialView = () => {
  const [like, setLike] = React.useState(false);
  return (
    <div>
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
              {headers.map((header, index) => (
                <th
                  key={index}
                  colSpan={header.colspan || 1}
                  rowSpan={header.rowspan || 1}
                  className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0  tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
                  {header.label}
                </th>
              ))}
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
            {mockData.map((item) => (
              <tr key={item.id}>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.id}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.proposalNumber}
                </td>
                <td
                  className={
                    "px-1 w-[120px] flex justify-between items-center border-line_normal border whitespace-nowrap text-center"
                  }>
                  <img
                    src={item.materialImage}
                    alt="소재 이미지"
                    width="50"
                    className={"m-auto"}
                  />
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.type}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.shape}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.color}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.rawMaterialInfo.pirPcr}
                </td>
                <td
                  className={
                    "px-1 w-[120px] border-line_normal border text-center"
                  }>
                  {item.rawMaterialInfo.waste}
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
                  {item.certification}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.deliveryPrice.min}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  {item.deliveryPrice.price}
                </td>
                <td
                  className={
                    "text-[16px] px-4  border-line_normal border whitespace-nowrap text-center"
                  }>
                  <div className={"flex justify-around items-center gap-2"}>
                    <p>{item.suggestedPrice}</p>
                    <p className={"text-[13px] text-medium-light"}>원</p>
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
                  <button
                    onClick={() => {
                      setLike((p) => !p);
                    }}>
                    {like ? (
                      <Image
                        width={24}
                        height={24}
                        src="/fullHeart.svg"
                        alt="red"
                      />
                    ) : (
                      <Image
                        width={24}
                        height={24}
                        src="/emptyHeart.svg"
                        alt="empty"
                      />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />{" "}
    </div>
  );
};

export default InterestMaterialView;
