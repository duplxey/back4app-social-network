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
import {FaUserPlus} from "react-icons/fa";
import NextLink from "next/link";

export default function SignUp() {
  return (
    <>
      <Card>
        <CardHeader>
          <HStack>
            <FaUserPlus/>
            <Heading as="h2" size="md"> Sign up</Heading>
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
            <FormControl>
              <FormLabel>Repeat password</FormLabel>
              <Input placeholder="Repeat password"/>
            </FormControl>
          </VStack>
        </CardBody>
        <CardFooter w="full" display="flex" alignItems="center" justifyContent="space-between">
          <Text>
            Already have an account?{" "}
            <Link as={NextLink} href="/login">
              Log in
            </Link>
          </Text>
          <Button colorScheme="teal">Sign up</Button>
        </CardFooter>
      </Card>
    </>
  );
}
