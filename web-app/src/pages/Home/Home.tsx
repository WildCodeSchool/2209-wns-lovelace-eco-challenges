import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardRow } from "./Home.styled";
import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader";
import { SectionTitle } from "../../styles/base-styles";
import { CREATE_WILDER_PATH } from "../paths";
import { fetchWilders } from "./rest";
import { WilderType } from "../../types";
import { getErrorMessage } from "../../utils";
import { useQuery, gql } from "@apollo/client";

const GET_WILDERS = gql`
  query GetWilders {
    wilders {
      id
      firstName
      lastName
      skills {
        id
        skillName
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error, refetch } = useQuery(GET_WILDERS);

  const renderMainContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return error.message;
    }
    if (!data.wilders?.length) {
      return "Aucun wilder à afficher.";
    }
    return (
      <CardRow>
        {data.wilders.map((wilder: WilderType) => (
          <Wilder
            key={wilder.id}
            id={wilder.id}
            firstName={wilder.firstName}
            lastName={wilder.lastName}
            skills={wilder.skills}
            onDelete={refetch}
          />
        ))}
      </CardRow>
    );
  };

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
      <Link to={CREATE_WILDER_PATH}>Ajouter un nouveau Wilder</Link>
      <br />
      <br />
      {renderMainContent()}
    </>
  );
};

export default Home;
