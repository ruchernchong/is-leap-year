interface StatusUpdateProps {
  date: string;
  message: string;
}

export function StatusUpdate({ date, message }: StatusUpdateProps) {
  return (
    <div className="mb-4 border-yellow-500 border-l-2 pl-4">
      <div className="mb-1 text-red-500 text-xs">{date}</div>
      <div className="text-gray-300">{message}</div>
    </div>
  );
}
