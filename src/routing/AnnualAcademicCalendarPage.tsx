import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const AnnualAcademicCalendarPage = () => {
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
          Annual Academic
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Calendar
      </GridItem>
    </Grid>
  );
};

export default AnnualAcademicCalendarPage;
