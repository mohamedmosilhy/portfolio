import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              className={className}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
