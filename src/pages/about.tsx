import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";

export default function About() {
  const { push } = useRouter();

  useEffect(() => {
    push("/comming_soon");
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-100 flex-col items-center justify-between">
      <Navbar></Navbar>
    </main>
  );
}
