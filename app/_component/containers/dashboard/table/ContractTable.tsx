"use client";

import React from "react";
const headers = [
  { label: "번호", rowspan: 2 },
  { label: "계약", rowspan: 1, colspan: 3 },
  { label: "납품", rowspan: 1, colspan: 5 },
  { label: "계약서", rowspan: 2 },
];

const subHeaders = [
  { label: "계약 번호", rowspan: 1 },
  { label: "계약 일자", rowspan: 1 },
  { label: "계약 차수", rowspan: 1 },
  { label: "납품시작일", rowspan: 1 },
  { label: "납품 종료일", rowspan: 1 },
  { label: "납품 차수", rowspan: 1 },
  { label: "납품 가 (원/kg)", rowspan: 1 },
  { label: "납품 물동 (ton/월)", rowspan: 1 },
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

const ContractTable = () => {
  return (
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
                rowSpan={subHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {subHeader.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr
              key={item.id}
              className={`${index === mockData.length - 1 ? "last-row" : ""}`}>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.id}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.contract.number}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.contract.date}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.contract.degree}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.supply.startDate}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.supply.endDate}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.supply.degree}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.supply.price}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.supply.volume}
              </td>
              <td className="text-[16px]  px-4 border-line_normal border whitespace-nowrap text-center">
                {item.contractPaper}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractTable;
