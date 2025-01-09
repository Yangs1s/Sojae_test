export type Header = {
  label: string; // 화면에 표시될 텍스트
  key?: string; // 데이터와 매핑할 키
  colspan?: number; // 열 병합
  rowspan?: number; // 행 병합
  children?: Header[]; // 하위 헤더
};

export type TableHeadersProps = {
  headers: Header[];
};
