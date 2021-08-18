import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topnave } from './Topnave';
import '../Component/Product.css'
import { ProductList } from "../Component/ProductList";
export const Home = () => {
    return (
        <React.Fragment>
            <Topnave/>
            <ProductList/>
        </React.Fragment>
    );
};

