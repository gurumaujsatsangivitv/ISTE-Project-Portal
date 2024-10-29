import React, { useState, useEffect } from "react";
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
import { Search } from "lucide-react";

const filters = ["All Projects", "Web", "AI", "App", "Electrical"];

export function BentoGridDemo() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = items.filter((item) => {
    const matchesFilter = activeFilter === "All Projects" ? true : item.tags.includes(activeFilter);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto">
<div className="sticky top-0 z-10 bg-white flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between items-center mb-8 py-4">         <nav className="flex items-center space-x-8">
          {filters.map((filter) => (
            <a
              key={filter}
              href="#"
              onClick={(e) => handleFilterClick(filter, e)}
              className={`text-xl relative no-underline transition-all duration-200
                ${activeFilter === filter 
                  ? "bg-blue-100 pb-1 border-b-2 border-blue-400" 
                  : "hover:border-b-2 hover:border-gray-200 pb-1"}`}
            >
              {filter}
            </a>
          ))}
        </nav>
        <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5"  />

        <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-black pr-4 py-2 w-full md:w-64 rounded-lg border border-transparent focus:border-b-2 and focus:border-black-500 placeholder-black bg-transparent"
          />
        </div>
      </div>
      <BentoGrid>
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`transition-opacity duration-300 ${
              i === 0
                ? "md:col-span-2 md:row-span-2 bg-white"
                : i === 1
                ? "md:col-span-2 bg-white"
                : i === 2
                ? "md:col-span-1 md:row-span-1 bg-white"
                : i === 3
                ? "md:col-span-1 md:row-span-1 bg-white"
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
                ? "md:col-span-1 md:row-span-1 bg-white"
                : ""
            }`}
          />
        ))}
      </BentoGrid>
    </div>
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
    tags: ["Web"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
    tags: ["App"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["App"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
    tags: ["Web"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
    tags: ["Web"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["App"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["App"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
    tags: ["Web"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconWorldWww className="h-5 w-5 text-white" />,
    tags: ["Web"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["App"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["App"],
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  {
    title: "RoomEase",
    header: <Skeleton color="bg-neutral-200 dark:bg-neutral-900" />,
    icon: <IconFileBroken className="h-5 w-5 text-white" />,
    tags: ["Electrical"],
  },
  // ... rest of the items array remains the same
];

export default BentoGridDemo;