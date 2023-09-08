import Head from "next/head";
import ProductsByCategory from "@/src/components/Products/ProductByCategory/ProductsByCategory";

import categoriesMetas from "../../src/assets/categoriesMetas.json";

const productList = ({ categoryId, categoryData }) => {
  return (
    <>
      <Head>
        <title>{categoryData.name}</title>
        <meta name="description" content={categoryData.description} />
      </Head>
      <ProductsByCategory categoryId={categoryId} />
    </>
  );
};

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId;

  return {
    props: {
      categoryId: categoryId,
      categoryData: categoriesMetas[categoryId],
    },
  };
}

export async function getStaticPaths() {
  const categories = Object.keys(categoriesMetas).map((category) => {
    return {
      params: {
        categoryId: category,
      },
    };
  });

  return {
    paths: categories,
    fallback: false,
  };
}

export default productList;
