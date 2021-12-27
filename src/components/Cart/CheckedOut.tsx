import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const CheckedOut: React.FC = () => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      width="100%"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Order submitted!
      </AlertTitle>
      <AlertDescription maxWidth="sm">Thanks for your order.</AlertDescription>
    </Alert>
  );
};

export default CheckedOut;
