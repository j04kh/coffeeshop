import { Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import CheckedOut from "./CheckedOut";

interface Props {
  checkedOut: boolean;
}

const EmptyCart: React.FC<Props> = ({ checkedOut }) => {
  return (
    <Center w="100vw" h="100vh">
      <VStack gap={5} width="100%" maxW="500px">
        {checkedOut ? (
          <CheckedOut />
        ) : (
          <Text fontWeight="semibold">Your cart is empty 😕🍹 </Text>
        )}
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
              {checkedOut ? "NEW ORDER" : "ORDER NOW"}
            </Center>
          </a>
        </Link>
      </VStack>
    </Center>
  );
};

export default EmptyCart;
