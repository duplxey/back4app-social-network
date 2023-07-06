import NextLink from "next/link";
import {Avatar, Box, Container, Divider, Heading, HStack, Link} from "@chakra-ui/react";
import {useState} from "react";

export default function Header() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Box py={4}>
      <Container maxW="container.lg" display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="md">
          <Link as={NextLink} href="/">
            back4app-social-network
          </Link>
        </Heading>
        {loggedIn ? (
          <HStack>
            <Avatar size="sm" name="duplxey" src="https://i1.sndcdn.com/avatars-000566055321-ffydsa-t200x200.jpg"/>
            <Heading size="sm">
              <Link as={NextLink} href="/settings">
                duplxey
              </Link>
            </Heading>
          </HStack>
        ) : (
          <HStack spacing="1em">
            <Heading size="sm">
              <Link as={NextLink} href="/login">
                Log in
              </Link>
            </Heading>
            <Heading size="sm">
              <Link as={NextLink} href="/signup">
                Sign up
              </Link>
            </Heading>
          </HStack>
        )}
      </Container>
      <Divider my={4}/>
    </Box>
  );
}