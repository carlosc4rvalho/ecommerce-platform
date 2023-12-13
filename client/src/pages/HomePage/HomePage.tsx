import React from "react";
import { HomeContainer, Main } from "./HomePage.style";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Header/>
      <Main/>
      <Footer/>
    </HomeContainer>
  );
}

export default HomePage;
