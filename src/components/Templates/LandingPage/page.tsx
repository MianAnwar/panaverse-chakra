import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

interface ImageModel {
  src: string;
  alt: string;
}

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const images: ImageModel[] = [
    { src: '/vercel.svg', alt: 'Image 1' },
    { src: '/thirteen.svg', alt: 'Image 2' },
    { src: '/next.svg', alt: 'Image 3' },
  ];

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <Box>
      <Image w="30" h="30" src={images[currentImage].src} alt={images[currentImage].alt} />
    </Box>
  );
}