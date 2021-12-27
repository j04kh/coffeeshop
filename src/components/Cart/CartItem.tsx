import { Flex, Spacer, VStack, Text, chakra, useToast } from "@chakra-ui/react";
import NextImage from "next/image";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

interface Props {
  id: string;
  name: string;
  picture: string;
  price: number;
  quantity: number;
}

//Custom img component to use next image optimization
const ProductImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const CartItem: React.FC<Props> = ({ id, name, picture, price, quantity }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Flex h="100px" w="full" px={5} bg="gray.200" alignItems="center">
      <ProductImage
        src={picture}
        alt="Product"
        width={60}
        height={60}
        w="auto"
        h="auto"
        borderRadius={999}
      />
      <VStack ml={4} alignItems="start">
        <Text fontWeight="bold">{name}</Text>
        <Text fontWeight="semibold">{`${quantity} x ${price}$`}</Text>
      </VStack>
      <Spacer />
      <CloseIcon
        _hover={{ color: "red" }}
        onClick={() => {
          return (
            dispatch(removeFromCart(id)) &&
            toast({
              title: `${name}`,
              description: "Removed from cart",
              status: "error",
              duration: 2000,
              isClosable: true,
            })
          );
        }}
      />
    </Flex>
  );
};

export default CartItem;
