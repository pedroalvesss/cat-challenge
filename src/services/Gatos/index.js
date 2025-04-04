"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GatosCarrossel = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.error("Erro ao buscar imagens:", error));
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-5">
      <Carousel>
        <CarouselContent>
          {cats.map((cat, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <img
                src={cat.url}
                alt={`Gato ${index + 1}`}
                className="rounded-lg shadow-xl w-full size-fit object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GatosCarrossel;
