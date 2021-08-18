import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import { Productitem } from "./Productitem"

export const ProductList=()=>{
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