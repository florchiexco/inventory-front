import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default class ProductCard extends React.Component {

  render() {
    const defaultUrl =
      "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png";

    const { product } = this.props;
    return (
      <>
        <Row>
          <Col sm-3="true">
            <Card
              border="dark"  
              style={{ width: "18rem", marginBottom: 15 }}
              className="bg-light text-dark myImageDefault"
            >
              <Card.Header as="h5"> ID: {product.id} - {product.name}</Card.Header>

              <Card.Img
                onerror={(product.photo = undefined)}
                src={product.photo ? product.photo : defaultUrl}
                style={{ width: "100%" }}
                alt={product.name}
              />
              <Card.Text>
                <h5>Código:</h5> {product.code}
                <h5>Precio inicial:</h5> {product.initialPrice}
                <h5>Precio de venta:</h5> {product.sellingPrice}
              </Card.Text>
              <ButtonGroup size="sm">
                <Button variant="success">Añadir stock</Button>
                <Button variant="danger">Eliminar stock</Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
