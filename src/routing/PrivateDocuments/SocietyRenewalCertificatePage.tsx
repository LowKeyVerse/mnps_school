import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

const SocietyRenewalCertificatePage = () => {
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
          Society
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Renewal Info Page
      </GridItem>
    </Grid>
  );
};

export default SocietyRenewalCertificatePage;
