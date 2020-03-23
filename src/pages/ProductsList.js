import React from "react";
import CardContainer from "../components/CardContainer.js";

export default class ProductsList extends React.Component {
  constructor(){
    super();
    this.state= {
      products: [{
          id: 1,
          name: "Pelota",
          photo: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
          code: "1",
          initialPrice: "$2",
          sellingPrice: "$10"
        },
        { id: 2,
          name: "Raqueta",
          photo: "https://previews.123rf.com/images/colinekot/colinekot1404/colinekot140400059/27779711-ilustraci%C3%B3n-de-una-pelota-de-tenis-y-una-raqueta.jpg",
          code: "2",
          initialPrice: "$12",
          sellingPrice: "$100"
        }        
     ]
    }
  }


  render = () => {
    return (
      <>
        <CardContainer products={this.state.products} />
      </>
    )
  };
}
