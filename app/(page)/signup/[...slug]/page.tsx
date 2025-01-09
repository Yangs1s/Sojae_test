import SignUpSelectView from "@/app/_component/containers/signup/SignUpSelectView";
import PrivateSignUp from "@/app/_component/containers/signup/PrivateSignUp";
import CorporationSignUp from "@/app/_component/containers/signup/CorporationSignUp";
import CorporationInfo from "@/app/_component/containers/signup/CorporationInfo";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const url = slug[slug.length - 1];
  console.log(slug);
  function returnPage() {
    if (url === "supplier" || url === "consumer") {
      return <SignUpSelectView slug={url} />;
    } else if (url === "private") {
      return <PrivateSignUp />;
    } else if (url === "corporation") {
      return <CorporationSignUp />;
    } else if (url === "corInfo") {
      return <CorporationInfo />;
    }
  }

  return returnPage();
};

export default Page;
