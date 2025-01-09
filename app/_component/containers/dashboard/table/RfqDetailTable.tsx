import React from "react";
import CheckboxGroup from "@/app/_component/presentations/CheckBox";
const mockData = [
  {
    id: 2,
    registerNumber: "12",
    materialImage: "https://via.placeholder.com/50", // 이미지 URL 예시
    type: "PE",
    shape: "펠릿",
    color: "검은색",
    rawMaterialInfo: { pirPcr: "PCR", waste: "포장재" },
    deliveryVolume: "80",
    deliveryDate: "24-11-12",
    viscosityMI: "0.6",
    density: "0.8",
    plastic: "PE Mix",
    ashContent: "5",
    moisture: "0.02",
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
    additionalAnalysisResult: "",
  },
];

const headers = [
  { label: "check", rowspan: 4 },
  { label: "소재정보", colspan: 8, rowspan: 1 },
  { label: "소재 품질분석", colspan: 17 },
];

const subHeaders = [
  { label: "등록 번호", rowspan: 3 },
  { label: "이미지", rowspan: 3 },
  { label: "종류", rowspan: 3 },
  { label: "형태", rowspan: 3 },
  { label: "색상", rowspan: 3 },
  { label: "원료 정보", colspan: 2, rowspan: 1 },
  { label: "납품물동(원/kg)", rowspan: 3 },
  { label: "납품 일자", rowspan: 3 },
  { label: "점도 (g/10min)", rowspan: 3 },
  { label: "밀도(g/10cm³)", rowspan: 3 },
  { label: "플라스틱 주재질 시험", rowspan: 3 },
  { label: "회분", rowspan: 3 },
  { label: "수분", rowspan: 3 },
  { label: "ROHS 규제 물질", colspan: 10 },
  { label: "추가분석 결과", rowspan: 3 },
];

const detailHeaders = [
  { label: "PIR/PCR", rowspan: 2 },
  { label: "폐기물", rowspan: 2 },
  { label: "중금속", colspan: 4 },
  { label: "가소제", colspan: 4 },
  { label: "폴리브롬화", colspan: 2 },
];

const fourthHeaders = [
  "Pb",
  "Cd",
  "Hg",
  "Cr6",
  "BBP",
  "DBP",
  "DEHP",
  "DIBP",
  "비페닐(pBBs)",
  "디페닐 에테르(PBDEs)",
];
const RfqDetailTable = () => {
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
                colSpan={detailHeader.colspan || 1}
                rowSpan={detailHeader.rowspan || 1}
                className="w-[100px] text-[14px] tablet:border-[1px] mobile:border-[1px] mobile:border-t-0  whitespace-nowrap  bg-bg_normal border-line_normal px-2 py-1">
                {detailHeader.label}
              </th>
            ))}
          </tr>
          {/*마지막 네번째줄 해더*/}
          <tr>
            {fourthHeaders.map((detail, index) => (
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
              key={item.id}
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
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.registerNumber}
              </td>

              <td className="px-1 w-[120px] flex justify-between items-center border-line_normal border whitespace-nowrap text-center">
                <img
                  src={item.materialImage}
                  alt="소재 이미지"
                  width="50"
                  className="m-auto"
                />
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.type}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.shape}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.color}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.rawMaterialInfo.pirPcr}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.rawMaterialInfo.waste}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.deliveryVolume}
              </td>

              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.deliveryDate}
              </td>

              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.viscosityMI}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.density}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.plastic}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.ashContent}
              </td>
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.moisture}
              </td>
              {Object.values(item.rohsSubstances).map((value, index) => (
                <td
                  key={index}
                  className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                  {value}
                </td>
              ))}
              <td className="text-[16px] px-4 border-line_normal border whitespace-nowrap text-center">
                {item.additionalAnalysisResult}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RfqDetailTable;
