import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardRow } from "./Home.styled";
import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader";
import { SectionTitle } from "../../styles/base-styles";
import { CREATE_WILDER_PATH } from "../paths";
import { fetchWilders } from "./rest";

const Home = () => {
  const [wilders, setWilders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchedWilders = await fetchWilders();
      setWilders(fetchedWilders);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
      <Link to={CREATE_WILDER_PATH}>Ajouter un nouveau Wilder</Link>
      {isLoading ? (
        <Loader />
      ) : wilders.length === 0 ? (
        "Aucun wilder à afficher."
      ) : (
        <CardRow>
          {wilders?.map((wilder) => (
            <Wilder
              key={wilder.id}
              firstName={wilder.firstName}
              lastName={wilder.lastName}
              skills={wilder.skills}
            />
          ))}
        </CardRow>
      )}
    </>
  );
};

export default Home;
