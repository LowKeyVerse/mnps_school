import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const SanitationCertificatePage = () => {
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
          Sanitation
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Info
      </GridItem>
    </Grid>
  );
};

export default SanitationCertificatePage;
