"use client";
import { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import fetchData from "@/lib/actions/fetchPlan";

export default function Home({ user }) {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(true); // Show the loading spinner

      try {
        const newContent = await fetchData(prompt, user.id).then((content) =>
          formatTextToHTML(content)
        );

        setContent(newContent);
      } catch (error) {
        console.error("Error fetching or formatting data:", error);
      } finally {
        setLoading(false); // Hide the loading spinner
      }
    };

    setData();
  }, [prompt]);

  return (
    <div className="w-full">
      {loading ? (
        <Card />
      ) : (
        <>
          {content.length === 0 ? (
            <Card />
          ) : (
            <Card content={content} isReply={true} />
          )}
        </>
      )}
      <div className="mt-12">
        <SearchBar handleSubmit={handleChange} />
      </div>
    </div>
  );
}
