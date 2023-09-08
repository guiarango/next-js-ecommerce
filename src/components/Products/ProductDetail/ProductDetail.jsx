import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//Components
import Button from "../../UI/Button";
import Loader from "../../UI/Loader";
import AddToCartModal from "../../UI/Modals/AddToCartModal";

//Styles
import classes from "./ProductDetail.module.css";

//Services
import { returnProductById } from "../../../services/Products";

//Store
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../store/actions/cartActions";

const ProductDetail = ({ productId }) => {
  const navigate = useRouter();

  const dispatchAction = useDispatch();

  const [activeAddToCartModal, setActiveAddToCartModal] = useState(null);
  const [productDetail, setProductDetail] = useState(null);

  const returnProductsByCategory = async (productId) => {
    const productDetail = await returnProductById(productId);
    if (productDetail == null) {
      navigate.push("/error404");
    }
    setProductDetail((prev) => productDetail);
  };

  useEffect(() => {
    returnProductsByCategory(productId);
  }, [productId]);

  const loader = (
    <div className={classes.loaderSpinner}>
      <Loader />
    </div>
  );

  const priceChanged = (
    <div className={classes.price}>
      <p className={classes.oldPrice}>${productDetail?.price}</p>
      <p className={classes.newPrice}>
        ${productDetail?.price * (1 - productDetail?.discount)}
      </p>
    </div>
  );

  const addToCart = (event) => {
    event.preventDefault();
    dispatchAction(addProductToCart(productDetail));
    setActiveAddToCartModal(productDetail);
  };

  const closeAddToCartModal = () => {
    setActiveAddToCartModal(null);
  };

  const productLayout = (
    <>
      {activeAddToCartModal && (
        <AddToCartModal
          productInfo={productDetail}
          onConfirm={closeAddToCartModal}
        />
      )}

      <div className={classes.productDetailContainer}>
        <div className={classes.productDetail}>
          <img src={productDetail?.url} className={classes.productImage} />
          <div className={classes.productData}>
            <h1>{productDetail?.name}</h1>
            {productDetail?.discount == 0 ? (
              <p className={classes.price}>${productDetail?.price}</p>
            ) : (
              priceChanged
            )}

            <p className={classes.productDescription}>
              {productDetail?.description}
            </p>

            <p className={classes.productBrand}>
              Sold by {productDetail?.brand}
            </p>

            <Button className={classes.addToCart} onClick={addToCart}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return <>{productDetail == null ? loader : productLayout}</>;
};

export default ProductDetail;
