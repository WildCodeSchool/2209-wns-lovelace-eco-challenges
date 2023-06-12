import GoHomeSvg from '@assets/logos/GoHome';import Button from '@shared/Buttons/Button';
import router from 'next/router';
import React from 'react'

type GoHomeProps = {
  teamName?: string; 
  challengeName?: string; 
};

const GoHome = (props: GoHomeProps) => {
  return (
    <>
      <div className="font-medium text-2xl text-primary pb-5">C&apos;est Parti !</div>
      <div className="flex flex-col items-center space-y-5">
        <GoHomeSvg />
        <p className="text-center">Retrouves ta Team, animes le challenge, suis tes invitations, invites de nouveaux participants et pleins d&apos;autres choses dans dans ton espace dédié</p>
        <Button
          type="button-primary"
          name="Accéder à mon espace"
          onClickEvent={() => router.push("/profil")}
        />
      </div>
    </>
  )
}

export default GoHome