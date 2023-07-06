import {useContext, useEffect, useState} from "react";
import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import ParseContext from "@/context/parseContext";
import Layout from "@/components/layout";
import Post from "@/components/post";

export default function Home() {

  const parse = useContext(ParseContext);

  const [user, setUser] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setUser(parse.User.current());

    (async () => {
      const posts = await new parse.Query("Post").include("author").descending("createdAt").find();
      setPosts(posts);
    })();
  }, []);

  const onCreatePost = async () => {
    if (!user == null) return;

    const post = new parse.Object("Post");
    post.set("content", postContent);
    post.set("author", user);
    await post.save();

    setPostContent("");
    setPosts([post, ...posts]);
  };

  return (
    <Layout>
      {user ? (
        <Card mb={2}>
          <CardHeader>
            <HStack>
              <FaPlus/>
              <Heading as="h2" size="md"> Create post</Heading>
            </HStack>
          </CardHeader>
          <CardBody py={0}>
            <Textarea
              placeholder="What's on your mind?"
              value={postContent}
              onChange={(event) => setPostContent(event.target.value)}
            />
          </CardBody>
          <CardFooter display="flex" justifyContent="right">
            <Button colorScheme="teal" onClick={onCreatePost}>Post</Button>
          </CardFooter>
        </Card>
      ) : (
        <Alert status="warning" mb={2}>
          <AlertIcon/>
          You need to log in to create posts.
        </Alert>
      )}
      {posts.map(post => (
        <Post
          key={post.id}
          content={post.attributes.content}
          author={{...post.attributes.author.attributes}}
        />
      ))}
    </Layout>
  );
}
