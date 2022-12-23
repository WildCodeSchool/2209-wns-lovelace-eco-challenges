import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./signUp.scss"
import Loader from "../../components/Loader";
import { getErrorMessage } from "../../utils";
import { SIGN_IN_PATH } from "../paths";
import { SignUpMutation, SignUpMutationVariables } from "../../gql/graphql";
import Facebook from "../../assets/Facebook";
import Mail from "../../assets/Mail";
import Apple from "../../assets/Apple";
import { ArrowLinkTo } from "../../assets/ArrowContinue";

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
  const [nickname, setNickName] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
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
        variables: { firstName, lastName, nickname, email, city, country, password } 
      });
      toast.success(
        `Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.`
      );
      navigate(SIGN_IN_PATH);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        <fieldset className="form">
          <legend className="legend"> <h1 className="rotate-2"> S'inscrire </h1> </legend>
          <label>
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
          <label>
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
          <label>
            Pseudo
            <br />
            <input
              type="text"
              required
              id="nickname"
              name="nickname"
              value={nickname}
              placeholder="Doe"
              onChange={(event) => {
                setNickName(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Ville
            <br />
            <input
              type="text"
              required
              id="city"
              name="city"
              placeholder="Doe"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Pays
            <br />
            <input
              type="text"
              required
              id="country"
              name="country"
              placeholder="Doe"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            email
            <br />
            <input
              type="email"
              required
              autoComplete="email"
              id="email"
              name="email"
              placeholder="john.doe@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
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

          <label>
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

          <button className="w-content m-auto" disabled={loading || !confirmedPassword}> {loading ? <Loader/> : <ArrowLinkTo /> } </button>
        </fieldset>
        <br />        
      </form>
      <h2> Vous avez déjà un compte ? </h2>
      <button className="button-cta m-auto"> Se connecter </button>
    </>
  );
};

export default SignUp;
