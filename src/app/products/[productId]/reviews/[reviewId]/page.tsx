"use client";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const [isClient, setIsClient] = useState(false);
  let randomInt = useRef<number | null>(null);
  useEffect(() => {
    setIsClient(true);
    randomInt.current = Math.floor(Math.random() * 10);
  }, []);
  if (randomInt.current === 1) throw new Error("THIS IS A CUSTOME ERROR");
  if (parseInt(params.reviewId) > 10) return notFound();
  return (
    <div>
      <h1>ReviewDetail for product - {params.productId}</h1>
      <h3>Review - {params.reviewId}</h3>
      {isClient ? "Rendered on Client" : "Prerendered"}
      {randomInt.current !== null && <h1>Random Int -- {randomInt.current}</h1>}
    </div>
  );
};

export default ReviewDetail;
