import Image from "next/image";
import logo from "./firenze.dev.svg";

export default function Header() {
  return (
    <div className="bg-orange-800 h-20 w-full mb-12 text-white flex pt-4">
      <div className="bg-white rounded-full -mt-4 w-24 h-24 p-3 border border-orange-800">
        <Image src={logo} width={96} height={96} alt="firenze.dev" />
      </div>
      <h1 className="text-3xl ml-8">GraphQL demo - Firenze.dev</h1>
    </div>
  );
}
