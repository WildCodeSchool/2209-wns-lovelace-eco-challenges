import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "react-datepicker/dist/react-datepicker.css";
import TiltedLabel from "@shared/TiltedLabel/TiltedLabel";
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import FormStepper from "@shared/FormStepper/FormStepper";
import LaunchChallenge from "@assets/logos/LaunchChallenge";


const FormLaunchChallenge = () => {
  // const userEmail = "user4@gmail.com"; //a recup avec le contexte

  return (
    <div className="flex flex-col items-center my-10 space-y-3 w-full">
      <LaunchChallenge width="3em" height="3em"/>
      <h1 className="font-bold text-2xl">Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>
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
      ...(await serverSideTranslations(locale, [
        "page",
        "formlaunchchallenge",
      ])),
      locale,
    },
  };
}

export default FormLaunchChallenge;
