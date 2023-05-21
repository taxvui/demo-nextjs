import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header";
import Footer from "../components/footer";
export default function About() {
  const { t } = useTranslation("");

  return (
    <>
      <Header />
      <div className="mt-5">
        <h1>{t("about.About title")}</h1>
        <p>{t("about.About description")}</p>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
