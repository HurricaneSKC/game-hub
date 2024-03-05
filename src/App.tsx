// import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
// import "./App.css";
// import GameGrid from "./components/GameGrid/GameGrid";
// import GameHeading from "./components/GameHeading/GameHeading";
// import GenreList from "./components/GenreList/GenreList";
// import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
// import SortSelector from "./components/SortSelector/SortSelector";

// export interface GameQuery {
//   genreId?: number;
//   platformId?: number;
//   order?: string;
//   searchPhrase?: string;
// }

// function App() {
// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
//   null
// );
// const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

//   return (
//     <Grid
//       templateAreas={{
//         base: `"main"`,
//         lg: `"aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <Show above="lg">
//         <GridItem area="aside" bg="" paddingX={5}>
//           <GenreList />
//         </GridItem>
//       </Show>
//       <GridItem area="main" bg="">
//         <Box paddingLeft={2}>
//           <GameHeading />
//           <HStack marginY={5}>
//             <PlatformSelector />
//             <SortSelector />
//           </HStack>
//         </Box>

//         <GameGrid />
//       </GridItem>
//     </Grid>
//   );
// }

// export default App;
