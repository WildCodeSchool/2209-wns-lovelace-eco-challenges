

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Apple from "../../../assets/logos/Apple";
import ArrowLinkTo from "../../../assets/logos/ArrowLinkTo";
import Facebook from "../../../assets/logos/Facebook";
import { Mail } from "../../../assets/logos/Mail";
import { SignUpMutation, SignUpMutationVariables } from "../../../gql/graphql";
import Button from "../../../Shared/Buttons/Button";
import { getErrorMessage } from "../../../utils";
import { SIGN_IN_PATH } from "../../paths";



const SIGN_UP = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!) {
    signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password) {
      id
      email
      firstName
      lastName
      nickname
      score
      disabled
      city
      country
    }
  }
`;


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [confirmedPassword, setConfirmedPassword] = useState(false)
 
  const [signUp, { loading }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGN_UP);
  const navigate = useNavigate();


  const submit = async () => {
    try {
      await signUp({
        variables: { firstName, lastName, nickname, email, city, country, password },
      });
      toast.success(
        `Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.`
      );
      console.log(test)
      navigate(SIGN_IN_PATH);
    } catch (error) {
      toast.error(getErrorMessage(error));
      console.log(error)
    }
  };


  const openSignIn = () => navigate("/signin");
  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
        className="AuthForm"
      >
        <fieldset className="form">
          <legend className="legend"> <h1 className="rotate-2"> S'inscrire </h1> </legend>
          <label className="label">
            Prénom
            <br />
            <input
              type="text"
              required
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="John"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="label">
            Nom
            <br />
            <input
              type="text"
              required
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Doe"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="label">
            Pseudo
            <br />
            <input
              type="text"
              required
              id="Nickname"
              name="Nickname"
              value={nickname}
              placeholder="JohnDoe"
              onChange={(event) => {
                setNickname(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="label">
            Email
            <br />
            <input
              type="email"
              required
              autoComplete="email"
              id="email"
              name="email"
              placeholder="john.doe@email.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="label">
            Ville
            <br />
            <input
              type="text"
              required
              id="city"
              name="city"
              placeholder="Paris"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="label">
            Pays
            <br />
            <input
              type="text"
              required
              id="country"
              name="country"
              placeholder="France"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </label>
          <br />
          <label className="label">
            Mot de passe
            <br />
            <input
              type="password"
              required
              autoComplete="new-password"
              id="password"
              name="password"
              placeholder="*********************"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <br />


          <label className="label">
            Confirmer votre mot de passe
            <br />
            <input
              type="password"
              required
              autoComplete="new-password"
              id="password"
              name="password"
              placeholder="*********************"
              onChange={(event) => {
                if(event.target.value !== password) {
                  setConfirmedPassword(false)
                }
                else {
                  setConfirmedPassword(true)
                }
              }}
            />


            {confirmedPassword ? <></> : <p className="error"> Le mot de passe ne correspond pas</p>}
          </label>


          <div className="otherSolution">
            <h2> ou créer un compte avec </h2>
          </div>
       
          <section className="iconContainer">
            <button>
              <Facebook/>
            </button>


            <button>
              <Mail/>
            </button>


            <button>
              <Apple/>
            </button>
          </section>


          <button className="h-0 w-full"> <ArrowLinkTo  width="96px"  height="96px" fill="#3B8574" className="m-auto" /> </button>
          {/* <button className="w-content m-auto" disabled={loading || !confirmedPassword}> <ArrowLinkTo /> </button> */}
        </fieldset>
        <br />        
      </form>

      <div className="flex items-center justify-center flex-col m-4">
        <h2> Vous avez déjà un compte ? </h2>
        <Button onClickEvent={openSignIn} type="button-primary" name="Se Connecter"/>
      </div>
    </>
  );
};


export default SignUp;