import { Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const EmptyCart: React.FC = () => {
  return (
    <Center w="100vw" h="100vh">
      <VStack gap={5}>
        <Text fontWeight="semibold">Your cart is empty 😕🍹 </Text>
        <Link href="/">
          <a>
            <Center
              bg="green.600"
              color="white"
              fontWeight="semibold"
              px={6}
              py={2}
              borderRadius={20}
            >
              ORDER NOW
            </Center>
          </a>
        </Link>
      </VStack>
    </Center>
  );
};

export default EmptyCart;
