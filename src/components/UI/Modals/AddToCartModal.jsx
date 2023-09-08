import React from "react";
import { createPortal } from "react-dom";

//Components
import Backdrop from "./Backdrop";
import Card from "../Card";
import Button from "../Button";

// Styles
import classes from "./AddToCartModal.module.css";

const ModalOverlay = (props) => {
  const productInfo = props.productInfo;
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Product added to cart</h2>
      </header>
      <div className={classes.content}>
        <table className={classes.table}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>
              <img
                src={productInfo.url}
                alt={productInfo.name}
                className={classes["content-image"]}
              />
            </td>
            <td>{productInfo.name}</td>
            <td>{productInfo.price * (1 - productInfo.discount)}</td>
            <td>x1</td>
          </tr>
        </table>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm} className={classes.actionButton}>
          Continue
        </Button>
      </footer>
    </Card>
  );
};

const AddToCartModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          productInfo={props.productInfo}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddToCartModal;
