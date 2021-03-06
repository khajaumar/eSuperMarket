import React from "react"
import { useDispatch } from "react-redux"
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap"

export const Productitem= ({item}) =>{
    const dispatch = useDispatch();
    return(
        <Card className="product">
            <Row>
                <Card.Title>{item.title}</Card.Title>
            </Row>
            <Row>
                <Image
                    src={`${item.image}`}
                    width="100px"
                    height="300px"
                >

                </Image>
            </Row>
            <Row><Form.Label>{item.price}</Form.Label></Row>
            <Card>
             <Row>
                 <Col>
                     <Button variant="dark" onClick={()=>
                    dispatch({
                        type: "REMOVE_PRODUCT",
                        data: [],
                    })
                    }>-</Button>
                 </Col>
                 <Col>
                     <Button variant="dark" onClick={()=>
                    dispatch({
                        type: "ADD_DATA" ,
                        data: [],
                    })
                    }>+</Button>
                 </Col>
                 
             </Row>
             </Card>
             <Row><Button
             onClick={()=>dispatch({
                 type: "SELECTED_PROD_ID",
                 data: item.id,
             })}>Details</Button></Row>
        </Card>

    )
}