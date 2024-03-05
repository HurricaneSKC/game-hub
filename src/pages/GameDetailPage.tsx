import { useParams } from "react-router-dom";
import useGameDetails from "./useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
