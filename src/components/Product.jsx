import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from "@chakra-ui/react";
import React from "react";

const Product = ({product}) => {
 
  return (
    <Stack data-cy="product"  >
      <Image data-cy="product-image" src={product.imageSrc} />
      <Text data-cy="product-category">{product.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{product.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{product.title}</Heading>
      <Box data-cy="product-price">{product.price}</Box>
    </Stack>
  );
};

export default Product;
