import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import { ProductList } from './ProductList';

export const Topnave = () => {
    const products = useSelector((state)=> state.productReducer.product);
    return (
        <div>
            <Card className="cart">
                <Row>
                    <Col md={9}></Col>
                    <Col md={3}><h1>Cart: {products.length}</h1></Col>
                </Row>
            </Card>
        </div>
    );
};

