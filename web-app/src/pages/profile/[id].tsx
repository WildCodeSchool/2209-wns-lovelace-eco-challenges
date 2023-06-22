import { client } from "@api/apolloClient";
import Image from "next/image";
import { GET_USERSBYID } from "@api/queries";
import { AppUser, Challenge, Hobbies } from "@gql/graphql";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ShowChallenge from "@shared/Challenges/ShowChallenge";

import Button from "@shared/Buttons/Button";

type Props = {
  local: string;
  _nextI18Next: SSRConfig;
  userById: AppUser;
  challenge: Challenge;
};

const Profil = (props: Props) => {
  const { userById } = props;
  const { hobbies, userToTeams } = userById;

  if (!userToTeams || userToTeams.length === 0) {
    return null;
  };

  const { team } = userToTeams[0];
  const { t } = useTranslation("profil");

  if (!team || !team.challengeToTeams || team.challengeToTeams.length === 0) {
    return null;
  }

  const challenge = team.challengeToTeams[0];

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center my-5">
          <div>
            <Image
              src="https://picsum.photos/300/300"
              width={300}
              height={300}
              alt="Photo de profil"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl text-primary">
              {userById.firstName} {userById.lastName}
            </h1>
            <p className="text-2xl text-primary">
              {userById.city}, {userById.country}
            </p>
            <p className="w-1/2 m-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.{" "}
            </p>
            <div className="flex items-center justify-center my-5">
              <Button name="Modifier le profil" type="button-primary" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ShowChallenge
          img={challenge.challenge.img || "https://picsum.photos/400/250"}
          challengeName={challenge.challenge.challengeName}
          description={challenge.challenge.description}
          endAt={challenge.endAt}
          level={challenge.challenge.level}
        />
      </div>
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
    </>
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
