import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-8">
        <div className="flex justify-evenly pt-28 items-center align-middle">
          <div className="max-w-xl">
            <h2 className="text-4xl pb-4 text-gray-600">
              Main heading comes here...
            </h2>
            <p className="text-gray-500 pb-6 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              impedit at quisquam ducimus nisi perferendis distinctio blanditiis
              fugiat ad, atque nesciunt culpa mollitia necessitatibus, rem
              deleniti maxime possimus adipisci consequatur.
            </p>

            <Link href={"/login"}>
              <button className="text-xl text-white px-8 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
                Enter
              </button>
            </Link>
          </div>

          <div>
            <div className="w-[400px] h-[400px] bg-gray-400 rounded-md text-4xl flex justify-center align-middle items-center text-gray-600">
              IMAGE
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
