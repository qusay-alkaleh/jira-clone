import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { SignOutResponse } from "../auth.types";

export const useSignOut = () => {
  const queryClinet = useQueryClient();

  const mutation = useMutation<SignOutResponse, Error>({
    mutationFn: async () => {
      const resp = await client.api.auth["sign-out"].$post();
      return await resp.json();
    },
    onSuccess: () => queryClinet.invalidateQueries({ queryKey: ["current"] }),
  });

  return mutation;
};
