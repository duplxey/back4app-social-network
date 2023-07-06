import NextLink from "next/link";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
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
import ParseContext from "@/context/parseContext";
import Layout from "@/components/layout";

export default function Login() {

  const router = useRouter();
  const parse = useContext(ParseContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // redirect the user if already logged in
  useEffect(() => {
    (async () => {
      if (parse.User.current() !== null) {
        await router.push("/");
      }
    })();
  }, [router, parse.User]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      console.error("Please enter both your username and password.");
      return;
    }

    try {
      await parse.User.logIn(username, password).then(() => {
        router.push("/");
        console.log("Successfully logged in.");
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Layout>
      <Card>
        <CardHeader>
          <HStack>
            <FaUser/>
            <Heading as="h2" size="md"> Login</Heading>
          </HStack>
        </CardHeader>
        <CardBody py={0}>
          <VStack spacing="1em" alignItems="left">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
          <Button colorScheme="teal" onClick={onSubmit}>Log in</Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
