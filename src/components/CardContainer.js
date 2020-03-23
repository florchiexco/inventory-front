import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import ProductCard from "./ProductCard.js";

export default class CardContainer extends React.Component{

    render(){
        return(
             <>
                <CardDeck style={{"paddingLeft": '10%', "paddingTop": 20, 'marginTop': '5%'}}>
                    {this.props.products && this.props.products.map((product, key)=>(
                        <ProductCard  product={ product }  key={key} />

                    ))}
                </CardDeck>
             </>
        )
    }
}