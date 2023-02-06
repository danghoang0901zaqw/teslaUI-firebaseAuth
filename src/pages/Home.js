import { useState } from "react";
import Header from "~/components/Header";
import HeaderBlock from "~/components/HeaderBlock";
import Menu from "~/components/Menu";

const Home = ({isMenuOpened, setIsMenuOpened}) => {
  return (
    <div>
      <Header isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      {isMenuOpened && <Menu />}
      <HeaderBlock />
     
    </div>
  );
};

export default Home;
