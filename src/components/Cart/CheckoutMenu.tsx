import { Box, Flex, Spacer, Text, Divider, Center } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { checkout } from "../../redux/cartSlice";

interface Props {
  show?: boolean;
  subtotal: number;
}

const CheckoutMenu: React.FC<Props> = ({ show, subtotal = 0 }) => {
  const dispatch = useDispatch();
  return (
    <Center
      w="100%"
      h="130px"
      bg="gray.300"
      fontWeight="semibold"
      bottom="0"
      pos="fixed"
    >
      <Box h="100%" w="100%" maxW="640px" px={5} pt={5}>
        <Flex>
          <Text>SUBTOTAL:</Text>
          <Spacer />
          <Text>{`${subtotal}$`}</Text>
        </Flex>
        <Divider borderColor="black" />
        <Center
          onClick={() => dispatch(checkout(undefined))}
          bg="green.700"
          color="white"
          w="100%"
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
