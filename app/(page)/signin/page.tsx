import React from "react";
import SignInView from "@/app/_component/containers/signIn/SignInView";
import PageFooter from "@/app/_layout/PageFooter";

const SignInPage = () => {
  return (
    <div
      className={"web:flex w-full h-full web:justify-center web:items-center"}>
      <div
        className={
          "max-w-[1280px] flex-col web:flex web:justify-center web:items-center h-full w-full"
        }>
        <SignInView />
      </div>
    </div>
  );
};

export default SignInPage;
