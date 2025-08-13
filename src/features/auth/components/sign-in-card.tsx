import { zodResolver } from "@hookform/resolvers/zod";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/custom/custom-input";
import { signInFormSchema, SignInFormValues } from "../schemas/sign-in-schema";
import { useSignIn } from "../api/use-sign-in";

export const SignInCard = () => {
  const { mutate } = useSignIn();

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      emaiL: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    mutate({ json: values });
  };

  return (
    <>
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcom back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <CustomInput
              name="emaiL"
              placeholder="Enter email address"
              disabled={false}
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Enter password"
              disabled={false}
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
