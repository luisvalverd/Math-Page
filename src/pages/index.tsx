import Image from "next/image";
import NavbarPage from "@/components/navbar";
import Mision from "@/components/mision";
import Vision from "@/components/vision";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen${inter.className} bg-gray-100`}>
      <div className="z-10">
        <NavbarPage></NavbarPage>
        <div className="col-1 flex flex-col mt-36 px-24">
          <div className="flex justify-center items-center mb-12">
            <Image
              src="/logo.png"
              className="rounded-xl z-0"
              alt="logo club de optimización matematica"
              width={500}
              height={250}
            ></Image>
          </div>
          <div className="my-24 flex justify-center">
            <Mision></Mision>
          </div>
          <div className="my-20 flex justify-center">
            <Vision></Vision>
          </div>
        </div>
        <div className="col-2 w-full">
          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}
