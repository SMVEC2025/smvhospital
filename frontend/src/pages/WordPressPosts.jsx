import React, { useEffect, useState } from "react";

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blanchedalmond-pheasant-788658.hostingersite.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const encodedStr = "\u003Cp\u003EChairman M. Dhanasekaran and Dean of CLE – SMVEC are welcoming R. Subramaniam, Justice, and G. R. Swaminathan.\u003C/p\u003E\n";

  return (
    <div>
      <h2>WordPress Posts</h2>
      <p >{decodeURIComponent(encodedStr)}</p>
      <div dangerouslySetInnerHTML={{ __html: decodeURIComponent(encodedStr) }}></div>
    </div>
  );
};

export default WordPressPosts;