"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useSignOut } from "@/features/auth/api/use-sign-out";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useSignOut();

  useEffect(() => {
    if (!isLoading && !data) router.push("/sign-in");
  }, [data]);

  return (
    <div className="m-3 flex gap-1">
      only visible for authenticated users.
      <Button onClick={() => mutate()}>sign out</Button>
    </div>
  );
}
