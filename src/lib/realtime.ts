import { type InferRealtimeEvents, Realtime } from "@upstash/realtime";
import z from "zod/v4";
import { redis } from "./redis";

const schema = {
  requests: {
    count: z.number(),
  },
};

export const realtime = new Realtime({ schema, redis });
export type RealtimeEvents = InferRealtimeEvents<typeof realtime>;
