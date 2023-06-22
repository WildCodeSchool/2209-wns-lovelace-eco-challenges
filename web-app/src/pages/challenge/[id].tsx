import Image from "next/image";
import ShowChallenge from "@shared/Challenges/ShowChallenge";
import Button from "@shared/Buttons/Button";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import { WHITE } from "@constants/color";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CHALLENGE_DETAIL } from "@api/queries";
import { client } from "@api/apolloClient";
import { useTranslation } from "next-i18next";

import { type Challenge as ChallengeType } from "@gql/graphql";
import { type SSRConfig } from "next-i18next";
import { type ParamsI18NextContext } from "@customTypes/types";
import { useRouter } from "next/router";

type Props = {
  challenge: ChallengeType;
  locale: string;
  _nextI18Next: SSRConfig;
};
const Challenge = (props: Props) => {
  const { challenge } = props;
  const { t } = useTranslation("challenge");
  const router = useRouter();

  return (
    <>
      <ShowChallenge src={challenge} />
      <Button
        name={t("challenge.gochallenge")}
        type="button-primary"
        icon={<LaunchChallenge width="20px" height="20px" fill={WHITE} />}
        onClickEvent={() => router.push("/formlaunchchallenge")}
      />
      <div className="block w-11/12">
        <h2 className="text-2xl">{t("challenge.teams")}</h2>
        <div className="flex justify-around">
          {challenge?.challengeToTeams?.map((element, index) => (
            <div className="w-2/5" key={index}>
              <Image
                src={element.team.img || "https://picsum.photos/300/150"}
                alt=""
                width={300}
                height={150}
              />
              <h3>{element.team.teamName}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: ParamsI18NextContext) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }
  const path = context.params;
  const { id } = path;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const { data } = await client.query({
    query: CHALLENGE_DETAIL,
    variables: { id },
  });

  const { challengeById } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["page", "challenge"])),
      challenge: challengeById ?? [],
      locale,
    },
  };
}

export default Challenge;
