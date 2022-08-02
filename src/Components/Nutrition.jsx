import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {
  Box,
  VStack,
  Button,
  Text,
  HStack,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import millify from 'millify';
import { AiOutlineRight } from 'react-icons/ai';

const Nutrition = e => {
  const [target, setTarget] = useState(2500);
  return (
    <Box w="320px">
      <HStack ml="80px">
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
          // rounded
          startAngle={0}
          viewBoxSize={['60px', '60px']}
        />
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
          <IconButton
            ml={3}
            bg="#101317"
            h="90px"
            fontSize="22px"
            icon={<AiOutlineRight />}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Nutrition;
