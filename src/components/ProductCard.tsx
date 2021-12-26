import { Center, Circle, VStack, Text } from "@chakra-ui/react";

interface Props {
  id: string;
  title: string;
  price: string;
  picture?: string;
}

const ProductCard: React.FC<Props> = ({ id, title, price, picture }) => {
  return (
    <Center w="140px" h="210px" bg="gray.100" borderRadius="15" boxShadow="2xl">
      <VStack spacing="3px">
        <Circle w="85px" h="85px" bg="gray" />
        <Text fontSize="md" fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize="md" fontWeight="semibold">
          {`${price}$`}
        </Text>
        <Center
          bg="green.700"
          color="white"
          px={5}
          py={1}
          borderRadius={5}
          fontSize="sm"
          fontWeight="semibold"
        >
          ADD
        </Center>
      </VStack>
    </Center>
  );
};

export default ProductCard;
