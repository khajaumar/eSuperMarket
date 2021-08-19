import React from "react"
import { useDispatch } from "react-redux"
import { Row, Col, Card, Button } from "react-bootstrap"

export const Productitem= () =>{
    const dispatch = useDispatch();
    return(
        <Card className="product" >
            <Row>
            
  <Card.Img variant="top" src="lap.jpg" />
  <Card.Body>
    <Card.Title>Electronics</Card.Title>
    <Card.Text>
    We offer you to buy a laptop on black background, modern technology, with 20% Discount and 5years warrenty.
    </Card.Text>
  </Card.Body>

            
               
                <Col><Button variant="dark" onClick={()=>dispatch({
                    type: "ADD_DATA",
                    data: ["soap","Tata Namak","Surf excel","Rin ditergent"],
                })}>+
                    </Button></Col> 
                    <Col><Button variant="dark" onClick={()=>dispatch({
                    type: "REMOVE_PRODUCT",
                    data: [" "],
                })}>-
                    </Button></Col>
                
            </Row>
        </Card>

    )
}