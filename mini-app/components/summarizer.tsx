"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Dummy summarization: take first 200 characters
    setSummary(text.slice(0, 200) + (text.length > 200 ? "..." : ""));
  };

  return (
    <div className="w-full max-w-2xl space-y-4">
      <textarea
        className="w-full rounded border p-2"
        rows={6}
        placeholder="Enter text to summarize..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleSummarize}>Summarize</Button>
      {summary && (
        <div className="p-2 border rounded bg-muted">
          <h3 className="font-semibold mb-1">Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
