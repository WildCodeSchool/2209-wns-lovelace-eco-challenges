import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Apple from "../../assets/Apple";
import { ArrowLinkTo } from "../../assets/ArrowContinue";
import Facebook from "../../assets/Facebook";
import Mail from "../../assets/Mail";
import Loader from "../../components/Loader";
import { SignInMutation, SignInMutationVariables } from "../../gql/graphql";
import Button from "../../Shared/Buttons/Button";
import { getErrorMessage } from "../../utils";
import { HOME_PATH } from "../paths";

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
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

const SignIn = (/* { onSuccess }: { onSuccess: () => {} } */) => {
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
      /* onSuccess(); */
      navigate(HOME_PATH);
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
          <legend className="legend"> <h1 className="rotate-2"> Se connecter </h1> </legend>
          <label>
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
          <label>
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
          <label className="flex">
            <input type="checkbox"/>
            restez connecé
          </label>
          <button className="w-full" disabled={loading}> {loading ? <Loader/> : <ArrowLinkTo /> } </button>

        </fieldset>

        <h2> Pas encore inscrit </h2>
        <Button action={() => {
          navigate("/sign-up")
        }} type="button-primary" name="Créer un compte"/>
      </form>
    </>
  );
};

export default SignIn;
