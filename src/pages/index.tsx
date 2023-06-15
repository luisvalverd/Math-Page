import Image from "next/image";
import NavbarPage from "@/components/navbar";
import Mision from "@/components/mision";
import Vision from "@/components/vision";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen${inter.className}`}>
      <div className="w-full h-full fixed top-0 left-0 right-0 z-0">
        <Image
          src="/background.jpg"
          className="z-2"
          alt="background"
          fill
        ></Image>
      </div>
      <div className="z-10">
        <NavbarPage></NavbarPage>
        <div className="col-1 flex flex-col mt-36 px-24">
          <div className="flex justify-center items-center my-16">
            <Image
              src="/club_de_matematicas.png"
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
