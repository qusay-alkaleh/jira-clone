import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

export type SignInResponse = InferResponseType<
  (typeof client.api.auth)["sign-in"]["$post"]
>;
export type SignInRequest = InferRequestType<
  (typeof client.api.auth)["sign-in"]["$post"]
>;

export type SignUpResponse = InferResponseType<
  (typeof client.api.auth)["sign-up"]["$post"]
>;
export type SignUpRequest = InferRequestType<
  (typeof client.api.auth)["sign-up"]["$post"]
>;
