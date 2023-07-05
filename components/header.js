import {Avatar, Box, Container, Heading, HStack, Text} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box py={2} mb={4}>
      <Container maxW="container.lg" display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">back4app-social-network</Heading>
        <HStack spacing="0.5em">
          <Avatar size="sm" name="Nik Tomazic" src="https://i1.sndcdn.com/avatars-000566055321-ffydsa-t200x200.jpg"/>
          <Heading size="sm">Nik Tomazic</Heading>
        </HStack>
      </Container>
    </Box>
  );
}