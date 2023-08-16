import { client } from "@api/apolloClient";
import Image from "next/image";
import { GET_USERSBYID } from "@api/queries";
import { AppUser, Challenge } from "@gql/graphql";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ShowChallenge from "@shared/Challenges/ShowChallenge";

import Button from "@shared/Buttons/Button";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import router from "next/router";
import { WHITE } from "@src/src-frontend/constants/color";

type Props = {
  local: string;
  _nextI18Next: SSRConfig;
  userById: AppUser;
  challenge: Challenge;
};

const Profil = (props: Props) => {
  const { t } = useTranslation("profil");
  const { userById } = props;
  const { hobbies, userToTeams } = userById;

  const challenges = userToTeams?.flatMap(userTeam =>
    userTeam.team.challengeToTeams?.map(challenge => ({
      teamName: userTeam.team.teamName,
      ...challenge
    }))
  );

  return (
    <div className="px-3  py-6 flex flex-col items-center space-y-6">
      <>
        <div className="flex flex-col items-center justify-center my-5">
          <div>
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              width={200}
              height={200}
              alt="Photo de profil"
              className="rounded-full"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl text-primary">
              {userById.firstName} {userById.lastName} 
              {/* {userById.age} */}
            </h1>
            <p className="text-2xl text-primary">
              {userById.city}, {userById.country}
            </p>
            <p className="w-1/2 m-auto">
              {userById.desc}
            </p>
            <button className="text-sm">Modifier mon profil 🖊️</button>
            <div className="flex flex-col items-center justify-center py-5">
              <Button
                icon={
                  <LaunchChallenge width="20px" height="20px" fill={WHITE} />
                }
                type="button-primary"
                name="Lancer un challenge"
                onClickEvent={() => router.push("/formlaunchchallenge")}
              />
            </div>
          </div>
        </div>
      </>
      <div className="w-9/12">
        <h3 className="mb-1 font-bold text-2xl">
          Mes challenges
        </h3>
        <div className="h-2 w-20 mb-7 bg-primary text-center"></div>
        <div className="flex flex-wrap justify-around">
          {challenges && challenges.length > 0 && challenges.map(challenge => 
            challenge && 
              <ShowChallenge
                img={challenge.challenge.img || "https://picsum.photos/400/250"}
                challengeName={challenge.challenge.challengeName}
                description={challenge.challenge.description}
                endAt={challenge.endAt}
                level={challenge.challenge.level}
              />
          )}
        </div>
      </div>
      <div className="w-9/12">
        <h3 className="mb-1 font-bold text-2xl">
          Mes hobbies
        </h3>
        <div className="h-2 w-20 mb-7 bg-primary text-center"></div>
        {hobbies && (
          <div className="flex items-center justify-around my-5">
            {hobbies.map((element, index) => (
              <div key={index}>
                <Image
                  src={`/images/${element.toLowerCase()}.png`}
                  alt={element}
                  height={80}
                  width={80}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }
  const path = context.params;
  const { id } = path;

  const { data } = await client.query({
    query: GET_USERSBYID,
    variables: { id },
  });

  const { userById } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page"])),
      userById: userById,
      locale,
    },
  };
}

export default Profil;
