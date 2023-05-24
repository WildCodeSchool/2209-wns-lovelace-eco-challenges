import { client } from "@api/apolloClient";
import Image from "next/image";
import { GET_USERSBYID } from "@api/queries";
import { AppUser } from "@gql/graphql";
// import List from "@shared/List/List";
import HeaderProfil from "@shared/Profil/HeaderProfil";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

type Props = {
  local: string;
  _nextI18Next: SSRConfig;
  userById: AppUser;
}

const Profil = (props: Props) => {
  console.log('PROPS', props)
  const { userById } = props;
  const { t } = useTranslation("profil");
  if (userById) {
    const userToTeams = userById.userToTeams;
    if (userToTeams && userToTeams.length > 0) {
      const team = userToTeams[0].team;
      if (team && team.challengeToTeams && team.challengeToTeams.length > 0) {
        const challenge = team.challengeToTeams[0];

        return <div className="container mx-auto p-4 md:p-4">
          <div className="container mx-auto p-4 md:p-4 flex flex-col space-y-4">
            <HeaderProfil
              firstName={userById.firstName}
              lastName={userById.lastName}
              city={userById.city}
              country={userById.country}
            />
            <h2 className="text-2xl font-bold mb-8">Challenges</h2>
            <div className="container mx-auto md:p-0">
              <div className="relative bg-white shadow-md rounded-lg w-2/1 mx-auto md:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center">
                <div className="relative bg-white shadow-md rounded-lg w-2/1 flex justify-center">
                  {/* <List
                    description={challenge.challenge.description}
                    title={challenge.challenge.challengeName}
                    source={challenge.challenge.img}
                    endAt={challenge.endAt}
                    level={challenge.challenge.level}
                  /> */}
                </div>
                <div className="absolute top-0 right-0 bg-green-500 text-white py-1 px-6 transform -translate-x-1/6 translate-y-1/6 rotate-45 before:absolute before:right-0 before:top-0 before:content: 'Terminé'; before:bg-green-500 before:text-white before:py-1 before:px-6 before:transform: -translate-x-1/6 translate-y-1/6 before:rotate-45 before:shadow-md"></div>
              </div>
            </div>
            <div className="rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4">Loisirs</h2>
              <div className="flex flex-row justify-around items-center w-full">
                <div className="flex flex-col items-center justify-center space-y-2 space-x-2">
                  <Image src="https://picsum.photos/200/300" alt="" width={70} height={150} className="max-w-xs" />
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 space-x-2">
                  <Image src="https://picsum.photos/200/300" alt="" width={70} height={150} className="max-w-xs" />
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 space-x-2">
                  <Image src="https://picsum.photos/200/300" alt="" width={70} height={150} className="max-w-xs" />
                </div>
              </div>
            </div>
            <div className="rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4">Mes amis</h2>
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
      }
    }
  }
}

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
  console.log('SALMJÖEIAUÖDEIMZ', data)

  const { userById } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page"])),
      userById: userById,
      locale,
    },
  }
}
export default Profil