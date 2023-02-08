'use client';
import Header from "@/components/Modules/Header/page";
import ImageSlider from '@/components/Templates/LandingPage/page';

import ChakraWrapper from "./chakra-wrapper";

export default function Home() {
  return (
    <ChakraWrapper>
      <Header ></Header>
      <ImageSlider></ImageSlider>

    </ChakraWrapper>
  );
}
