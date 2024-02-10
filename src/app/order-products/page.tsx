"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handelClick = () => {
    console.log("Button Clicked");
    router.push("/");
  };
  return (
    <div>
      OrderProduct
      <div>
        <button onClick={handelClick}>Place Order</button>
      </div>
    </div>
  );
};

export default OrderProduct;
