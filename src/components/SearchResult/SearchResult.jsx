import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//Components
import ProductItem from "../Products/ProductItem/ProductItem";
import Loader from "../UI/Loader";
import OrderBy from "../Products/ProductFilters/OrderBy";

//Styles
import classes from "./SearchResult.module.css";

//Services
import { returnAllItems } from "../../services/Products";

const SearchResult = ({ queryParam }) => {
  const navigate = useRouter();
  console.log(queryParam);
  const productName = queryParam;

  const [allProductsFiltered, setAllProductsFiltered] = useState([]);

  const returnProducts = async (productName) => {
    const allProducts = await returnAllItems(productName);
    if (allProducts == null) {
      navigate.push("/error404");
    }

    const newArray = allProducts.filter((product) => {
      const name = product.name.toUpperCase();

      const upperProductName = productName.toUpperCase();

      return name.includes(upperProductName);
    });

    if (newArray.length <= 0) {
      navigate.push("/error404");
    }

    setAllProductsFiltered((prev) => newArray);
  };

  useEffect(() => {
    returnProducts(productName);
  }, [productName]);

  const loader = (
    <div className={classes.loaderSpinner}>
      <Loader />
    </div>
  );

  const handleSort = (nameOption) => {
    const arraySorted = [...allProductsFiltered];

    arraySorted.sort(function (a, b) {
      if (a[nameOption] > b[nameOption]) {
        return 1;
      }
      if (a[nameOption] < b[nameOption]) {
        return -1;
      }
      return 0;
    });

    setAllProductsFiltered((prev) => arraySorted);
  };

  return (
    <>
      {allProductsFiltered?.length <= 0 ? (
        loader
      ) : (
        <div className={classes.productListContainer}>
          <OrderBy sortItems={handleSort} />
          {allProductsFiltered.map((product) => (
            <ProductItem key={product.id} productInfo={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResult;
