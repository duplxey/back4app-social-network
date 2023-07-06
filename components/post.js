import {Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Text} from "@chakra-ui/react";
import {HiOutlineThumbDown, HiOutlineThumbUp} from "react-icons/hi";

export default function Post() {
  return (
    <Card mb={2}>
      <CardHeader>
        <HStack spacing="1em">
          <Avatar name="duplxey" src="https://i1.sndcdn.com/avatars-000566055321-ffydsa-t200x200.jpg"/>
          <Box>
            <Heading size="sm">duplxey</Heading>
            <Text>Just another cool user.</Text>
          </Box>
        </HStack>
      </CardHeader>
      <CardBody py={0}>
        <Text>View a summary of all your customers over the last month.</Text>
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