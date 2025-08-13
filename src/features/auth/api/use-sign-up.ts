import { useMutation } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { SignUpRequest, SignUpResponse } from "../auth.types";

export const useSignUp = () => {
  const mutation = useMutation<SignUpResponse, Error, SignUpRequest>({
    mutationFn: async ({ json }) => {
      const resp = await client.api.auth["sign-up"].$post({ json });
      return await resp.json();
    },
  });

  return mutation;
};
