import React from "react";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
import { Header, TableHeadersProps } from "@/app/_type/table";

const TableHeaders: React.FC<TableHeadersProps> = ({ headers }) => {
  // 재귀적으로 헤더를 렌더링하는 함수
  // headers: 렌더링할 헤더 배열
  // level: 현재 렌더링 레벨
  // maxLevel: 최상위 헤더의 깊이
  const renderHeaders = (
    headers: Header[],
    level: number,
    maxLevel: number
  ): React.ReactNode[] => {
    const currentRow: React.ReactNode[] = []; // 현재 레벨의 헤더를 저장
    const nextLevelHeaders: Header[] = []; // 다음 레벨의 헤더를 저장

    headers.forEach((header, index) => {
      currentRow.push(
        <th
          key={`${level}-${index}`}
          colSpan={header.colspan || 1} // colspan 기본값은 1
          rowSpan={header.rowspan || (header.children ? 1 : maxLevel - level)} // rowspan 기본값 계산
          className="w-[100px] text-[15px] mobile:border-[1px] mobile:border-t-0 tablet:border-[1px] whitespace-nowrap bg-bg_normal p-2 first:rounded-tl-[20px] last:rounded-tr-[20px]">
          {header.label === "check" ? (
            <CheckboxGroup
              type="single"
              id="check"
              checked={true}
              onChange={() => {}}
              size="w-[24px] h-[24px] flex justify-center m-auto"
              multiChecked={[]}
              setMultiChecked={() => {}}>
              <CheckboxGroup.CheckBox />
              <CheckboxGroup.Label label="" htmlFor="check" />
            </CheckboxGroup>
          ) : (
            header.label // 텍스트 표시
          )}
        </th>
      );

      // 자식 헤더가 있으면 다음 레벨에 추가
      if (header.children) {
        nextLevelHeaders.push(...header.children);
      }
    });

    // 다음 레벨이 있으면 재귀 호출
    if (nextLevelHeaders.length > 0) {
      return [
        <tr key={`row-${level}`}>{currentRow}</tr>, // 현재 레벨의 행 추가
        ...renderHeaders(nextLevelHeaders, level + 1, maxLevel), // 다음 레벨의 행 추가
      ];
    }

    return [<tr key={`row-${level}`}>{currentRow}</tr>]; // 현재 레벨만 반환
  };

  // 최대 레벨 계산 함수
  // headers: 헤더 배열
  // level: 현재 레벨 (기본값 1)
  const calculateMaxLevel = (headers: Header[], level = 1): number => {
    return headers.reduce((max, header) => {
      if (header.children) {
        return Math.max(max, calculateMaxLevel(header.children, level + 1)); // 재귀적으로 최대 깊이 계산
      }
      return max;
    }, level);
  };

  const maxLevel = calculateMaxLevel(headers); // 최대 레벨 계산

  return <thead>{renderHeaders(headers, 1, maxLevel)}</thead>; // 테이블 헤더 렌더링
};

export default TableHeaders;
