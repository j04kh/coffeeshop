import {
  Text,
  Box,
  Input,
  Flex,
  Spacer,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { CartIcon } from "../Icons";
import Link from "next/link";
import React from "react";

interface Props {
  itemsQty: number;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<Props> = ({ itemsQty, setSearch }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("green.700", "green.900");
  const btn = useColorModeValue("blue.800", "blue.900");

  return (
    <Center
      w="100%"
      h="85px"
      pos="fixed"
      zIndex={20}
      fontSize="sm"
      bg={bg}
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
            _placeholder={{ color: "gray.900" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Spacer />
          <Link href="/cart">
            <a>
              <Center bg={btn} borderRadius="5" mt={1} h={8} w={16}>
                <Flex align="center" justify="center">
                  <Text fontWeight="medium">{itemsQty}</Text>
                  <Spacer w={1} />
                  <CartIcon />
                </Flex>
              </Center>
            </a>
          </Link>
          <Spacer />
          <IconButton
            aria-label="Toggle dark mode"
            variant="ghost"
            onClick={toggleColorMode}
            icon={
              colorMode === "light" ? (
                <MoonIcon w={4} h={4} />
              ) : (
                <SunIcon w={4} h={4} />
              )
            }
            _hover={{ bg: "transparent" }}
          />
        </Flex>
      </Box>
    </Center>
  );
};

export default Navbar;
