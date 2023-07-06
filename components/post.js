import {Avatar, Box, Card, CardBody, CardHeader, Heading, HStack, Text} from "@chakra-ui/react";

export default function Post(props) {
  return (
    <Card mt={2}>
      <CardHeader pb={0}>
        <HStack spacing="1em">
          <Avatar name={props.author.username} src={props.author.avatarUrl}/>
          <Box>
            <Heading size="sm">{props.author.username}</Heading>
            <Text>{props.author.description}</Text>
          </Box>
        </HStack>
      </CardHeader>
      <CardBody>
        <Text>{props.content}</Text>
      </CardBody>
    </Card>
  );
}