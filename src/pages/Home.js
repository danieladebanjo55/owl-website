import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Playmusic from "../components/Playmusic";


function Home() {
  const [participants, setParticipants] = useState(0);
  const [bagPrice, setBagPrice] = useState(0);

  const handleConnectWallet = () => {
    // Update the participants count
    setParticipants((prevParticipants) => prevParticipants + 1);
    // Increase the bag price by $1 for each new participant
    setBagPrice((prevBagPrice) => prevBagPrice + 1);
  };
  return (
    <>
      <Header onConnectWallet={handleConnectWallet} />
      <Banner participants={participants} bagPrice={bagPrice} />
    </>
  );
}
export default Home;
