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

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontSize: "14pt",
    fontFamily: "TH SarabunPSK",
  },
  section: {
    margin: "10 50",
    padding: 10,
  },
  headingImg: {},
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src="/assets/header.png" style={styles.headingImg} />

      <View style={styles.section}>
        <Text>
          <Text style={styles["bold"]}>ที่</Text> กวศ.7003-0047 / 2566
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
