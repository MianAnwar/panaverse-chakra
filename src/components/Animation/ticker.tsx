import { Box, Heading } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  { id: 1, text: "Create", hint: "Create", color: "green" },
  { id: 2, text: "Design", hint: "Design", color: "orange" },
  { id: 3, text: "Code", hintxt: "Code", color: "red" },
  { id: 4, text: "Build", hintt: "Build", color: "blue.900" }
];

export default function TextTickerAnimation() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: -50,
        transition: { duration: 1 }
      });

      setTimeout(() => {
        setIndex((index) => (index === messages.length - 1 ? 0 : index + 1));
        controls.start({
          opacity: 1,
          y: 10,
          transition: { duration: 1 }
        });
      }, 500);

    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <Box>
      <motion.div animate={controls}>
        <Heading fontSize={['5xl', '5xl', '5xl', '5xl', '7xl']} color={messages[index].color}>
          {messages[index].text}
        </Heading>
      </motion.div>
    </Box>
  );
}