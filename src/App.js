import React from "react";
import NavDelsat from "./components/NavDelsat.js";
import ProductsList from "./pages/ProductsList.js";

export default class App extends React.Component {

  render = () => {
    return (
      <>
        <NavDelsat />
        <ProductsList />
      </>
    )
  };
}
