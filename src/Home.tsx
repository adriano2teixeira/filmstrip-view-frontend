import { useState } from "react";
import Header from "./components/Header";
import Template from "./components/Template";
import Thumbnails from "./components/Thumbnails";
import MainContainer from "./components/MainContainer";
import useTemplateContext from "./hooks/useTemplateContext";

const Home_Page = () => {
  const { data, isLoading } = useTemplateContext();

  return (
    <>
      <Header title="Filmstrip View" />
      <MainContainer>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <>
            <Template />
            <Thumbnails />
          </>
        )}
      </MainContainer>
    </>
  );
};

export default Home_Page;
