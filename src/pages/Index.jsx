import { Container, Text, VStack, Button, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Business</Heading>
        <Text fontSize="lg">We create websites and online stores for small local businesses.</Text>
        <Button as={Link} to="/services" colorScheme="blue" size="lg">Our Services</Button>
      </VStack>
    </Container>
  );
};

export default Index;