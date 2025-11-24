import { NextResponse } from "next/server";
import { incrementRequests } from "./requests";

type ApiResponse<T> = {
  status: number;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    timestamp: string;
  };
};

export const successResponse = <T>(data: T): NextResponse<ApiResponse<T>> => {
  incrementRequests();

  return NextResponse.json(
    {
      status: 200,
      data,
      meta: {
        timestamp: new Date().toISOString(),
      },
    },
    { status: 200 },
  );
};

export const errorResponse = (
  message: string,
  status = 400,
): NextResponse<ApiResponse<never>> =>
  NextResponse.json(
    {
      status,
      error: { code: status.toString(), message },
      meta: { timestamp: new Date().toISOString() },
    },
    { status },
  );
