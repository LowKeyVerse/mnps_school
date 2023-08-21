import { createBrowserRouter } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";

import HomePage from "./HomePage";
import AnnualAcademicCalendarPage from "./AnnualAcademicCalendarPage";
import BuildingSafetyCertificatePage from "./PrivateDocuments/BuildingSafetyCertificatePage";
import FeeStructureInformationPage from "./FeeStructureInformationPage";
import FireSafetyCertificatePage from "./PrivateDocuments/FireSafetyCertificatePage";
import LastExtensionLetterPage from "./PrivateDocuments/LastExtensionLetterPage";
import LastThreeYearsResultsPage from "./LastThreeYearsResultsPage";
import PTAinformationPage from "./PrivateDocuments/PTAinformationPage";
import RTE_RenewalCertificatePage from "./PrivateDocuments/RTE_RenewalCertificatePage";
import SanitationCertificatePage from "./PrivateDocuments/SanitationCertificatePage";
import SelfCertificationForExtensionPage from "./PrivateDocuments/SelfCertificationForExtensionPage";
import SMCinformationPage from "./PrivateDocuments/SMCinformationPage";
import SocietyRenewalCertificatePage from "./PrivateDocuments/SocietyRenewalCertificatePage";

const router = createBrowserRouter([
  { path: "mnps_school/", element: <HomePage /> },
  {
    path: "mnps_school/AnnualAcademicCalendar",
    element: <AnnualAcademicCalendarPage />,
  },
  {
    path: "mnps_school/FeeStructure",
    element: <FeeStructureInformationPage />,
  },
  {
    path: "mnps_school/LastThreeYearsResult",
    element: <LastThreeYearsResultsPage />,
  },
  {
    path: "mnps_school/Private/BuildingSafetyCertificate",
    element: <BuildingSafetyCertificatePage />,
  },

  {
    path: "mnps_school/Private/FireSafetyCertificate",
    element: <FireSafetyCertificatePage />,
  },
  {
    path: "mnps_school/Private/LastExtension",
    element: <LastExtensionLetterPage />,
  },

  {
    path: "mnps_school/Private/PTAInformation",
    element: <PTAinformationPage />,
  },
  {
    path: "mnps_school/Private/RTERenewalCertificate",
    element: <RTE_RenewalCertificatePage />,
  },
  {
    path: "mnps_school/Private/SanitationCertificate",
    element: <SanitationCertificatePage />,
  },
  {
    path: "mnps_school/Private/SelfCertificationForExtension",
    element: <SelfCertificationForExtensionPage />,
  },
  {
    path: "mnps_school/Private/SMCinformation",
    element: <SMCinformationPage />,
  },
  {
    path: "mnps_school/Private/SocietyRenewalCertificate",
    element: <SocietyRenewalCertificatePage />,
  },
]);

export default router;
