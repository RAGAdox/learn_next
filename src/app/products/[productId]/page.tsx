import { Metadata } from "next";

type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: ProductDetailsProps): Metadata => {
  return {
    title: `Product ${params.productId}`,
    
  };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <h1>Product Details {params.productId}</h1>;
};

export default ProductDetails;
