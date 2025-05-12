import React from "react";

interface Props {
  code: string;
  language: string;
  title?: string;
}

export const CodeBlock = ({ code, language, title }: Props) => (
  <div className="mb-8 overflow-hidden rounded-lg border border-gray-800">
    {title && (
      <div className="flex items-center gap-4 bg-gray-800 px-4 py-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-300 text-sm">{title}</span>
      </div>
    )}
    <pre className="overflow-x-auto bg-accent-content p-4">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  </div>
);
