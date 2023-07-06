import {Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Textarea,} from "@chakra-ui/react";
import Post from "@/components/post";
import {FaPlus} from "react-icons/fa";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Card mb={2}>
        <CardHeader>
          <HStack>
            <FaPlus/>
            <Heading as="h2" size="md"> Create post</Heading>
          </HStack>
        </CardHeader>
        <CardBody py={0}>
          <Textarea placeholder="What's on your mind?"/>
        </CardBody>
        <CardFooter display="flex" justifyContent="right">
          <Button colorScheme="teal">Post</Button>
        </CardFooter>
      </Card>
      <Post/>
      <Post/>
    </Layout>
  );
}
