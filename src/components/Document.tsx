import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Register font
Font.register({
  family: "TH SarabunPSK",
  fonts: [
    {
      src: "fonts/THSarabun.ttf",
    },
    {
      src: "fonts/THSarabun Bold.ttf",
      fontWeight: 700,
    },
    {
      src: "fonts/THSarabun Italic.ttf",
      fontStyle: "italic",
    },
    {
      src: "fonts/THSarabun Bold Italic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontSize: "14pt",
    fontFamily: "TH SarabunPSK",
    lineHeight: 1.5,
  },
  // modifiers
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  // page 1
  headingImg: {},
  underline: {
    // textDecoration: "underline",
    borderBottom: "1pt solid black",
    lineHeight: 1.25,
    marginBottom: -5,
  },
  // heading
  headingPage: {
    margin: "10 65",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingESC: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
  },
  dateText: {
    textAlign: "center",
    marginLeft: 100,
  },
  // greet
  greetSection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
  },
  // body
  bodySection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
  },
  bodyText: {
    textIndent: 70,
    textJustify: "inter-word",
    wordSpacing: 2,
  },
  lastBodySection: {
    margin: "0 65",
    display: "flex",
    flexDirection: "column",
  },
  // signature
  signatureSection: {
    margin: "10 65",
    display: "flex",
    flexDirection: "column",
  },
  signatureText: {
    textAlign: "center",
  },
  presidentSignature: {
    position: "relative",
    marginTop: 50,
    marginLeft: 50,
  },
  footerPurpose: {
    marginLeft: 35,
  },
  deanSignature: {
    position: "relative",
    marginTop: 50,
    marginRight: 50,
  },
});

interface MyDocumentProps {
  data: {
    projectId: string;
    documentId: string;
  };
}

const data = {
  documentId: "8002",
  projectId: "8002",
  from: "ฝ่ายนิสิตสัมพันธ์",
  date: "25 สิงหาคม 2566",
  to: "รองคณบดี (รศ. ดร.สรรเพชญ ชื้อนิธิไพศาล)",
  itemToRequest: "สถานที่และอุปกรณ์",
  projectName: "รับน้องหนึ่งเดือน ปีการศึกษา 2566",
  projectObjective:
    "สร้างความสัมพันธ์อันดีและความสามัคคีระหว่างนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
  activity: "จัดกิจกรรม Blood Day",
  toFooter: "รองคณบดี (ศ. ดร.เกษม ชูจารุกูล)",
};

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src="/assets/header.png" style={styles.headingImg} />

      <View style={styles.headingPage}>
        <Text>
          <Text style={styles["bold"]}>ที่</Text> กวศ.{data.projectId}-
          {data.documentId} / 2566
        </Text>

        <View style={styles.headingESC}>
          <Text>กรรมการนิสิตคณะวิศวกรรมศาสตร์</Text>
          <Text>จุฬาลงกรณ์มหาวิทยาลัย</Text>
        </View>
      </View>
      <Text style={styles.dateText}>วันที่ {data.date}</Text>

      <View style={styles.greetSection}>
        <Text>
          <Text style={styles.bold}>เรื่อง</Text> ขออนุญาตใช้
          {data.itemToRequest}
        </Text>
        <Text>
          <Text style={styles.bold}>เรียน</Text> {data.to}
        </Text>
        <Text>
          <Text style={styles.bold}>สิ่งที่แนบมา</Text>{" "}
          รายละเอียดการใช้เลือกรายการ
        </Text>
      </View>

      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          ตามที่{data.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          ได้รับอนุมัติให้จัดโครงการ
          {data.projectName} เพื่อ
          <Text>{data.projectObjective}</Text>
        </Text>
        <Text style={styles.bodyText}>
          {data.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          จึงขออนุญาตใช้ สถานที่และอุปกรณ์เพื่อ
          {data.activity} โดยมีรายละเอียดตามเอกสารแนบ
        </Text>
      </View>
      <View style={styles.lastBodySection}>
        <Text style={styles.bodyText}>จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</Text>
      </View>

      <View style={styles.presidentSignature}>
        <View style={styles.signatureSection}>
          <Text style={styles.signatureText}>(กันตพงศ์ โหราเรือง)</Text>
          <Text style={styles.signatureText}>หัวหน้านิสิต</Text>
        </View>
      </View>

      <View style={styles.bodySection}>
        <Text>
          <Text style={styles.bold}>เรียน</Text> {data.toFooter}
        </Text>
        <Text style={styles.footerPurpose}>- เพื่อโปรดพิจารณาอนุมัติ</Text>

        <View style={styles.deanSignature}>
          <View style={styles.signatureSection}>
            <Text style={styles.signatureText}>
              (รศ. ดร.สรรเพชญ ชื้อนิธิไพศาล)
            </Text>
            <Text style={styles.signatureText}>รองคณบดี</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
