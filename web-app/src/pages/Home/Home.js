import { SectionTitle, CardRow } from "./Home.styled";
import Wilder from "../../components/Wilder/Wilder";

const WILDERS = [
  {
    id: "aaaa",
    firstName: "Laurent",
    lastName: "Wilder",
    skills: [
      {
        id: "skill-1",
        skillName: "PHP",
      },
    ],
  },
  {
    id: "bbbb",
    firstName: "Jeanne",
    lastName: "Wild",
    skills: [
      {
        id: "skill-2",
        skillName: "JavaScript",
      },
    ],
  },
  {
    id: "cccc",
    firstName: "Nicolas",
    lastName: "W.",
    skills: [
      {
        id: "skill-1",
        skillName: "PHP",
      },
      {
        id: "skill-2",
        skillName: "JavaScript",
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
      <CardRow>
        {WILDERS.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstName={wilder.firstName}
            lastName={wilder.lastName}
            skills={wilder.skills}
          />
        ))}
      </CardRow>
    </>
  );
};

export default Home;
