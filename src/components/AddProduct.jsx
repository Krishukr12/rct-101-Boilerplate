import { Button, Input, Modal, ModalBody, Radio, RadioGroup, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal
       initialFocusRef={initialRef}
       finalFocusRef={finalRef}
       isOpen={isOpen}
       onClose={onClose}
      >
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" placeholder="Enter Product Title"/>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Enter Amount"/>
          <Button data-cy="add-product-submit-button">Add Product</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
