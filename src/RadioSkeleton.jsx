import Skeleton from "react-loading-skeleton";

const RadioSkeleton = (props) => {
  const { cards } = props;
  return Array(cards)
    .fill(0)
    .map((i) => (
      <div
        key={i}
        className="flex flex-wrap w-[482px] h-full overflow-hidden rounded-2xl shadow-xl shadow-slate-500"
      >
        <div className="mr-4">
          <Skeleton width={150} height={150} />
        </div>
        <div className="flex-1 my-12 mr-4">
          <Skeleton count={2} />
        </div>
      </div>
    ));
};

export default RadioSkeleton;
