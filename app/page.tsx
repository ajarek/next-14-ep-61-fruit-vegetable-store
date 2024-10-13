import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-start min-h-[calc(100vh-128px)] gap-4">
    <h1 className="text-4xl font-bold">Fruit and vegetable store</h1>
    <Button>Click me</Button>
   </div>
  );
}
