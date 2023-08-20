import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const FireSafetyCertificatePage = () => {
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
          Fire Safety
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Certificate
      </GridItem>
    </Grid>
  );
};

export default FireSafetyCertificatePage;
