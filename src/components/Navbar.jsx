import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">Business Name</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">Home</Link>
          <Link as={RouterLink} to="/services" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">Services</Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">About Us</Link>
          <Link as={RouterLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">Contact</Link>
          <Link as={RouterLink} to="/coming-soon" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">Coming Soon</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;