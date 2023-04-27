import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SignInMutation, SignInMutationVariables } from "@gql/graphql";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Button from "@shared/Buttons/Button";
import ArrowLinkTo from "@assets/logos/ArrowLinkTo";

import { type NextI18NContext } from "@customTypes/types";
import { type SSRConfig } from "next-i18next";

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;

type Props = {
  locale: string;
  _nextI18Next: SSRConfig;
};

const SignIn = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation("signin");

  const { locale } = props;

  const [signIn, { loading }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN);
  const router = useRouter();

  const submit = async () => {
    try {
      await signIn({
        variables: { email, password },
      });
      if (locale === "fr") {
        toast.success("Vous vous êtes connecté avec succès.");
      } else {
        toast.success("You have successfully logged in.");
      }
      /* navigate(HOME_PATH); */
    } catch (error) {
      // toast.error(getErrorMessage(error));
    }
  };

  const openSignUp = () => router.push("/signup");
  return (
    <>
      {/* <SectionTitle>Connexion</SectionTitle> */}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
        className="w-10/12 mx-auto my-8 border-2 rounded-xl border-primary"
      >
        <fieldset className="form">
          <legend className="bg-white font-bold -translate-y-1/2 border-2 mx-auto rounded-md border-primary text-primary -rotate-2 px-8">
            <h1 className="rotate-2">{t("signin.signin")}</h1>
          </legend>
          <label className="block mx-auto w-9/12  font-bold">
            {t("signin.mail")}
            <br />
            <input
              type="email"
              required
              autoComplete="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12  font-bold">
            {t("signin.password")}
            <br />
            <input
              className="bg-terciary p-2 w-full  rounded-xl"
              type="password"
              required
              autoComplete="current-password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <br />
          <div className=" inline-block text-center w-full m-auto">
            <input
              type="checkbox"
              className="bg-terciary p-2 w-full  rounded-xl"
            />
            {t("signin.stay")}
          </div>

          <button className="h-0 w-full">
            <ArrowLinkTo
              width="96px"
              height="96px"
              fill="#3B8574"
              className="m-auto"
            />
          </button>
        </fieldset>
      </form>

      <div className="flex items-center justify-center flex-col">
        <h2>{t("signin.notyet")}</h2>
        <Button
          onClickEvent={openSignUp}
          type="button-primary"
          name={t("signin.create")}
        />
      </div>
    </>
  );
};

export const getServerSideProps = async (context: NextI18NContext) => {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["page", "signin"])),
      locale,
    },
  };
};

export default SignIn;
