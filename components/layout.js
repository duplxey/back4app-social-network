import Header from "@/components/header";
import Footer from "@/components/footer";
import {Container} from "@chakra-ui/react";

export default function Layout({children}) {
  return (
    <>
      <Header/>
      <Container maxW="container.lg">
        {children}
      </Container>
      <Footer/>
    </>
  );
}