import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header";
import Footer from "../components/footer";
export default function Home() {
  const { t } = useTranslation();

  return (
    <div class="jsx-1326851841 template-content-wrapper">
      <div class="jsx-639507104 dynamic-template">
        <Header />
        <div className="mt-5">
          <h1>{t("home.Home title")}</h1>
          <p>{t("home.Home description")}</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
