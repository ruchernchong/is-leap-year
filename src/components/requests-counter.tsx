"use client";

import { useRealtime } from "@upstash/realtime/client";
import { Activity } from "lucide-react";
import { useState } from "react";
import type { RealtimeEvents } from "@/lib/realtime";

interface RequestCounterProps {
  totalRequests: number;
}

export const RequestsCounter = ({ totalRequests }: RequestCounterProps) => {
  const [requests, setRequests] = useState(totalRequests);

  useRealtime<RealtimeEvents>({
    event: "requests.count",
    onData(data) {
      setRequests(data);
    },
  });

  return (
    <div className="tooltip mb-12" data-tip="Updates on API request!">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-figure text-red-500">
            <Activity className="size-8" />
          </div>
          <div className="stat-title">
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-red-500" />
            <span>Live Requests</span>
          </div>
          <div className="stat-value text-red-500">
            {requests.toLocaleString()}
          </div>
          <div className="stat-desc">Since Inception</div>
        </div>
      </div>
    </div>
  );
};
