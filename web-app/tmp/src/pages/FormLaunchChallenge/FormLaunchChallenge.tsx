import { useState } from "react";
import TiltedLabel from "../../Shared/TiltedLabel/TiltedLabel";

const FormLaunchChallenge = () => {
  const [teamName, setTeamName] = useState(""); 
  const [city, setCity] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [isPublic, setIsPublic] = useState(false); 
  const [img, setImg] = useState(null);  

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files
    console.log(imageFile)
  }
  return (
    <>
      <h1>Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>
      <form className="launch-challenge">
        <fieldset>
          <legend> 1 - Je créer ma Team</legend>
          <label>
            Nom de ma Team *
            <input 
              className="bg-terciary p-2 w-full rounded-xl"
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
              className="bg-terciary p-2 w-full rounded-xl"
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
              className="bg-terciary p-2 w-full rounded-xl"
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
              className="bg-terciary p-2 w-full rounded-xl"
              type="file" 
              id="imgTeam"  
              accept=".jpg, .jpeg, .png, .svg, .webp, .gif, .pdf"
              capture="environment"
              onChange={handleImageChange}
            />
          </label>
          {img && (
            <img src={img} alt="Mon équipe" />
          )}
          <label>
            Groupe ouvert
            <input 
              className="bg-terciary p-2 w-full rounded-xl"
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