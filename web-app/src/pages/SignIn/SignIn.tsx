import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Loader from "../../Shared/Loader/Loader";
import { SignInMutation, SignInMutationVariables } from "../../gql/graphql";
import { getErrorMessage } from "../../utils";
// import { HOME_PATH } from "../paths";

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

  return (
    <>
      {/* <SectionTitle>Connexion</SectionTitle> */}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}

        className=""
      >
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
        <button> Valider </button>
        {/* <button disabled={loading}>{loading ? <Loader /> : "Valider"}</button> */}
      </form>
    </>
  );
};

export default SignIn;