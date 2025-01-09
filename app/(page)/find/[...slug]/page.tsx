import React from "react";
import FindPasswordView from "@/app/_component/containers/find/FindPasswordView";
import FindIdView from "@/app/_component/containers/find/FindIdView";
import PasswordReset from "@/app/_component/containers/find/PasswordReset";

const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const url = slug[slug.length - 1];
  function returnPage() {
    if (url === "password") {
      return <FindPasswordView />;
    } else if (url === "email") {
      return <FindIdView />;
    } else if (url === "password-reset") {
      return <PasswordReset />;
    }
  }

  return returnPage();
};

export default Page;
