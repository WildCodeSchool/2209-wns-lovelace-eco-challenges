import { Link } from "react-router-dom";

import { challengesImages } from "../../data/HomePageData";
import Button from "../../Shared/Buttons/Button";
import DownArrow from "../../assets/logos/DownArrow";
import List from "../../Shared/List/List";

import { PRIMARY } from "../../Shared/Constants/Color";

const Challenges = () => {
  console.log(challengesImages);
  return (
    <div className="challenges-page">
      <div className="challenges-intro">
        <h2 className="subtitle">Les challenges</h2>
        <div className="custom-underline bg-primary"></div>
        <p className="text-center xl:text-start">
          Trouver votre prochain challenge parmis une large sélection/nos
          propositions, thèmes variés, en fonction des saisons, de vos objectifs
          et aspirations.{" "}
        </p>
        <p className="text-center xl:text-start">
          Créez vos propres challenges avec notre version premium !{" "}
          <span className="text-blue-600">En savoir plus</span>
        </p>
      </div>
      <div className="challenges-search">
        <input
          className="search"
          type="text"
          placeholder=" Chercher un challenge..."
        />
      </div>
      <div className="challenges-list">
        {challengesImages.map((element, index) => (
          <List
            key={index}
            source={element.source}
            description={element.description}
            text={element.text}
            title={element.title}
            type="pin"
          />
        ))}
      </div>
      <div className="custom-flex-center m-7">
        <Button
          name="Plus de challenges"
          type="button-secondary"
          icon={<DownArrow width="20px" height="20px" fill={PRIMARY} />}
        />
      </div>
    </div>
  );
};

export default Challenges;
