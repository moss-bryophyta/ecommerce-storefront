"use client";

import { T } from "gt-next";
import { useState } from "react";

export default function AddToCartButton({
  productId,
  disabled,
}: {
  productId: string;
  disabled: boolean;
}) {
  const [added, setAdded] = useState(false);

  return (
    <button
      disabled={disabled}
      onClick={() => {
        // In a real app, this would call an API
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      }}
      className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
        disabled
          ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
          : added
          ? "bg-green-900 text-green-200"
          : "bg-white text-neutral-950 hover:bg-neutral-200"
      }`}
    >
      {disabled ? (
        <T>Unavailable</T>
      ) : added ? (
        <T>Added to cart</T>
      ) : (
        <T>Add to cart</T>
      )}
    </button>
  );
}
