import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Apple from "@assets/logos/Apple";
import ArrowLinkTo from "@assets/logos/ArrowLinkTo";
import Facebook from "@assets/logos/Facebook";
import { Mail } from "@assets/logos/Mail";
import { SignUpMutation, SignUpMutationVariables } from "@gql/graphql";
import Button from "@shared/Buttons/Button";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { SIGN_IN_PATH } from "@constants/paths";

import { type NextI18NContext } from "@customTypes/types";
import { type SSRConfig } from "next-i18next";
import { SIGN_UP } from "@src/api/mutation";


type Props = {
  locale: string;
  _nextI18Next: SSRConfig;
};

const SignUp = (props: Props) => {
  const { locale } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { t } = useTranslation("signup");


  const [signUp, { loading }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGN_UP);
  const router = useRouter();

  const submit = async () => {
    try {
      await signUp({
        variables: {
          firstName,
          lastName,
          nickname,
          email,
          city,
          desc,
          age,
          country,
          password,
        },
      });
      if (locale === "fr") {
        toast.success(
          "Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter."
        );
      } else {
        toast.success(
          "Your account has been successfully created. You can now connect."
        );
        alert("Création du compte réussie")
      }
      router.push(SIGN_IN_PATH);
    } catch (error) {
      // toast.error(getErrorMessage(error));
      alert("Une erreur est survenue")
    }
  };

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          
          if (passwordConfirmation !== password) {
            alert(t("signup.donotwork"))
          } else {
            await submit();
          }
        }}
        className="w-10/12 mx-auto my-8 border-2 rounded-xl border-primary md:w-2/3 lg:w-1/4"
      >
        <fieldset className="form">
          <legend className="bg-white font-bold -translate-y-1/2 border-2 mx-auto rounded-md border-primary text-primary -rotate-2 px-8">
            <h1 className="rotate-2">{t("signup.signup")}</h1>{" "}
          </legend>
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.firstname")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="text"
              required
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="John"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.lastname")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="text"
              required
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Doe"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.nickname")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="text"
              required
              id="Nickname"
              name="Nickname"
              value={nickname}
              placeholder="JohnDoe"
              onChange={(event) => {
                setNickname(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.email")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="email"
              required
              autoComplete="email"
              id="email"
              name="email"
              placeholder="john.doe@email.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.city")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="text"
              required
              id="city"
              name="city"
              placeholder="Paris"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.country")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="text"
              required
              id="country"
              name="country"
              placeholder="France"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </label>
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.bio")}

            <textarea
              className="bg-terciary p-2 w-full rounded-xl resize-none"
              required
              id="description"
              name="description"
              placeholder="France"
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.password")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="password"
              required
              autoComplete="new-password"
              id="password"
              name="password"
              placeholder="*********************"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <br />

          <label className="block mx-auto w-9/12 font-bold">
            {t("signup.confirm")}
            <br />
            <input
              className="bg-terciary p-2 w-full rounded-xl"
              type="password"
              required
              autoComplete="new-password"
              id="confirm-password"
              name="confirm-password"
              placeholder="*********************"
              onChange={(e) => {
                setPasswordConfirmation(e.target.value)
              }}
            />

            {/* {confirmedPassword ? (
              <></>
            ) : (
              <p className="error">{t("signup.donotwork")}</p>
            )} */}
            {/* 
              {confirmedPassword ? (
                <></>
              ) : (
                <p className="error">{t('signup.donotwork')}</p>
              )}
             */}
          </label>

          <div className="text-center font-semibold text-primary pt-4 pb-2">
            <h2>{t("signup.orcreate")}</h2>
          </div>

          <section className="flex w-full justify-around">
            <button>
              <Facebook />
            </button>

            <button>
              <Mail />
            </button>

            <button>
              <Apple />
            </button>
          </section>

          <button className="h-0 w-full">
            <ArrowLinkTo
              width="96px"
              height="96px"
              fill="#3B8574"
              className="m-auto"
            />
          </button>
          {/* <button className="w-content m-auto" disabled={loading || !confirmedPassword}> <ArrowLinkTo /> </button> */}
        </fieldset>
        <br />
      </form>

      <div className="flex items-center justify-center flex-col m-4">
        <h2>{t("signup.account")}</h2>
        <Button
          type="button-primary"
          name="Se Connecter"
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
      ...(await serverSideTranslations(locale, ["page", "signup"])),
      locale,
    },
  };
};

export default SignUp;
