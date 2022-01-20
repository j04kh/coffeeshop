import { Flex, Text, Spacer } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
}

const categories: { [key: number]: string } = {
  0: "Hot Drinks",
  1: "Bakery",
  2: "Sandwiches",
};

const Category: React.FC<Props> = ({ category, setCategory }) => {
  return (
    <Flex width="100%" height="25px" fontSize="lg" fontWeight="semibold">
      <ChevronLeftIcon
        cursor="pointer"
        onClick={() => setCategory(category === 0 ? 2 : category - 1)}
      />
      <Spacer />
      <Text>{categories[category]}</Text>
      <Spacer />
      <ChevronRightIcon
        cursor="pointer"
        onClick={() => setCategory(category === 2 ? 0 : category + 1)}
      />
    </Flex>
  );
};

export default Category;
