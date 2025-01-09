// 테이블 종류가 넘 많아서 급한대로 컴퍼넌트화 시켜놨습니다.
// 다른거 쓰실거면 쓰셔도 됩니다!!
// 우선 단계별로 해보려고 했는데 여기서 헤더가 4단으로 만들어지는건 적용이 안도네요,..
// 헤더가 2단있는건 우선 잘되는거 같아요,

import React from "react";
import { Header } from "@/app/_type/table";

type TableProps = {
  headers: Header[]; // 테이블 헤더
  data: Record<string, any>[]; // key-value 형태의 데이터
};
const MaterialDetailTableView = ({ headers, data }: TableProps) => {
  // 최대 깊이 계산
  const renderHeaders = (
    headers: Header[],
    level: number,
    maxLevel: number
  ): React.ReactNode[] => {
    const currentRow: React.ReactNode[] = [];
    const nextLevelHeaders: Header[] = [];

    headers.forEach((header, index) => {
      currentRow.push(
        <th
          key={`${level}-${index}`}
          colSpan={header.colspan || 1}
          rowSpan={header.rowspan || (header.children ? 1 : maxLevel - level)}
          className="w-auto text-[15px] border p-2 bg-gray-100">
          {header.label}
        </th>
      );
      if (header.children) nextLevelHeaders.push(...header.children);
    });

    if (nextLevelHeaders.length > 0) {
      return [
        <tr key={`row-${level}`}>{currentRow}</tr>,
        ...renderHeaders(nextLevelHeaders, level + 1, maxLevel),
      ];
    }
    return [<tr key={`row-${level}`}>{currentRow}</tr>];
  };

  // 최대 깊이 계산
  const calculateMaxLevel = (headers: Header[], level = 1): number =>
    headers.reduce(
      (max, header) =>
        header.children
          ? Math.max(max, calculateMaxLevel(header.children, level + 1))
          : max,
      level
    );

  const maxLevel = calculateMaxLevel(headers);
  const getValueByPath = (obj: any, path: string): any => {
    return path.split(".").reduce((acc, key) => acc && acc[key], obj);
  };
  // 데이터 렌더링 (1차원으로 출력)
  const renderBody = (
    data: Record<string, any>[],
    headers: Header[]
  ): React.ReactNode => {
    const flattenedHeaders = headers
      .flatMap((header) =>
        header.children
          ? header.children.flatMap((child) => child.key)
          : header.key
      )
      .filter((key): key is string => key !== undefined);

    return data.map((row, rowIndex) => (
      <tr
        key={rowIndex}
        className={` ${rowIndex === data.length - 1 ? "last-row" : ""}`}>
        {flattenedHeaders.map((key, idx) =>
          key === "materialImage" ? (
            <td
              key={key + idx}
              className={"flex justify-center h-[48px] border items-center"}>
              <img src={row[key]} alt="Material" className="w-10 h-10" />
            </td>
          ) : React.isValidElement(row[key]) ? (
            <td
              key={key}
              className=" w-auto text-[14px] h-[48px] border p-2 text-center">
              {row[key]}
            </td>
          ) : typeof row[key] === "object" ? (
            <td
              key={key}
              className=" w-auto text-[14px] h-[48px] border p-2 text-center">
              {getValueByPath(row, key)}
            </td>
          ) : (
            <td
              key={key}
              className=" w-auto text-[14px] h-[48px] border p-2 text-center end">
              {row[key] || ""}
            </td>
          )
        )}
      </tr>
    ));
  };

  return (
    <div
      className={
        "web:max-w-[1000px] rounded-[20px] tablet:min-w-full mobile:max-w-[375px] overflow-scroll mobile:border mobile:rounded-[20px] tablet:rounded-none tablet:border-none "
      }>
      <table
        className={
          "tablet:border-separate rounded-[20px] tablet:border-spacing-0 tablet:rounded-[20px] tablet:overflow-hidden w-full"
        }>
        <thead>{renderHeaders(headers, 1, maxLevel)}</thead>
        <tbody>{renderBody(data, headers)}</tbody>
      </table>
    </div>
  );
};

export default MaterialDetailTableView;
