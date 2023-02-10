import React, { useState, useEffect } from 'react';
import { Box, Image, Divider, Button, Flex, Heading, Text, Stack, chakra } from "@chakra-ui/react";
import TextTickerAnimation from '@/components/Animation/ticker';
import Link from 'next/link';

interface ImageModel {
  src: string;
  alt: string;
}

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const images: ImageModel[] = [
    { src: '/create.png', alt: 'Image 1' },
    { src: '/design.png', alt: 'Image 2' },
    { src: '/code.png', alt: 'Image 3' },
    { src: '/build.png', alt: 'Image 4' },
  ];

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // cleanup...
  }, [currentImage]);

  return (
    <>
      <Stack >
        <Text textAlign="center">
          <chakra.span fontSize={['1xl', '16px', '20px', 'xl', '24px']} fontWeight='thin' letterSpacing="3px" >The Future of the Web is </chakra.span>
          <chakra.span fontSize={['1xl', '1xl', '20px', 'xl', '2xl']} fontWeight='medium' letterSpacing="1px" as="u">Web 3.0, Metaverse, and Edge Computing.</chakra.span>
        </Text>
        <Text textAlign="right"
          fontSize={['16px', '16px', '20px', '1xl', '2xl']}
          // color={['red', 'orange', 'green', 'yellow', 'cyan']}
          fontWeight='light' pr="20px">
          <Link href="https://www.panaverse.co/" target="_blank"><chakra.span as="u">Panaverse DAO</chakra.span></Link> is a movement to spread these technolgies globally.
          </Text>
      </Stack>



      <Flex py='20px'
        justify={["space-between", "space-between", "space-between", "center"]}
        direction={["column-reverse", "column-reverse", "column-reverse", "row"]}>

        <Box px={[5, 5, 5, 10]}>
          <Text as='kbd'>
            <Text fontSize='2xl' fontWeight='bold' letterSpacing="1px" as="u">Getting Ready</Text>
            <Text fontSize='lg' fontWeight='thin' letterSpacing="2px"> for the Next Generation and Future of the Internet.</Text>
          </Text>

          <TextTickerAnimation />
          <Heading fontSize={['4xl', '4xl', '4xl', '4xl', '5xl']} lineHeight="1">for everyone</Heading>
          <Divider h="6" />

          <Text fontSize={['2xl', '2xl', '2xl', '2xl', '3xl']} fontWeight='thin' letterSpacing="5px">Join Now </Text>

          <Stack direction='row'>
            <Text fontSize={['1xl', '1xl', '20px', 'xl', '2xl']} fontWeight='medium' letterSpacing="1px" as="u">13 Trillion Dollar Industry</Text>
            <Text fontSize={['1xl', '1xl', '20px', 'xl', '2xl']} fontWeight='meduim' letterSpacing="3px" as="u">with 5 Billion Users!</Text>
          </Stack>
          <Divider h="6" />

          <Stack align="center">
            <Text fontSize={['xl', 'xl', '20px', '2xl', '2xl']} textAlign="center" fontWeight='bold' pt="10px" letterSpacing="2px" as='samp'>Certified Web 3.0 and Metaverse Development</Text>
          </Stack>
          <Divider h="10px" />

          <Text fontSize={['1xl', '1xl', '20px', 'xl', '2xl']} fontWeight='thin' letterSpacing="2px" >Panaverse DAO is community of Web 3 and Metaverse </Text>
          <Text fontSize={['1xl', '1xl', '20px', 'xl', '2xl']} fontWeight='thin' letterSpacing="2px" >developers, designers, trainers, startup founders and service providers.</Text>
          <Divider h="10px" />

          <Flex direction="row" justify="space-evenly">
            <Button colorScheme="orange" mt='6' >Admission Open</Button>
          </Flex>
        </Box>

        <Flex justify="center">
          <Box>
            <Image src={images[currentImage].src} alt={images[currentImage].alt} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}