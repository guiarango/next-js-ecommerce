import ProductDetail from "@/src/components/Products/ProductDetail/ProductDetail";
import { returnAllItems } from "@/src/services/Products";

const ProductPage = ({ productId }) => {
  return <ProductDetail productId={productId} />;
};

export async function getStaticProps(context) {
  const productId = context.params.productId;
  return { props: { productId: productId } };
}

export async function getStaticPaths() {
  const allItems = await returnAllItems();
  const allPaths = allItems.map((item) => {
    return { params: { productId: item.id } };
  });

  return { paths: allPaths, fallback: false };
}

export default ProductPage;
