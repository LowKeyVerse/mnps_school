import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Home
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Page
      </GridItem>
    </Grid>
  );
};

export default HomePage;
