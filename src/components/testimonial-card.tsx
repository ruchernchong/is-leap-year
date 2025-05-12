import React from "react";

interface TestimonialCardProps {
  quote: string;
  attribution?: string;
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-gray-800">
      <div className="text-lg italic mb-4">" {quote} "</div>
      {attribution && (
        <div className="text-sm text-gray-400 text-right">- {attribution}</div>
      )}
    </div>
  );
}
