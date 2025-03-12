import React from "react";
import Pill from "./Pill";

const PillList = ({ title, pills = [], activeFilters = {}, onPillClick }) => {
  return (
    <div className="mb-4">
      {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
      <div className="flex gap-2 flex-wrap">
        {pills.map((pill, index) => {
          const isActive = activeFilters[pill.category]?.includes(pill.label);
          return (
            <Pill
              key={index}
              label={pill.label}
              active={isActive}
              onClick={() => onPillClick && onPillClick(pill)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PillList;

