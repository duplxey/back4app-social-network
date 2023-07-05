import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {Box, Container, Heading, HStack, Tag, Text, VStack} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <Box py={2} mt={4}>
      <Container maxW="container.lg" display="flex" justifyContent="space-between">
        <VStack alignItems="left">
          <Heading size="sm">A social network powered by Back4app.</Heading>
          <Link as={NextLink} href="https://github.com/duplxey/back4app-social-network">
            Click here to learn how to build it!
          </Link>
        </VStack>
        <Link href="https://github.com/duplxey/back4app-social-network">
          <Tag background={"black"} color={"white"} py={2}>
            <HStack>
              <FaGithub size="1.5em"/>
              <Text>View on GitHub</Text>
            </HStack>
          </Tag>
        </Link>
      </Container>
    </Box>
  );
}