import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import {FaCog} from "react-icons/fa";
import ParseContext from "@/context/parseContext";
import Layout from "@/components/layout";

export default function Settings() {

  const router = useRouter();
  const parse = useContext(ParseContext);
  const toast = useToast();

  const [description, setDescription] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    (async () => {
      const user = parse.User.current();

      // if user is not logged in, redirect him
      if (user === null) {
        await router.push("/");
        return;
      }

      setDescription(await user.get("description"));
      setAvatarUrl(await user.get("avatarUrl"));
    })();
  }, [router, parse.User]);

  const onSave = async () => {
    const user = parse.User.current();
    user.set("description", description);
    user.set("avatarUrl", avatarUrl);
    await user.save();

    toast({
      title: "Settings saved.",
      position: "bottom-right",
      status: "success",
    });
  };

  const onLogout = async () => {
    await parse.User.logOut();
    await router.push("/");

    toast({
      title: "Successfully logged out.",
      position: "bottom-right",
      status: "success",
    });
  };

  return (
    <Layout>
      <Card>
        <CardHeader>
          <HStack>
            <FaCog/>
            <Heading as="h2" size="md"> Settings</Heading>
          </HStack>
        </CardHeader>
        <CardBody py={0}>
          <VStack spacing="1em">
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Avatar URL</FormLabel>
              <Input
                placeholder="Avatar URL"
                value={avatarUrl}
                onChange={e => setAvatarUrl(e.target.value)}
              />
            </FormControl>
          </VStack>
        </CardBody>
        <CardFooter display="flex" justifyContent="right">
          <HStack>
            <Button colorScheme="red" onClick={onLogout}>Log out</Button>
            <Button colorScheme="teal" onClick={onSave}>Save</Button>
          </HStack>
        </CardFooter>
      </Card>
    </Layout>
  );
}
