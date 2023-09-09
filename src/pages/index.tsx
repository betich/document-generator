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
      <h1>hi</h1>
      {isClient ? (
        <div className="space-y-4">
          <PDFDownloadLink
            className="p-4 shadow-md rounded-md bg-blue-500 text-white"
            document={<MyDocument />}
            fileName="my-document.pdf"
          >
            download
          </PDFDownloadLink>

          <PDFViewer className="max-w-lg w-full h-full">
            <MyDocument />
          </PDFViewer>
        </div>
      ) : null}
    </main>
  );
}
