import React from "react";
import InterestMaterialView from "@/app/_component/containers/my/InterestMaterialView";
import ProposeMaterialView from "@/app/_component/containers/my/ProposeMaterialView";
import ModifyMemberInfo from "@/app/_component/containers/my/ModifyMemberInfo";
import PrivateUserModify from "@/app/_component/containers/my/PrivateUserModify";
import CorporationMemberInfo from "@/app/_component/containers/my/CorporationMemberInfo";
import Withdraw from "@/app/_component/containers/my/Withdraw";
import SaveView from "@/app/_component/containers/my/SaveView";
import InterestRfq from "@/app/_component/containers/my/InterestRfq";
import ConsumerProposeMaterialView from "@/app/_component/containers/my/ConsumerProposeMaterialView";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ type: string }>;
}) => {
  const { slug } = await params;
  const { type } = await searchParams;
  const url = slug[slug.length - 1];
  // const query = useSearchParams();

  function returnPage() {
    if (url === "interest-material") {
      return <InterestMaterialView />;
    } else if (url === "propose-material") {
      if (type === "supplier") {
        return <ProposeMaterialView />;
      } else if (type === "consumer") {
        return <ConsumerProposeMaterialView />;
      }
    } else if (url === "modify") {
      if (!type) {
        return <ModifyMemberInfo />;
      } else if (type === "private") {
        return <PrivateUserModify />;
      } else if (type === "corporation") {
        return <CorporationMemberInfo />;
      }
    } else if (url === "withdraw") {
      return <Withdraw />;
    } else if (url === "save") {
      return <SaveView />;
    } else if (url === "interest-rfq") {
      return <InterestRfq />;
    }
  }
  return returnPage();
};

export default Page;
