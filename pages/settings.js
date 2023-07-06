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
  VStack,
} from "@chakra-ui/react";
import {FaCog} from "react-icons/fa";

export default function Settings() {
  return (
    <>
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
              <Input placeholder="Description"/>
            </FormControl>
            <FormControl>
              <FormLabel>Avatar URL</FormLabel>
              <Input placeholder="Avatar URL"/>
            </FormControl>
          </VStack>
        </CardBody>
        <CardFooter display="flex" justifyContent="right">
          <HStack>
            <Button colorScheme="red">Log out</Button>
            <Button colorScheme="teal">Save</Button>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}
