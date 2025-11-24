interface TestimonialCardProps {
  quote: string;
  attribution?: string;
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border border-gray-800 bg-white/5 p-6">
      <div className="mb-4 text-lg italic">" {quote} "</div>
      {attribution && (
        <div className="text-right text-gray-400 text-sm">- {attribution}</div>
      )}
    </div>
  );
}
