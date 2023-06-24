import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";

export default function Members() {
  const { push } = useRouter();

  useEffect(() => {
    push("/comming_soon");
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar></Navbar>
      <h1>hola mundo</h1>
    </main>
  );
}
