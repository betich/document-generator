import Image from "next/image";
import { Inter } from "next/font/google";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "@/components/Document";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="bg-white min-h-screen p-20 text-black space-y-12">
      <h1>Document</h1>
      {isClient ? (
        <div className="space-y-16">
          <PDFDownloadLink
            className="p-4 shadow-md rounded-md bg-blue-500 text-white"
            document={<MyDocument />}
            fileName="my-document.pdf"
          >
            download
          </PDFDownloadLink>

          <PDFViewer
            style={{
              // a4
              aspectRatio: "297mm / 210mm",
              width: "100%",
              height: "100%",
              minHeight: "60vh",
            }}
          >
            <MyDocument />
          </PDFViewer>
        </div>
      ) : null}
    </main>
  );
}
