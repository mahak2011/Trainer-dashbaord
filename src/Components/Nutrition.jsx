import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {
  Box,
  VStack,
  Button,
  Text,
  HStack,
  IconButton,
  Heading,
  Tooltip,
  Progress,
  Flex,
  Tag,
} from '@chakra-ui/react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Nutrition = e => {
  const [target, setTarget] = useState(2500);
  const NutriDetails = React.forwardRef(({ ...rest }, ref) => (
    <Box position="relative" ref={ref} {...rest}>
      <PieChart
        animate
        animationDuration={500}
        animationEasing="ease-out"
        center={[70, 75]}
        data={[
          {
            color: '#F45C84',
            title: 'Protein',
            value: e.proteinIntake,
          },
          {
            color: '#03C7FC',
            title: 'Fats',
            value: e.fatConsumed,
          },
          {
            color: '#F5C90F',
            title: 'Carbs',
            value: e.carbConsumed,
          },
        ]}
        lengthAngle={360}
        lineWidth={15}
        paddingAngle={0}
        radius={50}
        startAngle={0}
        viewBoxSize={['60px', '60px']}
      />
      <Box position="absolute" top="37%" left="42%">
        <Text fontSize="16px">{`${e.calorieIntake}`}</Text>
        <Text fontSize="10px">Calories</Text>
      </Box>
    </Box>
  ));
  return (
    <Box w="320px">
      <HStack ml="55px" mr="15px">
        <Tooltip
          w="211px"
          bg="#333B44"
          borderRadius="10px"
          hasArrow
          label={
            <Box>
              <Box
                h="55px"
                w="196px"
                bg="#1B222A"
                mb={2}
                mt={2}
                p={2}
                borderRadius="5px"
              >
                <Flex justify="space-between" mb={1}>
                  <HStack>
                    <Text>PROTEIN</Text>
                    <Tag size="sm" variant="solid" color="#F45C84" bg="#101317">
                      {e.proteinIntake}
                    </Tag>
                  </HStack>
                  <Text>{e.proteinTarget}</Text>
                </Flex>
                <Progress
                  value={e.proteinIntake}
                  max={e.proteinTarget}
                  bg="#101317"
                  colorScheme="pink"
                  borderRadius="10px"
                />
              </Box>
              <Box
                h="55px"
                w="196px"
                bg="#1B222A"
                mb={2}
                mt={2}
                p={2}
                borderRadius="5px"
              >
                <Flex justify="space-between" mb={1}>
                  <HStack>
                    <Text>FATS</Text>
                    <Tag size="sm" variant="solid" color="#03C7FC" bg="#101317">
                      {e.fatConsumed}
                    </Tag>
                  </HStack>
                  <Text>{e.fatTarget}</Text>
                </Flex>
                <Progress
                  value={e.fatConsumed}
                  max={e.fatTarget}
                  bg="#101317"
                  colorScheme="twitter"
                  borderRadius="10px"
                />
              </Box>
              <Box
                h="55px"
                w="196px"
                bg="#1B222A"
                mb={2}
                mt={2}
                p={2}
                borderRadius="5px"
              >
                <Flex justify="space-between" mb={1}>
                  <HStack>
                    <Text>CARBS</Text>
                    <Tag size="sm" variant="solid" color="#F5C90F" bg="#101317">
                      {e.carbConsumed}
                    </Tag>
                  </HStack>
                  <Text>{e.fatTarget}</Text>
                </Flex>
                <Progress
                  value={e.carbConsumed}
                  max={e.carbTarget}
                  bg="#101317"
                  colorScheme="yellow"
                  borderRadius="10px"
                />
              </Box>
            </Box>
          }
        >
          <NutriDetails />
        </Tooltip>
        <VStack>
          <Button
            bg="#101317"
            w="30px"
            h="18px"
            borderRadius="4px"
            onClick={() => {
              setTarget(target + 100);
            }}
          >
            +
          </Button>
          <Heading size="md">{millify(target)}</Heading>
          <Text fontSize="12px">target</Text>
          <Button
            bg="#101317"
            w="30px"
            h="18px"
            borderRadius="4px"
            onClick={() => {
              setTarget(target - 100);
            }}
          >
            -
          </Button>
        </VStack>
        <Box pl="3px">
          <Link to={`${e.userId}/nutrition`}>
            <IconButton
              ml={3}
              bg="#101317"
              h="90px"
              fontSize="22px"
              icon={<AiOutlineRight />}
            />
          </Link>
        </Box>
      </HStack>
    </Box>
  );
};

export default Nutrition;
