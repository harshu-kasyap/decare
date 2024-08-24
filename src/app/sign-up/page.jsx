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

const page = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Decare</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button>Doctor Registration</Button>
            <Button>Patient Registration</Button>
          </div>
          <div className="mt-4 text-center text-sm">
            connect your wallet to get started
            <Button variant="ghost" className="underline">
              connect
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
