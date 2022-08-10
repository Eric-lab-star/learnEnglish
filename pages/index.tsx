import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Player from "../components/player";

const Home: NextPage = () => {
  const [data, setData] = useState<string[]>();
  const [text, setText] = useState<{ [key: string]: string }>();
  useEffect(() => {
    fetch("api/readFile")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data.slice(1));
      });
  }, []);
  useEffect(() => {
    fetch("api/script")
      .then((res) => res.json())
      .then((json) => setText(json.script));
  }, []);

  if (data)
    data.sort((a, b) =>
      a.localeCompare(b, navigator.languages[0] || navigator.language, {
        numeric: true,
        ignorePunctuation: true,
      })
    );

  return (
    <Layout title="영어 공부">
      {text && data ? (
        <div>
          {data?.map((value, index) => (
            <div key={index}>
              <div className="font-semibold text-sm">{value}</div>
              <Player src={`sound/${value}`} text={text[`${value}`]} />
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  );
};
export default Home;
