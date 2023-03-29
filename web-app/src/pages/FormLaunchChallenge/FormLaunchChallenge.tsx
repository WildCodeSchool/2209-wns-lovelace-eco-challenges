import { useState } from "react";
import TiltedLabel from "../../Shared/TiltedLabel/TiltedLabel";

const FormLaunchChallenge = () => {
  const [teamName, setTeamName] = useState(""); 
  const [city, setCity] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [isPublic, setIsPublic] = useState(false); 
  const [img, setImg] = useState(null);  

  return (
    <>
      <h1>Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>
      <form>
        <fieldset>
          <legend> 1 - Je créer ma Team</legend>
          <label>
            Nom de ma Team *
            <input 
              required
              type="text" 
              id="teamName" 
              name="teamName"
              value={teamName}
              onChange={(event) => {
                  setTeamName(event.target.value);
              }}
            />
          </label>
          <label>
            Ville *
            <input 
              required
              type="text" 
              id="city" 
              name="city"
              value={city}
              onChange={(event) => {
                  setCity(event.target.value);
              }}
            />
          </label>
          <label>
            Pays *
            <input 
              required
              type="text" 
              id="country" 
              name="country"
              value={country}
              onChange={(event) => {
                  setCountry(event.target.value);
              }}
            />
          </label>
          <label>
            Fanion, photo...
            <input 
              type="file" 
              id="imgTeam"  
              onChange={(e)=>""}
            />
          </label>
          {img && (
            <img src={img} alt="Mon équipe" />
          )}
          <label>
            Groupe ouvert
            <input 
              type="checkbox" 
              id="isPublic" 
              checked={isPublic}
              onChange={(e)=>setIsPublic(e.target.checked)}
            />
          </label>
        </fieldset>
      </form>
    </>
  )
}

export default FormLaunchChallenge