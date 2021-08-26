import React, {useState, useEffect} from 'react';
import { Nav, Form, FormControl, Button, NavDropdown, Navbar } from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

import { useSelector } from "react-redux";

export const NaveBar = ({setSearchTxt}) => {
    const products = useSelector((state) => state.productReducer.product);
    const [prods, setProds] = useState([]);
    useEffect(()=>{
    setProds([...products]);
    },[products]);
    const catArr=[];
    {prods.map((item)=>(catArr.push(item.category)))};
    const newArr=[...new Set(catArr)];
    return (
        <div>
            <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#"><h3>U.K. SuperMarket</h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Products</Nav.Link>
      <NavDropdown title="Category" id="navbarScrollingDropdown">
      {newArr.map((item)=>(
        <NavDropdown.Item href="#action3">{item}</NavDropdown.Item>
      ))}
      </NavDropdown>
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=> setSearchTxt(e.target.value)}
        
      />
      <Button variant="dark"><SearchIcon/></Button>
    </Form>
  </Navbar.Collapse>
  <Nav.Link>
  Cart<AddShoppingCartIcon /> <sup>{products.length}</sup> {" "}
  </Nav.Link>
  <Nav.Link>
  Login<PersonIcon/>
  </Nav.Link>
</Navbar>
            
        </div>
    );
};



{/* <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}