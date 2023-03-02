import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../Shared/Loader/Loader";
import { SignInMutation, SignInMutationVariables } from "../../../gql/graphql";
import { getErrorMessage } from "../../../utils";
import { HOME_PATH } from "../../paths";
import Button from "../../../Shared/Buttons/Button";
import ArrowLinkTo from "../../../assets/logos/ArrowLinkTo";


const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [signIn, { loading }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN);
  const navigate = useNavigate();


  const submit = async () => {
    try {
      await signIn({
        variables: { email, password },
      });
      toast.success(`Vous vous êtes connecté avec succès.`);
      /* navigate(HOME_PATH); */
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };


  const openSignUp = () => navigate("/signup");
  return (
    <>
      {/* <SectionTitle>Connexion</SectionTitle> */}
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
            Adresse email
            <br />
            <input
              type="email"
              required
              autoComplete="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
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
              autoComplete="current-password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <br />
          <div className=" inline-block text-center w-full m-auto">
            <input type="checkbox"/> Restez connecté
          </div>


          <button className="h-0 w-full"> <ArrowLinkTo  width="96px"  height="96px" fill="#3B8574" className="m-auto" /> </button>
        </fieldset>
      </form>

      <div className="flex items-center justify-center flex-col">          
        <h2> Pas encore inscrit ?</h2>
        <Button onClickEvent={openSignUp} type="button-primary"  name="Créer un compte"/>
      </div>

    </>
  );
};


export default SignIn;
