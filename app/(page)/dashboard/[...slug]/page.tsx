import React, { Suspense } from "react";

import EstimateRequestView from "@/app/_component/containers/dashboard/EstimateRequestView";
import EstimateProposeView from "@/app/_component/containers/dashboard/EstimateProposeView";
import SupplySearchView from "@/app/_component/containers/dashboard/SupplySearchView";
import MaterialContractView from "@/app/_component/containers/dashboard/MaterialContractView";
import MaterialAddView from "@/app/_component/containers/dashboard/MaterialAddView";
import RfqSearchView from "@/app/_component/containers/dashboard/RfqSearchView";
import MaterialProposeView from "@/app/_component/containers/dashboard/MaterialProposeView";
import DeliveryContractView from "@/app/_component/containers/dashboard/DeliveryContractView";
import AdminMaterialAddView from "@/app/_component/containers/dashboard/AdminMaterialAddView";
import AdminMaterialProposeView from "@/app/_component/containers/dashboard/AdminMaterialProposeView";
import AdminMaterialContractView from "@/app/_component/containers/dashboard/AdminMaterialContractView";
import AdminMember from "@/app/_component/containers/dashboard/AdminMember";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<{
    type?: string;
  }>;
};

const Page = async ({ params, searchParams }: PageProps) => {
  const { slug } = await params;
  const { type } = await searchParams;
  const url = slug[slug.length - 1];

  function returnPage() {
    if (url === "supply-search") {
      return <SupplySearchView />;
    } else if (url === "rfq-search") {
      return <RfqSearchView />;
    } else if (url === "material-contract") {
      return <AdminMaterialContractView />;
    } else if (url === "status") {
      switch (type) {
        case "estimate-request":
          return <EstimateRequestView />;
        case "estimate-propose":
          return <EstimateProposeView />;
        case "material-contract":
          return <MaterialContractView />;
        case "material-add":
          return <MaterialAddView />;
        case "material-propose":
          return <MaterialProposeView />;
        case "delivery-contract":
          return <DeliveryContractView />;
        case "admin-material-add":
          return <AdminMaterialAddView />;
        case "admin-material-propose":
          return <AdminMaterialProposeView />;
      }
    } else if (url === "admin-member") {
      return <AdminMember />;
    }
  }

  return <Suspense>{returnPage()}</Suspense>;
};

export default Page;
