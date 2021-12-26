import { Center, Text, Spinner, VStack } from "@chakra-ui/react";

const Loading: React.FC = () => {
  return (
    <Center w="100vw" h="100vh" bg="gray.300">
      <VStack>
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.600"
          size="xl"
        />
        <Text color="green.700" fontWeight="medium" fontSize={20}>
          Loading...
        </Text>
      </VStack>
    </Center>
  );
};

export default Loading;
