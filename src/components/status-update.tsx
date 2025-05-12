import React from "react";

interface StatusUpdateProps {
  date: string;
  message: string;
}

export function StatusUpdate({ date, message }: StatusUpdateProps) {
  return (
    <div className="mb-4 border-l-2 border-yellow-500 pl-4">
      <div className="text-xs text-yellow-500 mb-1">{date}</div>
      <div className="text-gray-300">{message}</div>
    </div>
  );
}
