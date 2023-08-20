import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const LastExtensionLetterPage = () => {
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
          Last Extension
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Letter
      </GridItem>
    </Grid>
  );
};

export default LastExtensionLetterPage;
