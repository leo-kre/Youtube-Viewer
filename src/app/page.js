import Image from "next/image";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import backgroundImage from "../../public/background.svg";

export default function App() {
      return (
            <main className="h-full">
                  <Image src={backgroundImage} fill className="object-cover opacity-60" alt="background Image"></Image>
                  <div className="absolute w-full h-full flex flex-col justify-between">
                        <Header page={"test"}></Header>
                        <Home></Home>
                  </div>
            </main>
      );
}
