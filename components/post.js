import {Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Text} from "@chakra-ui/react";
import {HiOutlineThumbDown, HiOutlineThumbUp} from "react-icons/hi";

export default function Post(props) {
  return (
    <Card mb={2}>
      <CardHeader>
        <HStack spacing="1em">
          <Avatar name={props.author.username} src={props.author.avatarUrl}/>
          <Box>
            <Heading size="sm">{props.author.username}</Heading>
            <Text>{props.author.description}</Text>
          </Box>
        </HStack>
      </CardHeader>
      <CardBody py={0}>
        <Text>{props.content}</Text>
      </CardBody>
      <CardFooter justify="space-between" flexWrap="wrap">
        <Button flex="1" variant="ghost" leftIcon={<HiOutlineThumbUp/>}>
          Like (15)
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<HiOutlineThumbDown/>}>
          Dislike (12)
        </Button>
      </CardFooter>
    </Card>
  );
}