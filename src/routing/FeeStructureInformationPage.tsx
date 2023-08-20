import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const FeeStructureInformationPage = () => {
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
          Fee
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Structure Info
      </GridItem>
    </Grid>
  );
};

export default FeeStructureInformationPage;
