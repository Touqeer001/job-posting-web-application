import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h1 style={{ color: "white" }}>Admin Home Page coming soon..</h1>
    </>
  );
};

export default Home;
