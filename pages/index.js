import Head from "next/head";
import { Inter } from "@next/font/google";
import Content from "../components/Content";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Certificate from "../components/Certificate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <Layout icon="/favicon.ico" title="My Portfolio">
        <Content />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
