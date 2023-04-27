import { ParamsI18NextContext } from '@src/src-frontend/customTypes/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { type SSRConfig } from "next-i18next";

import React, { useState } from 'react'
import ArrowLinkTo from '@assets/logos/ArrowLinkTo';
import { useMutation } from '@apollo/client';
import { CHANGE_PASSWORD } from '@src/api/mutation';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

type Props = {
  locale: string,
  _nextI18Next: SSRConfig;
}

export default function ChangePasswordPage(props:Props) {
  const { t } = useTranslation(["change-password", "page"])

  const router = useRouter()

  const { id } = router.query

  const [changePassword, {loading}] = useMutation(CHANGE_PASSWORD)

  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(newPassword !== confirmPassword) {
      toast.error("le mot de passe et la confirmation ne corresponde pas")
    } else {
      try {
        await changePassword({
          variables: {
            userId:id,
            newPassword
          }
        })
        toast.success("changement de mot de passe éffectuer")
        router.push("/signin")
      } catch (err) {
        alert(err)
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='font-bold text-center text-3xl'> {t("change-password.title")} </h1>
        <label className="block mx-auto w-9/12 font-bold  m-4 md:w-6/12 lg:w-1/4">
          {t('change-password.fieldPassword')}
            <br />
            <input
              className="bg-terciary p-2 w-full  rounded-xl"
              type="password"
              required
              autoComplete="new-password"
              id="password"
              name="password"
              placeholder="*********************"
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
          </label>
        <label className="block mx-auto w-9/12 font-bold  m-4 md:w-6/12 lg:w-1/4">
          {t('change-password.fieldConfirmationPassword')}
            <br />
            <input
              className="bg-terciary p-2 w-full  rounded-xl"
              type="password"
              required
              autoComplete="new-password"
              id="confirm-password"
              name="confirm-password"
              placeholder="*********************"
              onChange={(e) => {
                setNewPassword(e.target.value)
              }}
            />
          </label>

          <button className="h-0 w-full">
            <ArrowLinkTo
              width="96px"
              height="96px"
              fill="#3B8574"
              className="m-auto"
            />
          </button>

      </form>
    </div>
  )
}


export const getServerSideProps = async (context: ParamsI18NextContext) => {
    const { locale } = context;

    if (!["en", "fr"].includes(locale)) {
      return { notFound: true };
    }
  
    return {
      props: {
        ...(await serverSideTranslations(locale, ["page", "change-password"])),
        locale,
      },
    };
  };
  