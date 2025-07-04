"use client";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

type HeadingProps = {
  title: string;
  description?: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <Separator className="bg-slate-200 h-[1px]" />
    </>
  );
};

export default Heading;
