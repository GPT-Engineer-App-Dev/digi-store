import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, IconButton, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [brand, setBrand] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement the search functionality here
  };

  const handleFilter = () => {
    console.log("Filtering products with:", { category, priceRange, brand });
    // Implement the filtering functionality here
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4}>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">ElectroShop</Link>
          <Spacer />
          <HStack spacing={4}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/products">Products</Link>
            <Link as={RouterLink} to="/about">About Us</Link>
            <Link as={RouterLink} to="/contact">Contact Us</Link>
            <InputGroup maxW="400px">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="white"
                color="black"
              />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<FaSearch />}
                  onClick={handleSearch}
                />
              </InputRightElement>
            </InputGroup>
          </HStack>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
          <Image src="/images/featured-product.jpg" alt="Featured Product" borderRadius="md" />
        </Container>
      </Box>

      {/* Filter Section */}
      <Box bg="gray.200" p={4} mb={8}>
        <Heading as="h3" size="lg" mb={4}>Filter Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box>
            <Text mb={2}>Category</Text>
            <Input
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              bg="white"
              color="black"
            />
          </Box>
          <Box>
            <Text mb={2}>Price Range</Text>
            <InputGroup>
              <Input
                placeholder="Min"
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                bg="white"
                color="black"
              />
              <InputRightElement>-</InputRightElement>
              <Input
                placeholder="Max"
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                bg="white"
                color="black"
              />
            </InputGroup>
          </Box>
          <Box>
            <Text mb={2}>Brand</Text>
            <Input
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              bg="white"
              color="black"
            />
          </Box>
        </SimpleGrid>
        <Button mt={4} colorScheme="blue" onClick={handleFilter}>Apply Filters</Button>
      </Box>

      {/* Popular Products Section */}
      <Box py={20}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8} textAlign="center">Popular Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Product 1</Heading>
                <Text>$299.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Product 2</Heading>
                <Text>$399.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Product 3</Heading>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.md">
          <VStack spacing={4}>
            <Text>Contact us: info@electroshop.com</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;