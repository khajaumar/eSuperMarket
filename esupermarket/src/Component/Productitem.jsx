import React from "react"
import { useDispatch } from "react-redux"
import { Row, Col, Card, Button } from "react-bootstrap"

export const Productitem= () =>{
    const dispatch = useDispatch();
    return(
        <Card className="product">
            <Row>
               
                <Col><Button onClick={()=>dispatch({
                    type: "ADD_DATA",
                    data: ["soap","Tata Namak","Surf excel","Rin ditergent"],
                })}>+
                    </Button></Col> 
                    <Col><Button onClick={()=>dispatch({
                    type: "REMOVE_PRODUCT",
                    data: [" "],
                })}>-
                    </Button></Col>
                
            </Row>
        </Card>

    )
}