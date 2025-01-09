// 이 테이블은 4줄짜리 테이블입니다.
// 테이블은 컴퍼넌트나 라이브러로 따로 쓰진 않았습니다.

import React, { Dispatch, SetStateAction } from "react";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
const mockData = [
  {
    id: 1,
    proposeType: "RFQ 요청",
    rfqNum: "PRO-001",
    materialNumber: "RQ_24_0002",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    proposeNumber: "MT_001",
    type: "PE",
    shape: "펠릿",
    color: "검은색",
    rawMaterialInfo: { pirPcr: "PCR", waste: "페트병 뚜껑" },
    deliveryVolume: "120",
    deliveryDate: "2024-06-20",
    certification: "인증완료",
    wantedPrice: { min: "10", price: "20" },
    analysisProcess: "필요",
    viscosityMI: "0.7",
    density: "0.8",
    plastic: "PE Mix",
    ashContent: "2",
    moisture: "0.03",
    rohsSubstances: "필요",
    additionalAnalysis: "필요",
  },
];

const headers = [
  { label: "check", rowspan: 4 },
  { label: "구분", rowspan: 4 },
  { label: "RFQ 번호", rowspan: 4 },
  { label: "제안 번호", rowspan: 4 },
  { label: "소재 번호", rowspan: 4 },
  { label: "이미지", rowspan: 4 },
  { label: "소재정보", colspan: 10, rowspan: 1 },
  { label: "소재 품질분석", colspan: 8 },
];

const subHeaders = [
  { label: "종류", rowspan: 3 },
  { label: "형태", rowspan: 3 },
  { label: "색상", rowspan: 3 },
  { label: "원료 정보", colspan: 2, rowspan: 1 },
  { label: "납품 가능 물통(ton/월)", rowspan: 3 },
  { label: "납품 기한", rowspan: 3 },
  { label: "보유 인증", rowspan: 3 },
  { label: "납품 희망가 (원/kg)", rowspan: 1, colspan: 2 },
  { label: "분석 진행 여부", rowspan: 3 },
  { label: "점도 (g/10min)", rowspan: 3 },
  { label: "밀도(g/10cm³)", rowspan: 3 },
  { label: "플라스틱 주재질 시험", rowspan: 3 },
  { label: "회분(%)", rowspan: 3 },
  { label: "수분(%)", rowspan: 3 },
  { label: "ROHS 규제 물질", rowspan: 3 },
  { label: "추가분석요청", rowspan: 3 },
];

const detailHeaders = [
  { label: "PIR/PCR", rowspan: 2 },
  { label: "폐기물", rowspan: 2 },
  { label: "가격", rowspan: 2 },
  { label: "Min", rowspan: 2 },
];

const MaterialProposeDetailTable = ({
  selectProposeNumber,
}: {
  selectProposeNumber: string;
}) => {
  console.log(selectProposeNumber);
  const selectedData = mockData.find(
    (selectedData) => selectedData.materialNumber === selectProposeNumber
  );

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
                colSpan={subHeader.colspan || 1}
                rowSpan={subHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {subHeader.label}
              </th>
            ))}
          </tr>
          {/* 세부 헤더 */}
          <tr>
            {detailHeaders.map((detailHeader, index) => (
              <th
                key={index}
                rowSpan={detailHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {detailHeader.label}
              </th>
            ))}
          </tr>
          {/*마지막 네번째줄 해더*/}
        </thead>
        <tbody>
          {selectedData ? (
            <tr>
              <td className="text-[16px] px-4 bg-transparent rounded-bl-[24px] border-line_normal border text-center">
                <CheckboxGroup
                  type="single"
                  id="check"
                  checked={true}
                  onChange={() => {}}
                  size="w-[24px] h-[24px]"
                  multiChecked={[]}
                  setMultiChecked={() => {}}>
                  <CheckboxGroup.CheckBox />
                  <CheckboxGroup.Label label="" htmlFor="agree" />
                </CheckboxGroup>
              </td>
              <td className="text-[16px] px-4 border-line_normal border text-center">
                {selectedData.proposeType}
              </td>

              <td className="text-[16px] px-4 border-line_normal border text-center">
                {selectedData.rfqNum}
              </td>

              <td className="text-[16px] px-4 border-line_normal border text-center">
                {selectedData.proposeNumber}
              </td>
              <td className="text-[16px] px-4 border-line_normal border text-center">
                {selectedData.materialNumber}
              </td>
              <td className="px-1 w-[120px] flex justify-center border-line_normal border text-center">
                <img
                  src={selectedData.materialImage}
                  alt="소재 이미지"
                  className="m-auto"
                />
              </td>
              <td className="text-[16px] px-4 border-line_normal border text-center">
                {selectedData.type}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.shape}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.color}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.rawMaterialInfo.pirPcr}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.rawMaterialInfo.waste}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.deliveryVolume}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.deliveryDate}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.certification}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.wantedPrice.min}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.wantedPrice.price}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.analysisProcess}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.viscosityMI}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.density}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.plastic}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.ashContent}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.moisture}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {selectedData.rohsSubstances}
              </td>
              {/* 기타 데이터 매핑 */}
              <td className="text-[16px] rounded-br-[24px]  px-4 border-line_normal border text-center">
                {selectedData.additionalAnalysis}
              </td>
            </tr>
          ) : (
            <tr>
              <td
                colSpan={headers.length + subHeaders.length}
                className="border-line_normal rounded-b-[24px] w-screen border-2 text-center p-4">
                선택된 데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialProposeDetailTable;
