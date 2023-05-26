import { client } from "@api/apolloClient";
import Image from "next/image";
import { GET_USERSBYID } from "@api/queries";
import { AppUser, Challenge, Hobbies } from "@gql/graphql";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ShowChallenge from "@shared/Challenges/ShowChallenge";
import HeaderProfil from "@shared/Profil/HeaderProfil";

import art from '../../src-frontend/assets/images/hobbies/art.png';
import book from '../../src-frontend/assets/images/hobbies/book.png';
import cook from '../../src-frontend/assets/images/hobbies/cooking.png';
import games from '../../src-frontend/assets/images/hobbies/games.png';
import music from '../../src-frontend/assets/images/hobbies/music.png';
import pets from '../../src-frontend/assets/images/hobbies/pets.png';
import sport from '../../src-frontend/assets/images/hobbies/machine-dentrainement.png';
import trips from '../../src-frontend/assets/images/hobbies/trips.png';

type Props = {
  local: string;
  _nextI18Next: SSRConfig;
  userById: AppUser;
  challenge: Challenge;
};

const Profil = (props: Props) => {
  console.log('PROPS', props);
  const { userById } = props;
  const { t } = useTranslation("profil");

  if (!userById) {
    return null;
  }

  const userToTeams = userById.userToTeams;

  if (!userToTeams || userToTeams.length === 0) {
    return null;
  }

  const team = userToTeams[0].team;

  if (!team || !team.challengeToTeams || team.challengeToTeams.length === 0) {
    return null;
  }

  const challenge = team.challengeToTeams[0];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 lg:flex-grow lg:flex-col">
          <HeaderProfil
            firstName={userById.firstName}
            lastName={userById.lastName}
            city={userById.city}
            country={userById.country}
          />
        </div>
        <div className="w-full lg:w-2/3 lg:flex-grow">
          <div className="shadow-md">
            <div className="bg-white rounded-lg p-4">
              <div className="mt-4 flex justify-center">
                <ShowChallenge
                  img={challenge.challenge.img || "https://picsum.photos/400/250"}
                  challengeName={challenge.challenge.challengeName}
                  description={challenge.challenge.description}
                  endAt={challenge.endAt}
                  level={challenge.challenge.level}
                />
              </div>
            </div>
            <div className="rounded-lg">
              <div className="flex flex-row justify-around items-center w-full">
                {userById.hobbies && userById.hobbies.length > 0 ? (
                  <div className="flex flex-row items-center justify-center space-x-4 md:space-x-8 p-4 mt-8">
                    {userById.hobbies.map((hobby, index) => (
                      <div key={index} className="space-x-2">
                        {hobby.toString() === Hobbies.Art && (
                          <Image
                            src={art}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Book && (
                          <Image
                            src={book}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Cook && (
                          <Image
                            src={cook}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Games && (
                          <Image
                            src={games}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Music && (
                          <Image
                            src={music}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Pets && (
                          <Image
                            src={pets}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Sport && (
                          <Image
                            src={sport}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {hobby.toString() === Hobbies.Trips && (
                          <Image
                            src={trips}
                            alt={hobby.toString()}
                            width={80}
                            height={80}
                          />
                        )}
                        {/* Add conditions for other hobbies with corresponding logos */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Ajoutez vos loisirs !</p>
                )}
              </div>
            </div>
            <div className="rounded-lg p-4 mt-4">
              <div className="flex flex-row justify-evenly items-center">
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    src="https://picsum.photos/200/300"
                    alt="Pierre"
                    width={70}
                    height={150}
                    className="max-w-xs lg:max-w-full lg:rounded-full rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    src="https://picsum.photos/200/300"
                    alt="Pierre"
                    width={70}
                    height={150}
                    className="max-w-xs lg:max-w-full lg:rounded-full rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    src="https://picsum.photos/200/300"
                    alt="Pierre"
                    width={70}
                    height={150}
                    className="max-w-xs lg:max-w-full lg:rounded-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
  console.log('SALMJÖEIAUÖDEIMZ', data);

  const { userById } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page"])),
      userById: userById,
      locale,
    },
  }
}

export default Profil;
