import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
// import { Topnave } from './Topnave';
import '../Component/Product.css'
import { NaveBar } from './NaveBar';
// import { CarouselProduct } from './CarouselProduct';
import { ProductList } from "../Component/ProductList";
import {getProducts} from "../service/products"


export const Home = () => {
    const [searchTxt, setSearchTxt]= useState(" ");

    const dispatch = useDispatch();

    const allProducts = async ()=>{
        const productsList = await getProducts();
        console.log(productsList)
        dispatch({
            type: "ADD_DATA",
            data: productsList,
        })
    
      }
      useEffect(()=>{
        allProducts();
      }, []);
     
      
    return (
        <React.Fragment>
            <NaveBar setSearchTxt={setSearchTxt}/>
            {/* <CarouselProduct/> */}
            {/* <Topnave/> */}
            <ProductList searchTxt={searchTxt}/>
        </React.Fragment>
    );
};

