// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

interface Props {
  fileURL: string;
}

const PDFviewer = ({ fileURL }: Props) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "900px",
        }}
      >
        <Viewer fileUrl={fileURL} defaultScale={1.2} />
      </div>
    </Worker>
  );
};

export default PDFviewer;
