import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./components/GenreList/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./components/PlatformSelector/usePlatforms";
import SortSelector from "./components/SortSelector/SortSelector";
import GameHeading from "./components/GameHeading/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  searchPhrase: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" bg="">
        <NavBar
          onSearch={(searchPhrase) =>
            setGameQuery({ ...gameQuery, searchPhrase })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginY={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectOrder={(order) => setGameQuery({ ...gameQuery, order })}
              sortOrder={gameQuery.order}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
