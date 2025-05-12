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
          <span className="text-sm text-gray-300">{title}</span>
          <div className="flex space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      )}
      <pre className="p-4 overflow-x-auto bg-gray-900">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
}
