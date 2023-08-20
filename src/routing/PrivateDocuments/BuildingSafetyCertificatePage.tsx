import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const BuildingSafetyCertificatePage = () => {
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
          Building Safety
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Certificate
      </GridItem>
    </Grid>
  );
};

export default BuildingSafetyCertificatePage;
