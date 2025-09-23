import { useScroll } from "motion/react";
import { useRef } from "react";
import WishCard from "./WishCard";

const wishes = [
  {
    id: 1,
    name: "Alice",
    message: "Wishing you a lifetime of love and happiness!",
    rotate: 14,
  },
  {
    id: 2,
    name: "Bob",
    message:
      "Congratulations on your wedding! May your love grow stronger each day.",
    rotate: -16,
  },
  {
    id: 3,
    name: "Charlie",
    message:
      "Best wishes for a wonderful journey as you build your new lives together.",
    rotate: 10,
  },
  {
    id: 4,
    name: "Diana",
    message:
      "May your marriage be filled with joy, laughter, and endless love.",
    rotate: 4,
  },
  {
    id: 5,
    name: "Owner",
    message: "Leave a wish",
    rotate: 4,
    isAction: true,
  },
];

const WishesList = () => {
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <div
      ref={container}
      className="relative mt-20 flex min-h-screen w-full flex-col items-center justify-start"
    >
      <h1
        ref={header}
        className="text-maroon sticky top-20 -ml-[5%] w-full font-serif text-6xl font-medium text-wrap uppercase"
        style={{
          marginBottom: `calc(100vh - ${header.current?.offsetHeight}px)`,
        }}
      >
        Leave
        <br /> &nbsp; a<br /> &nbsp;&nbsp;&nbsp;{" "}
        <i className="font-bold">blessing</i>
      </h1>
      {wishes.map((w, idx) => {
        const targetScale = 1 - (wishes.length - idx) * 0.05;
        return (
          <WishCard
            key={idx}
            wish={w.message}
            name={w.name}
            index={idx}
            targetScale={targetScale}
            range={[idx * 0.25, 1]}
            progression={scrollYProgress}
            rotation={w.rotate}
            topIndent={header.current?.offsetHeight || 0}
            isAction={w.isAction}
          />
        );
      })}
      {/* <div className="h-[50vh]"></div> */}
    </div>
  );
};

export default WishesList;
