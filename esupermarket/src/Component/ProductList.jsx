import React, {useState}  from "react"
import { Card, Row, Col } from "react-bootstrap"
import { Productitem } from "./Productitem"
import { useSelector } from "react-redux"

export const ProductList=()=>{
    const myProducts = useSelector((state)=> state.productReducer.product);
    const [prod, setProd] = useState([...myProducts]);
    return(
        <div>
        <Card className="productlist">
        <Row>
            <Col><Productitem/></Col>
            <Col><Productitem/></Col>
            <Col><Productitem/></Col>
        </Row>
        </Card>
        </div>
    )
}