import Checkout from "@/src/components/Checkout/Checkout";

const CheckoutPage = () => {
  return <Checkout />;
};

export async function getStaticProps(context) {
  return { props: {} };
}

export default CheckoutPage;
