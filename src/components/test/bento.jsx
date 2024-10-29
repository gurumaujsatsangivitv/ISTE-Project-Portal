import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconWorldWww,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            i === 0
              ? "md:col-span-2 md:row-span-2 bg-white" // RoomEase box
              : i === 1
              ? "md:col-span-2 bg-white" // Digital Revolution box
              : i === 2
              ? "md:col-span-1 md:row-span-1 bg-white" // Box 1
              : i === 3
              ? "md:col-span-1 md:row-span-1 bg-white" // Box 2
              : i === 4
              ? "md:col-span-1 md:row-span-2 bg-white"
              : i === 5
              ? "md:col-span-1 md:row-span-1 bg-white"
              : i === 6
              ? "md:col-span-2 md:row-span-2 bg-white"
              : i === 7
              ? "md:col-span-1 md:row-span-1 bg-white"  
              : i === 8
              ? "md:col-span-2 md:row-span-2 bg-white"
              : i === 9
              ? "md:col-span-2 md:row-span-1 bg-white"
              : i === 10
              ? "md:col-span-2 md:row-span-1 bg-white" 
              : i === 11
              ? "md:col-span-2 md:row-span-1 bg-white"
              : i === 12
              ? "md:col-span-2 md:row-span-2 bg-white" 
              : i === 13
              ? "md:col-span-2 md:row-span-1 bg-white"
              : i === 14
              ? "md:col-span-2 md:row-span-2 bg-white"
              : i === 15
              ? "md:col-span-1 md:row-span-1 bg-white" 
              : i === 16
              ? "md:col-span-1 md:row-span-2 bg-white"
              : i === 17
              ? "md:col-span-1 md:row-span-1 bg-white"   // Box 2 // Box 2
              :""
          }
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ color }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${color}`} />
);

const items = [
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
  },
  
  
  
  
];

export default BentoGridDemo;
