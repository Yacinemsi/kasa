import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import LogementContext from "../component-logement/LogementContext";
import Header from "../component-header/Header";
import Main from "../component-main/Main";

const PageLogement = () => {
  const { id } = useParams(); // get the id from the URL
  const logements = useContext(LogementContext); // get the logements data from context

  // Find the logement with the matching id
  const logement = logements.find((logement) => logement.id === id);

  // Render the logement details
  return (
    <div>
      <Header />
      <Main
        contenuPageLogement={logement}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
};

export default PageLogement;
