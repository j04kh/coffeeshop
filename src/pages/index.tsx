import { useState, useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import { GetStaticProps } from "next";
import { Center, Grid, Divider, VStack, Select } from "@chakra-ui/react";
import ProductCard from "../components/Home/ProductCard";
import { Product } from "types/Product";
import api from "./api";
import { useSelector } from "react-redux";
import { selectItemsQuantity, selectItemsQtyById } from "redux/cartSlice";
import Category from "../components/Home/Category";

interface Props {
  products: Product[];
}

const Home: React.FC<Props> = ({ products }) => {
  const [category, setCategory] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const itemsQty = useSelector(selectItemsQuantity);
  const qtyById = useSelector(selectItemsQtyById);

  const categories = ["hotDrink", "bakery", "sandwiches"];

  return (
    <Center bg="gray.300" w="100%" h="100%" minH="100vh">
      <Navbar itemsQty={itemsQty} search={search} setSearch={setSearch} />
      <Center w="100%" pt="95px" pb="20px" h="100%" minH="100vh" maxW="530px">
        <VStack gap={0} width="100%" minW="100%" minH="100vh" px={8}>
          <Category category={category} setCategory={setCategory} />
          <Divider borderColor="gray.600" />
          <Select
            placeholder="List options"
            variant="flushed"
            width="30%"
            alignSelf="end"
            size="xs"
            borderColor="gray.600"
          >
            <option value="alphabetically">Alphabetically</option>
            <option value="price">Price (Low to High)</option>
          </Select>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={3}
            pt={1}
          >
            {products.map((product) => {
              return (
                product.category === categories[category] &&
                product.name.toLowerCase().includes(search) && (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price.toString()}
                    picture={product.picture}
                    quantity={qtyById[product.id]}
                  />
                )
              );
            })}
          </Grid>
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
