import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import PDFviewer from "../../components/PDFviewer";
import certificate from "../../assets/SoarGhatiRegDoc.pdf";

const SocietyRenewalCertificatePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="main" bg="dodgerblue">
          <PDFviewer fileURL={certificate} />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default SocietyRenewalCertificatePage;
