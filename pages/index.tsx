import type { NextPage } from "next";
import Layout from "../components/layout";
import ReactHowler from "react-howler";
import { useState } from "react";

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const onPlay = () => {
    setIsPlaying(true);
  };
  const onPause = () => {
    setIsPlaying(false);
  };
  return (
    <div>
      <Layout title="영어 공부">
        <ReactHowler src={"sound/LS1-3.wav"} playing={isPlaying} />
        <button onClick={onPlay}>play</button>
        <button onClick={onPause}>pause</button>
      </Layout>
    </div>
  );
};
export default Home;
