import { Text, Box, Input, Flex, Spacer, Center } from "@chakra-ui/react";
import { CartIcon } from "../Icons";
import Link from "next/link";
import React from "react";

interface Props {
  itemsQty: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<Props> = ({ itemsQty, search, setSearch }) => {
  return (
    <Center
      w="100%"
      h="85px"
      pos="fixed"
      zIndex={20}
      fontSize="sm"
      bg="green.700"
      top={0}
    >
      <Box
        color="white"
        fontSize="sm"
        w="100%"
        h="100%"
        pt={3}
        px={8}
        maxW="530px"
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <Spacer />
          <Link href="/cart">
            <a>
              <Center bg="blue.800" borderRadius="5" mt={1} h={8} w={16}>
                <Flex align="center" justify="center">
                  <Text fontWeight="medium">{itemsQty}</Text>
                  <Spacer w={1} />
                  <CartIcon />
                </Flex>
              </Center>
            </a>
          </Link>
        </Flex>
      </Box>
    </Center>
  );
};

export default Navbar;
