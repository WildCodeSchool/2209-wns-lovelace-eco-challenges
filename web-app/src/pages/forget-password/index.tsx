import { NextI18NContext, ParamsI18NextContext } from '@src/src-frontend/customTypes/types';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { type SSRConfig } from "next-i18next";
import React, { useState } from 'react'
import Button from '@shared/Buttons/Button';
import { useMutation } from '@apollo/client';
import { ASK_CHANGE_PASSWORD } from '@src/api/mutation';
import { toast } from 'react-toastify';

type Props = {
    locale: string;
    _nextI18Next: SSRConfig;
  };

export default function ForgetPassword(props: Props) {
    
  const  { t } = useTranslation(["forget-password", "page"])
  

  const [email, setEmail] = useState<string>("")

  const [askResetPassword, {loading}] = useMutation(ASK_CHANGE_PASSWORD)
  
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await askResetPassword({
        variables:{
          email
        }
      })
      toast.success(t('forget-password.confirmation'))
    } catch (error) {
      toast.error("Une erreur est survenue")
    }
  };
  return (
    <div>

      <form className='w-8/12 mx-auto m-4 flex flex-col items-center' onSubmit={handleSubmit}>
        <legend>{t('forget-password.title')}</legend>
        <label className='flex flex-col my-6'>
          {t('forget-password.instruction')}
          <input type="email" onChange={handleChangeEmail} className=' w-10/12 bg-terciary p-2  rounded-xl' />
        </label>

        <Button name="Récupéré le mot de passe" type="button-primary"/>
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
        ...(await serverSideTranslations(locale, ["page", "forget-password"])),
        locale,
      },
    };
  };
  