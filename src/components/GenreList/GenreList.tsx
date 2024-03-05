import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "./useGenres";
import { Genre } from "../../entitites/Genre";
import getCroppedImageUrl from "../../services/image-url";
import useGameQueryStore from "../../store/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const { gameQuery, updateGenreId } = useGameQueryStore();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => updateGenreId(genre.id)}
                variant={"link"}
                fontSize={"lg"}
                fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
