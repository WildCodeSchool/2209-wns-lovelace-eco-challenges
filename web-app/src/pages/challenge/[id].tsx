import { gql, useQuery } from "@apollo/client";
import {
  GetChallengeByIdQueryVariables,
  GetChallengeByIdQuery,
} from "@gql/graphql";
import Loader from "@shared/Loader/Loader";
import Image from "next/image";
import List from "@shared/List/List";
import Button from "@shared/Buttons/Button";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import { WHITE } from "@constants/color";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CHALLENGE_DETAIL } from "@api/queries";
import { client } from "@api/apolloClient";

import { type ChallengeById } from "@customTypes/challenges";
import { type ChallengeId } from "@customTypes/types";

type Props = {
  challengeById: ChallengeById;
};

const Challenge = (props: Props) => {
  const { challengeById } = props;

  return (
    <>
    <List
      description={challengeById.description}
      title={challengeById.challengeName}
      source={challengeById.img}
      endAt={challengeById.endAt}
      level={challengeById.level}
    />
    <Button
      name="Lancer le challenge"
      type="button-primary"
      icon={<LaunchChallenge width="20px" height="20px" fill={WHITE} />}
    />
    <div className="block w-11/12">
      <h2 className="text-2xl">Teams</h2>
      <div className="flex justify-around">
        {challengeById.teams.map((element, index) => (
          <div className="w-2/5" key={index}>
            <Image src={element.img || "https://picsum.photos/300/150" } alt="" width={300} height={150} />
            <h3>{element.teamName}</h3>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export async function getServerSideProps(context: ChallengeId) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  const path = context.params;
  const { id } = path;
  
  console.log(path);

  const { data } = await client.query({
    query: CHALLENGE_DETAIL,
    variables: { id },
    // ssrMode: true,
  });

  const { challengeById } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      challengeById: challengeById ?? [],
      locale,
    },
  }
}

export default Challenge;