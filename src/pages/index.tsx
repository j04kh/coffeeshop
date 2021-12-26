import type { NextPage } from "next";
import Navbar from "components/Navbar";
import { Center, Text } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";

const Home: NextPage = () => {
  return (
    <Center bg="gray.300" w="100%" h="100%" minH="100vh">
      <Navbar />
      <Center w="100%" h="100%" minH="100vh" maxW="720px">
        <ProductCard title="Capuccino" id="1" price="12" />
      </Center>
    </Center>
  );
};

export default Home;
