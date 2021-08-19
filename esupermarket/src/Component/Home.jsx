import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Topnave } from './Topnave';
import '../Component/Product.css'
import { NaveBar } from './NaveBar';
// import { carouselProduct } from '../Component/Carousel';
import { ProductList } from "../Component/ProductList";
export const Home = () => {
    return (
        <React.Fragment>
            <NaveBar/>
            {/* <carouselProduct/> */}
            {/* <Topnave/> */}
            <ProductList/>
        </React.Fragment>
    );
};

