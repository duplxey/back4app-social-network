import NextLink from "next/link";
import {Avatar, Box, Container, Divider, Heading, HStack, Link} from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";
import ParseContext from "@/context/parseContext";

export default function Header() {

  const parse = useContext(ParseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(parse.User.current());
  }, [parse.User]);

  return (
    <Box py={4}>
      <Container maxW="container.lg" display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="md">
          <Link as={NextLink} href="/">
            back4app-social-network
          </Link>
        </Heading>
        {user != null ? (
          <HStack>
            <Avatar size="sm" name={user.attributes.username} src={user.attributes.avatarUrl}/>
            <Heading size="sm">
              <Link as={NextLink} href="/settings">
                {user.attributes.username}
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