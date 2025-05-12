import React from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-lg border border-gray-800">
      {title && (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
          <span className="text-gray-300 text-sm">{title}</span>
          <div className="flex space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
}
