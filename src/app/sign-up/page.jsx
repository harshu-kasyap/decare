"use-client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet } from 'lucide-react';
// import { useState } from "react";

import { Docreg } from "./Docreg";
import { Patreg } from "./Patreg";

const page = () => {
  // const [docOpen, setDocOpen] = useState(close);
  // const [patOpen, setPatOpen] = useState(close);

  return (
    <section className="flex flex-col ">
      <div className="flex mt-8 mr-4 top-4 right-0 justify-end">

        <button className="flex gap-x-2 px-3 py-2 bg-black text-white rounded-3xl mr-8">Connect Wallet <span><Wallet size={20} className="" /></span></button>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">De Care</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* <Button>Doctor Registration</Button> */}
              {/* Button>Patient Registration</Button> */}
              <Docreg />
              <Patreg />
            </div>
            <div className="mt-4 text-center text-sm">
              Connect your wallet to get started!
              <Button variant="ghost" className="underline">
                connect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default page;
