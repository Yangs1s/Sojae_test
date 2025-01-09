"use client";
import React from "react";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";
import MaterialTableView from "@/app/_component/containers/dashboard/table/MaterialTableView";
import MaterialDetailTable from "@/app/_component/containers/dashboard/table/MaterialDetailTable";
import Pagination from "@/app/_component/containers/common/Pagination";
import Button from "@/app/_component/presentations/Button";

const InterestRfq = () => {
  return (
    <div
      className={"flex flex-col mb-[80px] gap-12 relative tablet:w-[1000px]"}>
      <div className={"tablet:w-full"}>
        <DashBoardField title={"관심 RFQ"}>
          <MaterialTableView />
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </DashBoardField>
        <DashBoardField title={"RFQ 요청 상세"}>
          <MaterialDetailTable />
        </DashBoardField>
        <Button
          className={"absolute bottom-[-60px] right-0"}
          title={"제안하기"}
          onClick={() => {}}
          variant={"bg-primary"}
          buttonSize={"md"}
        />
      </div>
    </div>
  );
};

export default InterestRfq;
