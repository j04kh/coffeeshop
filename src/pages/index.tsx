import type { NextPage } from "next";
import Navbar from "components/Navbar";
import { Center, Grid } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";

const Home: NextPage = () => {
  return (
    <Center bg="gray.300" w="100%" h="100%" minH="100vh">
      <Navbar />
      <Center w="100%" pt="120px" pb="20px" h="100%" minH="100vh" maxW="720px">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
          <ProductCard title="Capuccino" id="1" price="12" />
        </Grid>
      </Center>
    </Center>
  );
};

export default Home;
