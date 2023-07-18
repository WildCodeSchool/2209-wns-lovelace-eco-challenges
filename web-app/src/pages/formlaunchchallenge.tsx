import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "react-datepicker/dist/react-datepicker.css";
import TiltedLabel from "@shared/TiltedLabel/TiltedLabel";
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import FormStepper from "@shared/FormStepper/FormStepper";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import { type SSRConfig, useTranslation } from "next-i18next";

type Props = {
  locale: string;
  _nextI18Next: SSRConfig;
};

const FormLaunchChallenge = (props: Props) => {
  const { t } = useTranslation("form");
  // const userEmail = "user4@gmail.com"; //a recup avec le contexte

  return (
    <div className="flex flex-col items-center my-10 space-y-3 w-full">
      <LaunchChallenge width="3em" height="3em" />
      <h1 className="font-bold text-2xl">{t("form.title")}</h1>
      <TiltedLabel>{t("form.rules")}</TiltedLabel>
      <FormStepper />
    </div>
  );
};

export async function getServerSideProps(context: NextI18NContext) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["page", "form"])),
      locale,
    },
  };
}

export default FormLaunchChallenge;
