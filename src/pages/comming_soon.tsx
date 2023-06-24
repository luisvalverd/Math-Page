import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CommingSoon() {
  return (
    <main className="flex min-h-screen">
      <div className="z-10 w-full">
        <Navbar></Navbar>
        <div className="w-full bg-gray-100 h-full flex justify-center items-center">
          <p className="flex text-black justify-center items-center text-8xl font-bold">
            Próximamente
          </p>
        </div>
        <Footer></Footer>
      </div>
    </main>
  );
}
