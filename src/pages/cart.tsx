import { Center, VStack } from "@chakra-ui/react";
import CheckoutMenu from "../components/Cart/CheckoutMenu";
import CartItem from "components/Cart/CartItem";
import Navbar from "components/Cart/Navbar";
import Loading from "components/Loading";
import { useSelector } from "react-redux";
import { selectItemsAdded, selectItemsQtyById } from "redux/cartSlice";
import { useState, useEffect } from "react";
import api from "./api";
import EmptyCart from "components/Cart/EmptyCart";
import Head from "next/head";
import type { Product } from "types/Product";
import { useColorModeValue } from "@chakra-ui/color-mode";

const DEFAULT_PICTURE = "../assets/default.jpg";

const Cart: React.FC = () => {
  const itemsAdded = useSelector(selectItemsAdded);
  const qtyById = useSelector(selectItemsQtyById);

  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"init" | "resolved">("init");
  const [checkedOut, setCheckedOut] = useState<boolean>(false);

  const bg = useColorModeValue("gray.300", "blackAlpha.300");

  useEffect(() => {
    api.products.list().then((products) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

  const getSubtotal = () => {
    return itemsAdded.reduce(
      (total: number, id: number) => total + products[id].price * qtyById[id],
      0
    );
  };

  if (status === "init") return <Loading />;

  if (itemsAdded.length < 1) {
    return (
      <Center>
        <VStack width="100%" bg={bg} height="100%" minH="100vh">
          <Navbar />
          <EmptyCart checkedOut={checkedOut} />
        </VStack>
      </Center>
    );
  }

  return (
    <Center>
      <Head>
        <title>Coffeeshop - Cart</title>
        <meta name="description" content="Cart of Coffeeshop" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VStack width="100%" bg={bg} height="100%" minH="100vh">
        <Navbar />
        <VStack width="100%" maxW="640px" pt="65px" pb="140px">
          {products.map((prod) => {
            return (
              itemsAdded.includes(prod.id) && (
                <CartItem
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  picture={prod.picture || DEFAULT_PICTURE}
                  price={prod.price}
                  quantity={qtyById[prod.id]}
                />
              )
            );
          })}
        </VStack>
        <CheckoutMenu handler={setCheckedOut} subtotal={getSubtotal()} />
      </VStack>
    </Center>
  );
};

export default Cart;
