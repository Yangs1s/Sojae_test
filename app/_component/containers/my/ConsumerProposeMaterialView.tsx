"use client";
import React from "react";
import ConsumerProposeTable from "@/app/_component/containers/dashboard/table/ConsumerProposeTable";
import DashBoardField from "@/app/_component/containers/common/DashBoardField";

const ConsumerProposeMaterialView = () => {
  return (
    <div>
      <DashBoardField title={"RFQ 요청표"}>
        <ConsumerProposeTable />
      </DashBoardField>
    </div>
  );
};

export default ConsumerProposeMaterialView;
