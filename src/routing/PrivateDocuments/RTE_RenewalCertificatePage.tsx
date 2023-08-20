import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import PDFviewer from "../../components/PDFviewer";
import certificate from "../../assets/SoarGhatiRegDoc.pdf";

const RTE_RenewalCertificatePage = () => {
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
          <PDFviewer fileURL={certificate} />
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Info
      </GridItem>
    </Grid>
  );
};

export default RTE_RenewalCertificatePage;
