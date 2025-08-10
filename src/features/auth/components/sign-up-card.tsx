import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { signUpFormSchema, SignUpFormValues } from "../schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/custom/custom-input";

export const SignUpCard = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      emaiL: "",
      password: "",
    },
  });

  const onsubmit = (values: SignUpFormValues) => {
    console.log("values => ", { values });
  };

  return (
    <>
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          {" "}
          By signing up, you are agree to our{" "}
          <Link href={"/privacy"} className="text-blue-700">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={"/terms"} className="text-blue-700">
            Terms of Service
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onsubmit)}>
            <CustomInput name="name" placeholder="Enter your name" />
            <CustomInput name="emaiL" placeholder="Enter email address" />
            <CustomInput
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <Button
              type="submit"
              size={"lg"}
              disabled={false}
              className="w-full"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
    </>
  );
};
