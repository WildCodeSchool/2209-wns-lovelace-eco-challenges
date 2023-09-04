import { useEffect } from "react";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { useQuery } from "@apollo/client";
import { MyProfileQuery } from "@gql/graphql";
import { GET_PROFILE } from "@src/api/queries";
import { useRouter } from "next/router";

const Nav = () => {
  const { t } = useTranslation("page");
  const { data, refetch } = useQuery<MyProfileQuery>(GET_PROFILE)

  const router = useRouter()
  
  useEffect(() => {
    refetch()
  }, [refetch, router])
  
    return (
    <nav
      className="text-white
    hidden
    items-center
    justify-end
    md:flex"
    >
      <ul
        className="flex
            justify-end"
      >
        <Link href="/challenges">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.challenges")}
          </span>
        </Link>
        <Link href="/teams">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.teams")}
          </span>
        </Link>
        {
          data?.myProfile ? <Link href={`/profile/${data.myProfile.id}`}>
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {data.myProfile.nickname}
          </span>
        </Link> : 
          <>
            <Link href="/signin">
            <span
              className="px-2
                  text-base
                  lg:text-2xl"
            >
              {t("menu.login")}
            </span>
            </Link>
            <Link href="/signup">
              <span
                className="px-2
                    text-base
                    lg:text-2xl"
              >
                {t("menu.signin")}
              </span>
            </Link>
          </>
        }
        
      </ul>
    </nav>
  );
};

export default Nav;
