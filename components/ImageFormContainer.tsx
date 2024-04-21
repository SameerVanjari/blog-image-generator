"use client";
import React, { useState } from "react";
import InputForm from "./InputForm";

type Image = {
  url: string;
};

const ImageFormContainer = () => {
  const [images, setImages] = useState<Image[] | null>(null);

  if (!images) {
    return <InputForm setImages={setImages} />;
  }
  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {images?.map((item) => (
        <div key={item.url} className="h-[400px] rounded-md">
          <img
            src={item.url}
            className="w-full h-full object-cover object-center rounded-md"
            alt="generated image"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageFormContainer;
