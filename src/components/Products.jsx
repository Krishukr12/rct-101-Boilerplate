import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination"
import Product from "./Product";
const Products = () => {
  const [result,setResult]=useState([]);
  const getData=async ()=>{
    const response=await fetch("http://localhost:8080/products")
      const data=await response.json();
      setResult(data);
  };
 
  useEffect(()=>{
    getData();
 
  } ,[])
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {result.map((result)=>{
          return  <Product product={result}/>
        })}
       
        </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
