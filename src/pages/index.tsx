import { useState } from "react";
import Navbar from "../components/Home/Navbar";
import { GetStaticProps } from "next";
import { Center, Grid, Divider, VStack, Select, Text } from "@chakra-ui/react";
import ProductCard from "../components/Home/ProductCard";
import api from "./api";
import { useSelector } from "react-redux";
import { selectItemsQuantity, selectItemsQtyById } from "redux/cartSlice";
import Category from "../components/Home/Category";
import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/color-mode";

import type { Product } from "types/Product";

interface Props {
  products: Product[];
}

enum SortType {
  NAME = "NAME",
  PRICE = "PRICE",
}

const Home: React.FC<Props> = ({ products }) => {
  const [category, setCategory] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortType>(SortType.NAME);
  const itemsQty = useSelector(selectItemsQuantity);
  const qtyById = useSelector(selectItemsQtyById);

  const categories = ["hotDrink", "bakery", "sandwiches"];

  const sortProducts = () => {
    let result = [...products];

    if (sort === SortType.NAME) {
      result.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    }
    if (sort === SortType.PRICE) {
      result.sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
    }
    return result;
  };

  const filterProducts = () => {
    let result = [...sortedProducts];
    return result.filter(
      (prod) =>
        prod.name.toLocaleLowerCase().includes(search) &&
        prod.category === categories[category]
    );
  };

  const sortedProducts = sortProducts();

  const filteredProducts = filterProducts();

  const bg = useColorModeValue("gray.300", "blackAlpha.300");
  const border = useColorModeValue("gray.600", "gray.300");

  return (
    <Center bg={bg} w="100%" h="100%" minH="100vh">
      <Head>
        <title>Coffeeshop - Home</title>
        <meta name="description" content="Homepage of Coffeeshop" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar itemsQty={itemsQty} setSearch={setSearch} />
      <Center w="100%" pt="95px" pb="20px" h="100%" minH="100vh" maxW="530px">
        <VStack gap={0} width="100%" minW="100%" minH="100vh" px={8}>
          <Category category={category} setCategory={setCategory} />
          <Divider borderColor={border} />
          <Select
            variant="flushed"
            width="40%"
            alignSelf="end"
            size="xs"
            borderColor="gray.600"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortType)}
          >
            <option value={SortType.NAME}>Alphabetically</option>
            <option value={SortType.PRICE}>Price (Low to High)</option>
          </Select>
          {filteredProducts.length > 0 ? (
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={3}
              pt={1}
            >
              {filteredProducts.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price.toString()}
                    picture={product.picture}
                    quantity={qtyById[product.id]}
                  />
                );
              })}
            </Grid>
          ) : (
            <Center h="400px" w="100%">
              <Text fontSize="lg" align="center">
                No products were found matching your search, try with another
                one!
              </Text>
            </Center>
          )}
        </VStack>
      </Center>
    </Center>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.products.list();

  return {
    props: { products },
  };
};
