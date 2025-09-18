import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useCurrent = () => {
  return useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const resp = await client.api.auth.current.$get();

      if (!resp.ok) return null;

      const { data } = await resp.json();

      return data;
    },
  });
};
