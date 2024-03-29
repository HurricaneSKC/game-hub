import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid/GameGrid";
import GameHeading from "../components/GameHeading/GameHeading";
import GenreList from "../components/GenreList/GenreList";
import PlatformSelector from "../components/PlatformSelector/PlatformSelector";
import SortSelector from "../components/SortSelector/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" bg="" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" bg="">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack marginY={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
