"use client";

import P from "~/_components/P";
import { Button } from "~/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/_components/ui/card";
import { useRouter } from "next/navigation";

type DashboardCardProps = {
  title: string;
  description: string;
  buttonText: string;
  path: string;
};

export default function DashboardCard({
  title,
  description,
  buttonText,
  path,
}: DashboardCardProps) {
  const router = useRouter();

  return (
    <Card className="flex h-full flex-col border-none text-center">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-zinc-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col">
        <P className="flex-grow text-sm text-zinc-500">{description}</P>
        <Button className="mt-4 w-full" onClick={() => router.push(path)}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
