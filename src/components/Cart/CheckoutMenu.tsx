import { Box, Flex, Spacer, Text, Divider, Center } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { checkout } from "../../redux/cartSlice";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface Props {
  show?: boolean;
  subtotal: number;
  handler: (newState: boolean) => void;
}

const CheckoutMenu: React.FC<Props> = ({ show, subtotal = 0, handler }) => {
  const dispatch = useDispatch();
  const bg = useColorModeValue("gray.300", "blackAlpha.300");
  const border = useColorModeValue("gray.600", "gray.300");
  return (
    <Center
      w="100%"
      h="130px"
      bg={bg}
      fontWeight="semibold"
      bottom="0"
      pos="fixed"
    >
      <Box h="100%" w="100%" maxW="640px" px={5} pt={5}>
        <Flex>
          <Text>SUBTOTAL:</Text>
          <Spacer />
          <Text>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              currencyDisplay: "narrowSymbol",
            }).format(subtotal)}
          </Text>
        </Flex>
        <Divider borderColor={border} />
        <Center
          onClick={() => {
            handler(true);
            return dispatch(checkout(undefined));
          }}
          bg="green.700"
          color="white"
          w="100%"
          cursor="pointer"
          mt={4}
          h="50px"
        >
          CHECKOUT
        </Center>
      </Box>
    </Center>
  );
};

export default CheckoutMenu;
