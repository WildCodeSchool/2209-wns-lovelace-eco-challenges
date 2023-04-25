import { GetChallengesQuery, GetChallengesQueryVariables } from "@gql/graphql";
import { CHALLENGES } from "@api/queries";
import { gql, useQuery } from "@apollo/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { client } from "@api/apolloClient";

import Button from "@shared/Buttons/Button";
import DownArrow from "@assets/logos/DownArrow";
import List from "@shared/List/List";
import Loader from "@shared/Loader/Loader";

import { PRIMARY } from "@constants/color";
import { type NextI18NContext } from "@customTypes/types";

const pageNumber = 1;
const itemsByPage = 6;

type Props = {
  challenges: Array<any>;
};

const Challenges = (props: Props) => {
  const { challenges } = props;

  return (
    <div>
      <div className="w-11/12">
        <h2 className="subtitle">Les challenges</h2>
        <div className="custom-underline bg-primary"></div>
        <p className="text-center xl:text-start">
          Trouver votre prochain challenge parmis une large sélection/nos
          propositions, thèmes variés, en fonction des saisons, de vos objectifs
          et aspirations.{" "}
        </p>
        <p className="text-center xl:text-start">
          Créez vos propres challenges avec notre version premium !{" "}
          <span className="text-blue-600">En savoir plus</span>
        </p>
      </div>
      <div
        className="w-11/12
          m-7
          text-center
          xl:text-start"
      >
        <input className="search" type="text" placeholder="TODO..." />
      </div>
      <div
        className="flex
          items-center
          justify-center
          flex-col
          w-11/12
          flex-wrap
          md:flex-row
          md:justify-around
          md:items-baseline"
      >
        {challenges.map((element, index) => (
          <List
            key={index}
            title={element.challengeName}
            source={element.img}
            description={element.description}
            endAt={element.endAt}
            level={element.level}
            id={element.id}
          />
        ))}
      </div>
      <div
        className="flex
          items-center
          justify-center
          flex-col m-7"
      >
        <Button
          name="Plus de challenges"
          type="button-secondary"
          icon={<DownArrow width="20px" height="20px" fill={PRIMARY} />}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context: NextI18NContext) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  const { data } = await client.query({
    query: CHALLENGES,
    variables: { pageNumber, itemsByPage },
    // ssrMode: true,
  });

  const { challenges } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      challenges: challenges ?? [],
      locale,
    },
  };
}

export default Challenges;
