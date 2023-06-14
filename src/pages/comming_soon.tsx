import Image from "next/image";
import Navbar from "@/components/navbar";

export default function CommingSoon() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full h-full fixed top-0 left-0 right-0 z-0">
        <Image
          src="/background.jpg"
          className="z-2"
          alt="background"
          width={1900}
          height={800}
        ></Image>
      </div>
      <div className="flex z-10 w-full">
        <Navbar></Navbar>
        <div className="w-full h-full flex justify-center items-center">
          <p className="flex justify-center items-center text-8xl font-bold">
            Proximamente
          </p>
        </div>
      </div>
    </main>
  );
}
