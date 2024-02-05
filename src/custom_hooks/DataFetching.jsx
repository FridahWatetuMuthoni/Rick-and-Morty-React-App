import { useState, useEffect } from "react";

function DataFetching() {
  const [text, setText] = useState("");
  const [id, setId] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://dummyjson.com/posts/${id}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setText(data.body));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleClick = () => {
    let new_id = Math.floor(Math.random() * 100);
    setId(new_id);
  };
  return (
    <div>
      <button onClick={handleClick}>Show Me a different Post</button>
      <p>{text}</p>
    </div>
  );
}

export default DataFetching;
