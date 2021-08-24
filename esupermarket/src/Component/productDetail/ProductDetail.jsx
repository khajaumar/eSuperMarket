import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import {link} from "react-router-dom";


export const ProductDetail = () => {
    const [selectproduct, setSelectproduct] = useState([]);
    const myProducts = useSelector((state)=> state.productReducer.product);
    const selectedId = useSelector((state)=> state.productReducer.selectedid[0]);
    useEffect(()=>{
        console.log(selectedId);
        const filteredProd = myProducts.filter((item) => item.id === selectedId);
        setSelectproduct([...filteredProd]);
        console.log("my product selected====>", filteredProd);
    },[selectedId]);
    return (
        <div>
            <Row>
                <Col md={4}><Card><h5>Images</h5> </Card> </Col>
                <Col md={8}><Card><h5>Description</h5></Card></Col>
            </Row>
        </div>
    );
};
