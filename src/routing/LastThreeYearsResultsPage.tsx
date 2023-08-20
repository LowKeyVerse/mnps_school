import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const LastThreeYearsResultsPage = () => {
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
          Last
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Three Years Result
      </GridItem>
    </Grid>
  );
};

export default LastThreeYearsResultsPage;
