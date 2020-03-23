import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/NavLink';

export default class NavDelsat extends React.Component{
    // showControl = () => {
    //     if(this.props.user.role==1){
    //         return (
    //             <>
    //              <NavDropdown.Item>
                    //     <NavLink style={{ color: "black", padding: 10 }} activeStyle={{ fontWeight: "bold", color: "#5cb85c" }}> Usuarios </NavLink>
                    // </NavDropdown.Item>
                    // <NavDropdown.Item>
                    //     <NavLink style={{ color: "black", padding: 10 }} activeStyle={{ fontWeight: "bold", color: "#5cb85c" }}> Almacenes </NavLink>
                    // </NavDropdown.Item>
    //             </>
    //         )
    //     }
    // }

    // showLog = () => {
    //     if(this.props.user){
    //         return (<>
    //                     <Button onClick={this.props.logout} style={{ color: "white" }} variant="outline-warning"> Cerrar sesión</Button>
    //                 </>
    //                 )
    //     }
    //     else{
    //         return (<>
    //             <Button onClick={this.props.login} style={{ color: "white" }} variant="outline-warning">Iniciar sesión</Button>
    //         </>
    //         )
    //     }
    // }

    render(){

        return (
        <>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{color: "#33b5e5"}}>Inventario Delsat</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Lista de productos</Nav.Link>
                <NavDropdown title="Panel de control" id="dropdown-button-drop-right" drop="right">
                  <NavDropdown.Item>
                    <NavLink style={{ color: "black" }} activeStyle={{ fontWeight: "bold", color: "#5cb85c" }}> Productos </NavLink>
                  </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                <Button variant="outline-info">Buscar producto</Button>
            </Form>
            {/*this.showLog()*/}
            </Navbar>
        </>
        )
    }
}