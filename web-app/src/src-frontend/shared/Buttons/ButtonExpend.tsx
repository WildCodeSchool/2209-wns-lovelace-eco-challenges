import clsx from "clsx";
import { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { GET_USERSBYID } from "@src/api/queries";
import { client } from "@src/api/apolloClient";

type Props = {
  img: string
  challengeName: string
  date: string
  desc: string
  name: string;
  type: string;
  icon?: any;
  size?: string;
  onClickEvent?: () => void;
};

const Button = (props: Props) => {
  const { name, type, icon = null, size, img, challengeName, date, desc } = props;

  const [isExpanded, setIsExpanded] = useState(false);

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
      <div className="flex flex-col items-center">
        <button onClick={toggleExpand} className={buttonClassName}>
          {name}
          {icon ?? <i>{icon}</i>}
        </button>
        {isExpanded && (
          <div className="flex flex-row justify-center mt-4">
            <h2 className="text-xl font-bold mb-4 p-8">Les challenges et événements en cours</h2>
            <div className="my-4 bg-white p-4">
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
              <div className="flex">
                <div className="w-1/2">
                  <img src={img} alt="Image du challenge" />
                </div>
                <div className="w-1/2 flex flex-col justify-center pl-4 text-left">
                  <h2 className="text-center">{challengeName}</h2>
                  <p className="text-center">{date}</p>
                  <p className="text-center">{desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
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

  const { userById } = data;
  return {
    props: {
      userById: userById,
      locale,
    },
  }
}

export default Button;
