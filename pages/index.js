import {Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Text} from "@chakra-ui/react";
import {HiOutlineShare, HiOutlineThumbDown, HiOutlineThumbUp} from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <HStack spacing="1em">
            <Avatar name="Nik Tomazic" src="https://i1.sndcdn.com/avatars-000566055321-ffydsa-t200x200.jpg"/>
            <Box>
              <Heading size="sm">Nik Tomazic</Heading>
              <Text>Just another cool user.</Text>
            </Box>
          </HStack>
        </CardHeader>
        <CardBody py={0}>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter justify="space-between" flexWrap="wrap">
          <Button flex="1" variant="ghost" leftIcon={<HiOutlineThumbUp />}>
            Like (15)
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<HiOutlineThumbDown />}>
            Dislike (12)
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<HiOutlineShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
