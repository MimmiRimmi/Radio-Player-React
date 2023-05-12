export const Channel = (props) => {
  const { channel } = props;
  return (
    <div
      className="flex shadow-xl shadow-slate-500 overflow-hidden rounded-2xl"
      key={channel.id}
    >
      <img src={`${channel.image}`} className="w-[100px] md:w-[150px]" />
      <div style={{ backgroundColor: `#${channel.color}` }}>
        <div className="flex flex-col h-full justify-center mx-2 md:mx-4 mb-4">
          <div className="text-xl mb-4 ml-4 ">{channel.name}</div>
          <audio controls style={{ width: "250px" }}>
            <source src={`${channel.liveaudio.url}`} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};
