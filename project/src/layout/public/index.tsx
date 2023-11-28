import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element[] | JSX.Element;
  title?: string;
  //   description?: string;
  //   ogImage?: string;
};
export default function PublicLayout({ children, title }: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title || "Welcome"}</title>
        {/* <meta name="description" content={description} /> */}
        {/* <meta property="og:image" content={ogImage} /> */}
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
