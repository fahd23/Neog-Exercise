import { useState } from "react";

export default function TwitterCounter() {
  const [wordCount, setWordCount] = useState(0);
  return (
    <div>
      <h1>Character counter (Twitter)</h1>
      <input
        type="text"
        onChange={(e) => setWordCount(e.target.value.length)}
      />
      <span>{30 - wordCount}</span>
    </div>
  );
}
