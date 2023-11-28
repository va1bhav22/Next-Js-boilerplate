import PublicLayout from "@/layout/public";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PublicLayout>
      <section>Vaibhav</section>
    </PublicLayout>
  );
}
