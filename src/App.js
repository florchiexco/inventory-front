import React from "react";
import ProductCard from "./components/ProductCard.js";

export default class App extends React.Component {
  constructor(){
    super();
    this.state= {
      product: {
        id: 1,
        name: "Pelota",
        photo: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
        code: "1",
        initialPrice: "$2",
        sellingPrice: "$10"
      }
    }
  }


  render = () => {
    return (
      <>
        <ProductCard product={this.state.product}/>
      </>
    )
  };
}
