import { Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/health.webp"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Relish Free Group Conversations{" "}
          </h1>
          <p className="mb-8 leading-relaxed">
            A web-based tool that enables multiple users to connect with each
            other in real-time using simple messaging services. Easily connect
            with family,friends and colleagues at a simple click.
          </p>
          <div className="flex w-full justify-center items-end">
            <Link href={"/dashboard"}>
              <button className="flex gap-x-2 px-3 py-2 h-12 items-center bg-black text-white rounded-3xl mr-8">
                <Wallet size={20} className="" /> <span>Connect wallet</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
