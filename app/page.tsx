import { VscCode } from "react-icons/vsc";
import { RiLoginCircleFill } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-200 flex-col p-6">
      <div className="flex max-h-full max-w-full justify-between items-center">
        <div className="flex max-w-full ml-10 ">
          <VscCode className="w-10 h-10 " />
        </div>
        <div className="flex max-h-full max-w-lg justify-between gap-12 items-center">
          <a id="navHero" className="text-blue-900 text-xl">
            Product
          </a>
          <a id="navHero" className="text-blue-900 text-xl">
            Features
          </a>
          <a id="navHero" className="text-blue-900 text-xl">
            Company
          </a>
        </div>
        <div className="flex max-w-full mr-10 cursor-pointer">
          <RiLoginCircleFill className="w-10 h-10" />
        </div>
      </div>
      <div className="flex h-full max-w-full flex-col bg-blur justify-center items-center">
        <h1 className="text-4xl"> Welcome To Dashboard</h1>
        <p>Manage your finances here </p>
        <Link
          href="/dashboard"
          className="border border-black rounded-md px-4 bg-black text-xl text-white mt-4"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
