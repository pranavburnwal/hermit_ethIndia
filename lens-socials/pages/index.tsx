import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import PostField from "../components/PostField";
import UserFeed from "../components/UserFeed";
import MostFollowedProfils from "../components/MostFollowedProfiles";
import { fetchProfileSearch } from "./api/api";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");

  
  function handleChange(e: any) {
    console.log(e);
    setInputValue(e);

    // const { data, error } = useSWR(
    //   `./api/fetchProfileSearch?query=${inputValue}&type="PROFILE"&limit=5`,
    //   fetcher
    // );

    const data = fetchProfileSearch(inputValue);

    console.log(data);

  }



  return (
    <div className="bg-gray-200">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header value={inputValue} onChange={handleChange} />
      <div className="container mx-auto mt-8 grid grid-cols-3 gap-4 ">
        <div className="col-span-2">
          <PostField />
          <UserFeed profileId={"0x02"} />
        </div>
        <div className="col-span-1">
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            <div className="text-xl font-gotham font-semibold text-emerald-800">
              Trending Profiles
            </div>
          </div>
          <MostFollowedProfils />
        </div>
      </div>
    </div>
  );
}
