import { Text, Box, Stack, Button, SimpleGrid, chakra, Card, CardBody, Image, Heading, Divider, Center } from "@chakra-ui/react";
import Link from 'next/link';

function ProgramCard({ courseTitle, courseDescription, imagesrc, to = "/" }: { courseTitle: string, courseDescription: string, imagesrc: string, to: string }) {
  return (
    <Link href={to}>
      <Card h="400px" overflow="hidden">
        <CardBody>
          <Center>
            <Image
              src={imagesrc}
              borderRadius='lg'
            />
          </Center>
          <Stack mt='10px' spacing='3'>
            <Heading size='md'>{courseTitle}.</Heading>
            <Text>{courseDescription.length > 100 ? courseDescription.substring(0, 100) + '...' : courseDescription}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Link>

  );
}

const courses = [
  {
    imagesrc: "/web3andmeta.png",
    courseTitle: "Web 3.0 (Blockchain) and Metaverse",
    courseDescription: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
  },
  {
    imagesrc: "/ai.png",
    courseTitle: "Artificial Intelligence (AI) and Deep Learning",
    courseDescription: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
  },
  {
    imagesrc: "/cloud.png",
    courseTitle: "Cloud-Native Computing",
    courseDescription: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
  },
  {
    imagesrc: "/amient.png",
    courseTitle: "Ambient Computing and IoT",
    courseDescription: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices."
  },
  {
    imagesrc: "/cloud.png",
    courseTitle: "Genomics and Bioinformatics",
    courseDescription: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications."
  },
  {
    imagesrc: "/network.png",
    courseTitle: "Network Programmability and Automation",
    courseDescription: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git."
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Box>
        <Stack pt="10px">
          <Text textAlign="center">
            <chakra.span fontSize={['20px', '20px', '20px', 'xl', '24px']} fontWeight='semibold' letterSpacing="3px" >Earn as you Learn</chakra.span>
          </Text>

          <Box textAlign="center"
            pr="20px">
            <Link href="https://portal.piaic.org/" target="_blank">
              <Button colorScheme="orange" m='4px' >Apply Now</Button>
            </Link>
          </Box>
        </Stack>

        <SimpleGrid
          m="11px"
          textAlign="center"
          minChildWidth={['200px', '250px', '250px', '280px', '300px']}
          spacing="10px">

          {courses.map((course, index) => {
            return <Box key={index}>
              <ProgramCard to={`/programs/${course.courseTitle}`} courseTitle={course.courseTitle} courseDescription={course.courseDescription} imagesrc={course.imagesrc} />
            </Box>;
          })}

        </SimpleGrid>

      </Box>
    </>
  );
}
