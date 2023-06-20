import LaunchChallenge from "@assets/logos/LaunchChallenge";
import { PRIMARY } from "@src/src-frontend/constants/color";
import clsx from "clsx";
import { useMemo, useState } from "react";
import router from "next/router";

import { useTranslation } from "next-i18next";
import ShowChallenge from "@shared/Challenges/ShowChallenge";
import { AppUser, Challenge } from "@gql/graphql";

type Props = {
  name: string;
  type: string;
  icon?: any;
  size?: string;
  onClickEvent?: () => void;
  userById: AppUser;
  challenge: Challenge;
};

const Button = (props: Props) => {
  const { name, type, icon = null, size = 'min-w-[180px]' } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  // const { userById } = props;
  // const userToTeams = userById.userToTeams;
  // if (!userToTeams || userToTeams.length === 0) {
  //   return null;
  // }
  // const team = userToTeams[0].team;
  // if (!team || !team.challengeToTeams || team.challengeToTeams.length === 0) {
  //   return null;
  // }
  // const challenge = team.challengeToTeams[0];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const { t } = useTranslation(["home", "page"]);

  const buttonClassName = useMemo(
    (): string =>
      clsx({
        "rounded-lg p-2 min-h-[42px] flex items-center justify-center shadow-xl": true,
        "text-white bg-primary": type === "button-primary" ?? true,
        "text-primary bg-white": type === "button-secondary" ?? true,
        "flex items-center justify-between": !!icon,
        [String(size)]: true,
      }),
    [type, icon, size]
  );

  return (
    <div>
      <button onClick={toggleExpand} className={buttonClassName}>
        {name}
        {icon ?? <i>{icon}</i>}
      </button>
      {isExpanded && (
        <div className="mt-4">
          <Button
            icon={
              <LaunchChallenge width="20px" height="20px" fill={PRIMARY} />
            }
            type="button-secondary"
            name={t("Lancer un challenge")}
            onClickEvent={() => router.push("/formlaunchchallenge")}
          />
          <h2 className="text-xl font-bold mb-4">Les challenges et événements en cours</h2>
          <div className="bg-white p-4">

            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="search your challenge"
                className="border rounded px-3 py-2 w-1/2"
              />
              <input
                type="text"
                placeholder="search by country"
                className="border rounded px-3 py-2 w-1/2"
              />
            </div>

            <hr className="border-black border-b my-4" />

            {/* <ShowChallenge
              img={challenge.challenge.img || "https://picsum.photos/400/250"}
              challengeName={challenge.challenge.challengeName}
              description={challenge.challenge.description}
              endAt={challenge.endAt}
              level={challenge.challenge.level}
            /> */}
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Button;
