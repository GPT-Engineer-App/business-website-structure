import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Us</Heading>
        <Text fontSize="lg">We are dedicated to helping small local businesses establish a strong online presence.</Text>
        <Text fontSize="md">Our mission is to provide high-quality web development services that are affordable and effective.</Text>
        <Text fontSize="md">Meet our team of experienced professionals who are passionate about what they do.</Text>
      </VStack>
    </Container>
  );
};

export default About;