import { Link } from "react-router-dom";

import { challengesImages } from "../../data/HomePageData";
import Image from "../../Shared/Images/Image";
import Button from "../../Shared/Buttons/Button";
import DownArrow from "../../assets/logos/DownArrow";

import { PRIMARY } from "../../Shared/Constants/Color";

const Challenges = () => {
  console.log(challengesImages);
  return (
    <div className="challenges-page">
      <div className="challenges-intro">
        <h2 className="subtitle">Les challenges</h2>
        <div className="custom-underline bg-primary"></div>
        <p className="text-center">
          Trouver votre prochain challenge parmis une large sélection/nos
          propositions, thèmes variés, en fonction des saisons, de vos objectifs
          et aspirations.{" "}
        </p>
        <p className="text-center">
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
          <div className="challenges-image" key={index}>
            <Image source={element.source} description={element.description} />
            <p className="challenges-title">{element.title}</p>
            <p className="challenges-text">{element.text}</p>
            <p className="challenges-see-more">Voir plus</p>
          </div>
        ))}
        <div className="custom-flex-center m-7">
          <Button
            name="Plus de challenges"
            type="button-secondary"
            icon={<DownArrow width="20px" height="20px" fill={PRIMARY} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
