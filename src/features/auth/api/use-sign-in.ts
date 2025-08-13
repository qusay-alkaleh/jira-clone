import { useMutation } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { SignInRequest, SignInResponse } from "../auth.types";

export const useSignIn = () => {
  const mutation = useMutation<SignInResponse, Error, SignInRequest>({
    mutationFn: async ({ json }) => {
      const resp = await client.api.auth["sign-in"].$post({ json });
      return await resp.json();
    },
  });

  return mutation;
};
