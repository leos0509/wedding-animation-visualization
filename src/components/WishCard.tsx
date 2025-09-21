import { Plus } from "iconoir-react";
import { motion, MotionValue, useTransform } from "motion/react";
import { useRef } from "react";

type WishCardProps = {
  wish: string;
  name: string;
  rotation?: number;
  index: number;
  range: [number, number];
  progression: MotionValue<number>;
  targetScale: number;
  topIndent: number;
  isAction?: boolean;
};

const WishCard = ({
  wish,
  name,
  rotation,
  index,
  progression,
  targetScale,
  range,
  topIndent,
  isAction = false,
}: WishCardProps) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progression, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen w-full items-center justify-center"
      style={{
        marginTop: index === 0 ? `-${topIndent}px` : undefined,
      }}
    >
      <motion.div
        className="bg-cherry relative -top-1/4 flex aspect-square w-full max-w-[90%] rounded-sm p-3 shadow md:max-w-100"
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
          scale,
        }}
      >
        <div className="bg-cotton flex h-full w-full flex-col items-center justify-center gap-2 rounded-xs p-4 shadow-sm">
          {!isAction ? (
            <>
              <p className="font-serif text-2xl">"{wish}"</p>
              <h6 className="font-semibolds text-maroon w-full text-right font-serif text-3xl italic">
                - {name}
              </h6>
            </>
          ) : (
            <>
              <p className="font-serif text-4xl font-semibold">{wish}</p>
              <button className="bg-cherry text-cotton flex size-8 cursor-pointer items-center justify-center rounded-full shadow hover:scale-105 active:scale-95 md:size-10">
                <Plus className="size-6" />
              </button>
              <motion.img
                initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 10, scale: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                viewport={{ once: true }}
                src="/imgs/letter.png"
                alt="letter"
                className="absolute bottom-0 -left-2 -z-10 translate-y-[50%] scale-120"
              />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WishCard;
