import { SectionTitle, CardRow } from "./Home.styled";
import Wilder from "../../components/Wilder/Wilder";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const Home = () => {
  const [wilders, setWilders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("/wilders");
      const fetchedWilders = await response.json();
      setWilders(fetchedWilders);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
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
