import { Text, Box, Input, Flex, Spacer, Center } from "@chakra-ui/react";
import { CartIcon } from "./Icons";

const Navbar: React.FC = () => {
  return (
    <Center w="100%" h="85px" pos="fixed" fontSize="sm" bg="green.700" top={0}>
      <Box
        color="white"
        fontSize="sm"
        w="100%"
        h="100%"
        pt={3}
        px={8}
        maxW="720px"
      >
        <Text>coffeeshop ☕ </Text>
        <Flex align="center" bottom={0}>
          <Input
            variant="filled"
            h={7}
            mt={1}
            fontSize="sm"
            mr={3}
            placeholder="Search items by name"
          />
          <Spacer />
          <Center bg="blue.800" borderRadius="5" mt={1} h={8} w={16}>
            <Flex align="center" justify="center">
              <Text fontWeight="medium">3</Text>
              <Spacer w={1} />
              <CartIcon />
            </Flex>
          </Center>
        </Flex>
      </Box>
    </Center>
  );
};

export default Navbar;
