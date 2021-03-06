import { Flex, Spacer, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Navbar: React.FC = () => {
  const router = useRouter();
  const bg = useColorModeValue("green.700", "green.800");
  return (
    <Flex
      h="60px"
      color="white"
      fontWeight="semibold"
      fontSize="lg"
      w="100%"
      px={5}
      alignItems="center"
      bg={bg}
      pos="fixed"
      zIndex="20"
    >
      <ArrowBackIcon onClick={() => router.back()} />
      <Spacer />
      <Text>Cart</Text>
      <Spacer />
    </Flex>
  );
};

export default Navbar;
