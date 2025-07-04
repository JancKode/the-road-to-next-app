import Link from "next/link";
import React from "react";
import Heading from "@/components/heading";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="HomePage" description="Your home place to start" />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to Ticktets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
