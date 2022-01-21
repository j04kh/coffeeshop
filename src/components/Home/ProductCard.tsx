import { Center, VStack, Text, chakra, useToast } from "@chakra-ui/react";
import NextImage from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

interface Props {
  id: string;
  name: string;
  price: string;
  picture?: string;
  quantity?: number;
}

//Custom img component to use next image optimization
const ProductImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  picture,
  quantity = 0,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Center
      w="140px"
      h="210px"
      bg="gray.100"
      pos="relative"
      borderRadius="15"
      boxShadow="2xl"
    >
      {quantity > 0 && (
        <Center
          w="10px"
          h="10px"
          top={0}
          margin={1}
          padding={3}
          right={0}
          fontSize="sm"
          fontWeight="semibold"
          color="gray.50"
          pos="absolute"
          bg="blue.700"
          borderRadius="999"
        >
          <Text mb="1px">{quantity}</Text>
        </Center>
      )}

      <VStack spacing="3px">
        <ProductImage
          src={picture || "DEFAULT_PICTURE"}
          width={80}
          height={80}
          w="auto"
          h="auto"
          borderRadius={999}
        />
        <Text fontSize="md" fontWeight="medium">
          {name}
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(parseInt(price))}
        </Text>
        <Center
          bg="green.700"
          color="white"
          px={5}
          py={1}
          borderRadius={5}
          cursor="pointer"
          fontSize="sm"
          fontWeight="semibold"
          onClick={() => {
            return (
              dispatch(addToCart(id)) &&
              toast({
                title: `${name}`,
                description: "Added to cart",
                status: "success",
                duration: 2000,
                isClosable: true,
              })
            );
          }}
        >
          ADD
        </Center>
      </VStack>
    </Center>
  );
};

export default ProductCard;
