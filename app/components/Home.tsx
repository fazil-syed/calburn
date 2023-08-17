"use client";
import { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import fetchData from "@/lib/actions/fetchPlan";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState<JSX.Element[]>([]);
  // const responses = [];
  const handleChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };
  function formatTextToHTML(inputText: string) {
    const lines = inputText.trim().split("\n");

    const formattedLines = lines.map((line, index) => {
      return <p key={index}>{line}</p>;
    });

    return formattedLines;
  }
  useEffect(() => {
    const setData = async () => {
      const newContent = await fetchData(prompt).then((content) =>
        formatTextToHTML(content)
      );
      console.log(newContent);
      setContent(newContent);
      // responses.push(newContent);
    };
    setData();
  }, [prompt]);

  return (
    <div className="w-full">
      {content.length === 0 ? (
        <Card />
      ) : (
        <Card content={content} isReply={true} />
      )}
      {/* {console.log(responses)} */}
      <div className="mt-12">
        <SearchBar handleSubmit={handleChange} />
      </div>
    </div>
  );
}
