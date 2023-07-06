import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {FaUser} from "react-icons/fa";
import NextLink from "next/link";

export default function Login() {
  return (
    <>
      <Card>
        <CardHeader>
          <HStack>
            <FaUser/>
            <Heading as="h2" size="md"> Login</Heading>
          </HStack>
        </CardHeader>
        <CardBody py={0}>
          <VStack spacing="1em">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Username"/>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password"/>
            </FormControl>
          </VStack>
        </CardBody>
        <CardFooter w="full" display="flex" alignItems="center" justifyContent="space-between">
          <Text>
            Do not have an account yet?{" "}
            <Link as={NextLink} href="/signup">
              Sign up
            </Link>
          </Text>
          <Button colorScheme="teal">Log in</Button>
        </CardFooter>
      </Card>
    </>
  );
}
