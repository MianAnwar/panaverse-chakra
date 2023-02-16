import {
  Accordion, Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  chakra, Link,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { GeneralQuaters, Web3MetaSpecializationQuaters } from '../../../constants/constants';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';

export default function ProgramDetailPage({ programTitle }: { programTitle: string }) {
  return (
    <>
      <Accordion mx="10px" defaultIndex={[0]} allowMultiple>
        <Heading fontSize="3xl" textAlign="center">{programTitle} Core</Heading>

        {GeneralQuaters.map(quater => {
          return <AccordionItem key={quater.quaterNo} mb="60px" mt="30px">
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Text fontSize="20px" fontWeight="bold">{quater.quaterNo} - {quater.quaterName}</Text>
                <Text>Duration: <chakra.text fontWeight="bold"> {quater.quaterDuration}</chakra.text></Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text my="10px">{quater.courseDescription}</Text>
              <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        <Heading fontSize="3xl" textAlign="center">Outline</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {quater.courseOutline.map((outline, index) => {
                        return <Box key={index} my="5px" ml="10px">
                          <Text fontSize="2xl" fontWeight="bold">{outline.sr}. {outline.mainTitle}</Text>

                          {outline.links.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Links:</Text>}
                          {outline.links.map((link, index) => {
                            return <Text ml="10px" color="blue.600" key={index}><ArrowForwardIcon /> <Link href={link.link} >{link.title}</Link></Text>
                          })}

                          {outline?.messages.length > 0 && <Text as="u" fontSize="small" fontWeight="medium">TODOs:</Text>}
                          {outline.messages.map((message, index) => {
                            return <Text ml="10px" key={index}>{message}</Text>
                          })}

                          {outline.topicsCovered.length > 0 && <Text as="u" fontSize="medium" fontWeight="medium">Topics Covered:</Text>}
                          {outline.topicsCovered.map((topic, index) => {
                            return <Box key={index} ml="10px">
                              {index != 0 && topic.note == "project" && <Divider my="10px" />}
                              {topic.link != "" && <Text><SunIcon /> <Link color="blue.600" href={topic.link}>{topic.topic}</Link></Text>}
                              {topic.link == "" && topic.note == "" && <Text><SunIcon />.. {topic.topic}</Text>}
                              {topic.link == "" && topic.note != "" && <Text>{topic.topic}</Text>}
                              {topic.note != "" && topic.note != "project" && <chakra.text fontSize="small">{topic.note}</chakra.text>}
                            </Box>
                          })}
                        </Box>
                      })}

                    </AccordionPanel>
                  </AccordionItem>

                  {(quater.quaterBreakTasks.assignments.length > 0 || quater.quaterBreakTasks.quizzes.length > 0) &&
                    <AccordionItem>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          <Heading fontSize="3xl" textAlign="center">{quater.quaterBreakTasks.message}</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {quater.quaterBreakTasks.studyMaterialLinks.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Study Material Link:</Text>}
                        {quater.quaterBreakTasks.studyMaterialLinks.map((link, index) => {
                          return <Text ml="10px" color="blue.600" key={index}><Link href={link} >{link}</Link></Text>
                        })}

                        {quater.quaterBreakTasks.assignments && <Text as="u" fontSize="small" fontWeight="medium" >Assignemts:</Text>}
                        {quater.quaterBreakTasks.assignments.map((assignment, index) => {
                          return <Box key={index} ml="10px">
                            {assignment.link != "" && <Text>{index + 1}. <Link color="blue.600" href={assignment.link}>{assignment.title}</Link></Text>}
                            {assignment.link == "" && <Text>{index + 1}. {assignment.title}</Text>}
                            {assignment.subtitle != "" && <chakra.text fontSize="small">{assignment.subtitle}</chakra.text>}
                          </Box>
                        })}


                        {quater.quaterBreakTasks.quizzes.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Quizzes:</Text>}
                        {quater.quaterBreakTasks.quizzes.map((quiz, index) => {
                          return <Box key={index} ml="10px" mb="10px">
                            <Text fontWeight="bold">{quiz.title}</Text>
                            <Text>Total Questions: {quiz.marking.totalQuestions}</Text>
                            <Text>Total Time: {quiz.marking.totalTime}</Text>
                            {quiz.studyLinks.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Study Links:</Text>}
                            {quiz.studyLinks.map((link, index) => {
                              return <Box key={index} ml="10px">
                                {link.link != "" && <Text>{index + 1}. <Link color="blue.600" href={link.link}>{link.title}</Link></Text>}
                                {link.link == "" && <Text>{index + 1}. {link.title}</Text>}
                              </Box>
                            })}
                          </Box>
                        })}
                      </AccordionPanel>
                    </AccordionItem>
                  }
                </Accordion>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        })}

        <Heading fontSize="3xl" textAlign="center">{programTitle} Specialization</Heading>
        {Web3MetaSpecializationQuaters.map(quater => {
          return <AccordionItem key={quater.quaterNo} mb="60px" mt="30px">
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Text fontSize="20px" fontWeight="bold">{quater.quaterNo} - {quater.quaterName}</Text>
                <Text>Duration: <chakra.text fontWeight="bold"> {quater.quaterDuration}</chakra.text></Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text my="10px">{quater.courseDescription}</Text>
              <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        <Heading fontSize="3xl" textAlign="center">Outline</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {quater.courseOutline.map((outline, index) => {
                        return <Box key={index} my="5px" ml="10px">
                          <Text fontSize="2xl" fontWeight="bold">{outline.sr}. {outline.mainTitle}</Text>

                          {outline.links.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Links:</Text>}
                          {outline.links.map((link, index) => {
                            return <Text ml="10px" color="blue.600" key={index}><ArrowForwardIcon /> <Link href={link.link} >{link.title}</Link></Text>
                          })}

                          {outline?.messages.length > 0 && <Text as="u" fontSize="small" fontWeight="medium">TODOs:</Text>}
                          {outline.messages.map((message, index) => {
                            return <Text ml="10px" key={index}>{message}</Text>
                          })}

                          {outline.topicsCovered.length > 0 && <Text as="u" fontSize="medium" fontWeight="medium">Topics Covered:</Text>}
                          {outline.topicsCovered.map((topic, index) => {
                            return <Box key={index} ml="10px">
                              {index != 0 && topic.note == "project" && <Divider my="10px" />}
                              {topic.link != "" && <Text><SunIcon /> <Link color="blue.600" href={topic.link}>{topic.topic}</Link></Text>}
                              {topic.link == "" && topic.note == "" && <Text><SunIcon /> {topic.topic}</Text>}
                              {topic.link == "" && topic.note != "" && <Text>{topic.topic}</Text>}
                              {topic.note != "" && topic.note != "project" && <chakra.text fontSize="small">{topic.note}</chakra.text>}
                            </Box>
                          })}
                        </Box>
                      })}

                    </AccordionPanel>
                  </AccordionItem>

                  {(quater.quaterBreakTasks.assignments.length > 0 || quater.quaterBreakTasks.quizzes.length > 0) &&
                    <AccordionItem>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          <Heading fontSize="3xl" textAlign="center">{quater.quaterBreakTasks.message}</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {quater.quaterBreakTasks.studyMaterialLinks.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Study Material Link:</Text>}
                        {quater.quaterBreakTasks.studyMaterialLinks.map((link, index) => {
                          return <Text ml="10px" color="blue.600" key={index}><Link href={link} >{link}</Link></Text>
                        })}

                        {quater.quaterBreakTasks.assignments && <Text as="u" fontSize="small" fontWeight="medium" >Assignemts:</Text>}
                        {quater.quaterBreakTasks.assignments.map((assignment, index) => {
                          return <Box key={index} ml="10px">
                            {assignment.link != "" && <Text>{index + 1}. <Link color="blue.600" href={assignment.link}>{assignment.title}</Link></Text>}
                            {assignment.link == "" && <Text>{index + 1}. {assignment.title}</Text>}
                            {assignment.subtitle != "" && <chakra.text fontSize="small">{assignment.subtitle}</chakra.text>}
                          </Box>
                        })}


                        {quater.quaterBreakTasks.quizzes.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Quizzes:</Text>}
                        {quater.quaterBreakTasks.quizzes.map((quiz, index) => {
                          return <Box key={index} ml="10px" mb="10px">
                            <Text fontWeight="bold">{quiz.title}</Text>
                            <Text>Total Questions: {quiz.marking.totalQuestions}</Text>
                            <Text>Total Time: {quiz.marking.totalTime}</Text>
                            {quiz.studyLinks.length > 0 && <Text as="u" fontSize="small" fontWeight="medium" >Study Links:</Text>}
                            {quiz.studyLinks.map((link, index) => {
                              return <Box key={index} ml="10px">
                                {link.link != "" && <Text>{index + 1}. <Link color="blue.600" href={link.link}>{link.title}</Link></Text>}
                                {link.link == "" && <Text>{index + 1}. {link.title}</Text>}
                              </Box>
                            })}
                          </Box>
                        })}
                      </AccordionPanel>
                    </AccordionItem>
                  }
                </Accordion>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        })}

      </Accordion>
    </>
  );
}