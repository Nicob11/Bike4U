import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";
import Button from "../../component/Button/Button.jsx";
import ModalForm from "../../component/ModalForm/ModalForm.jsx";
import MyCarousel from "../../component/MyCarousel/MyCarousel.jsx";
import ProductGrid from "../../component/ProductGrid/ProductGrid.jsx";
import sections from "../../mocks/sections.js";
import carouselHomePhotos from "../../img/arrayPhotos.js";

const Home = () => {
  const { store, action } = useStore();

  const { logo } = store;

  const navigator = useNavigate();

  const handleNavigator = () => {
    navigator("/");
  };

  return (
    <>
      <div className="text-center mt-5">
        <Button
          onClick={handleNavigator}
          label={
            <FormattedMessage id="myNavbarButtomCustomizeBike"></FormattedMessage>
          }
        />
        <ModalForm />
      </div>

      <div className="container">
        <MyCarousel photos={carouselHomePhotos} />
        <ProductGrid sections={sections} />
      </div>
    </>
  );
};

export default Home;
