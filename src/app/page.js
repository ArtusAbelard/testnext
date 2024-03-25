import Image from "next/image";
import Navbar from "./ui/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar></Navbar>
      <h1>Home</h1>
    </main>
  );
}
