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
  { path: "/", element: <HomePage /> },
  { path: "/AnnualAcademicCalendar", element: <AnnualAcademicCalendarPage /> },
  { path: "/FeeStructure", element: <FeeStructureInformationPage /> },
  { path: "/LastThreeYearsResult", element: <LastThreeYearsResultsPage /> },
  {
    path: "Private/BuildingSafetyCertificate",
    element: <BuildingSafetyCertificatePage />,
  },

  {
    path: "Private/FireSafetyCertificate",
    element: <FireSafetyCertificatePage />,
  },
  { path: "Private/LastExtension", element: <LastExtensionLetterPage /> },

  { path: "Private/PTAInformation", element: <PTAinformationPage /> },
  {
    path: "Private/RTERenewalCertificate",
    element: <RTE_RenewalCertificatePage />,
  },
  {
    path: "Private/SanitationCertificate",
    element: <SanitationCertificatePage />,
  },
  {
    path: "Private/SelfCertificationForExtension",
    element: <SelfCertificationForExtensionPage />,
  },
  { path: "Private/SMCinformation", element: <SMCinformationPage /> },
  {
    path: "Private/SocietyRenewalCertificate",
    element: <SocietyRenewalCertificatePage />,
  },
]);

export default router;
