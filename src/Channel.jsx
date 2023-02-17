export const Channel = (props) => {
  const { channel } = props;
  return (
    <div
      className="flex shadow-xl shadow-slate-500 overflow-hidden rounded-2xl"
      key={channel.id}
    >
      <img src={`${channel.image}`} width="150" />
      <div style={{ backgroundColor: `#${channel.color}` }}>
        <div className="flex flex-col h-full justify-center mx-4">
          <div className="text-xl mb-4 ml-4 ">{channel.name}</div>
          <audio controls>
            <source src={`${channel.liveaudio.url}`} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};
