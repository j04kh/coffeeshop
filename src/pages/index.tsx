import { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import { Center, Grid } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import { Product } from "types/Product";
import api from "./api";
import { useSelector } from "react-redux";
import { selectItemsQuantity } from "redux/cartSlice";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"init" | "resolved">("init");
  const itemsQty = useSelector(selectItemsQuantity);

  useEffect(() => {
    api.products.list().then((products) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

  if (status === "init") return <h1>Loading...</h1>;

  return (
    <Center bg="gray.300" w="100%" h="100%" minH="100vh">
      <Navbar itemsQty={itemsQty} />
      <Center w="100%" pt="120px" pb="20px" h="100%" minH="100vh" maxW="720px">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                picture={product.picture}
              />
            );
          })}
        </Grid>
      </Center>
    </Center>
  );
};

export default Home;
