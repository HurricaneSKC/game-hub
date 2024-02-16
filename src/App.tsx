import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Navigation/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(8, 1fr)"
    >
      <GridItem colSpan={8} area="nav" bg="">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem colSpan={2} area="aside" bg="">
          Aside
        </GridItem>
      </Show>
      <GridItem colSpan={6} area="main" bg="">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
