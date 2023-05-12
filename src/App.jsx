import { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { Channel } from "./Channel";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RadioSkeleton from "./RadioSkeleton";

function App() {
  const [radio, setRadio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchRadioPlayer = () => {
    Axios.get("https://api.sr.se/api/v2/channels?format=json&size=100").then(
      (res) => {
        setTimeout(() => {
          setRadio(res.data.channels);
          setLoading(false);
        }, 1000);
      }
    );
  };

  const renderChannels = () => {
    if (!loading) {
      const filteredList = radio.filter((channel) => {
        const name = channel.name.toLowerCase();
        return name.includes(search.toLowerCase());
      });
      return filteredList.map((channel) => {
        return <Channel channel={channel} />;
      });
    } else {
      return <div className=" bg-slate-300 h-screen"></div>;
    }
  };

  useEffect(() => {
    fetchRadioPlayer();
  }, []);

  return (
    <SkeletonTheme baseColor="#00FFFF" highlightColor="#7fffd4">
      <div className=" bg-slate-300 h-full min-h-screen">
        <div>
          <h1 className="flex pl-20 text-white text-2xl font-bold tracking-widest py-4 bg-slate-500 w-screen shadow-lg shadow-slate-600 ">
            Sveriges Radio
          </h1>
          <input
            className="ml-20 mt-8 px-6 py-2 rounded-2xl"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Sök kanal..."}
          />
        </div>

        <div className="flex flex-wrap md:ml-20 mt-14 gap-6">
          {loading && <RadioSkeleton cards={52} />}
          {renderChannels()}
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default App;
