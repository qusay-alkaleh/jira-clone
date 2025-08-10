"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface AuthlayoutProps {
  children: React.ReactNode;
}

const Authlayout = ({ children }: AuthlayoutProps) => {
  const isSignUpPage = usePathname() === "/sign-up";
  const authButtonText = isSignUpPage ? "Login" : "Sign Up";
  const authLink = isSignUpPage ? "/sign-in" : "/sign-up";

  const AUTH_SENTENCE = isSignUpPage
    ? "Already have an account?"
    : "Don/’t have an account?";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={"/logo.svg"} width={152} height={56} alt="logo" />
          <Link
            href={authLink}
            className={buttonVariants({ variant: "secondary" })}
          >
            {authButtonText}
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center p-4 md:p-14">
          <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            {children}
            <CardContent className="flex flex-col gap-y-4 p-7">
              <Button
                variant="secondary"
                size={"lg"}
                disabled={false}
                className="w=full"
              >
                <FcGoogle className="mr-2 !size-5" />
                Continue with Google
              </Button>
              <Button
                variant="secondary"
                size={"lg"}
                disabled={false}
                className="w=full"
              >
                <FaGithub className="mr-2 !size-5" />
                Continue with Github
              </Button>
            </CardContent>
            <div className="px-7">
              <DottedSeparator />
            </div>
            <CardContent className="p-7 flex-center">
              <p>{AUTH_SENTENCE}</p>
              <Link href={authLink} className="text-blue-700">
                &nbsp;{authButtonText}
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Authlayout;
