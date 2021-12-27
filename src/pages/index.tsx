import { useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar";
import { Center, Grid, Divider, VStack } from "@chakra-ui/react";
import ProductCard from "../components/Home/ProductCard";
import { Product } from "types/Product";
import api from "./api";
import { useSelector } from "react-redux";
import { selectItemsQuantity } from "redux/cartSlice";
import Loading from "../components/Loading";
import Category from "../components/Home/Category";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"init" | "resolved">("init");
  const [category, setCategory] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const itemsQty = useSelector(selectItemsQuantity);

  useEffect(() => {
    api.products.list().then((products) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

  const categories = ["hotDrink", "bakery", "sandwiches"];

  if (status === "init") return <Loading />;

  return (
    <Center bg="gray.300" w="100%" h="100%" minH="100vh">
      <Navbar itemsQty={itemsQty} search={search} setSearch={setSearch} />
      <Center w="100%" pt="95px" pb="20px" h="100%" minH="100vh" maxW="720px">
        <VStack gap={0} minH="100vh">
          <Category category={category} setCategory={setCategory} />
          <Divider borderColor="gray.600" />
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
