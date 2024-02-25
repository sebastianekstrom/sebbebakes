import React, { useState } from "react";

import { Ingredient } from "types/recipe";
import Text from "components/Text";
import Tooltip from "components/Tooltip";
import { getBakersPercentage } from "../utils/getBakersPercentage";

interface Props {
  item: Ingredient;
  value: number;
  dontPrintValue: boolean;
  displayPercentageButton: boolean;
  showPercentage: boolean;
  totalFlourAmount: number;
}

export const Row = ({
  item,
  value,
  dontPrintValue,
  displayPercentageButton,
  showPercentage,
  totalFlourAmount,
}: Props) => {
  const [done, setDone] = useState(false);

  const onMarkDone = () => {
    setDone(!done);
  };

  return (
    <li
      className={`flex justify-between mb-1 transition-opacity ${
        done ? "opacity-10" : ""
      }`}
      onClick={onMarkDone}
      role="button"
    >
      <div className={item.tooltip ? "flex flex-row items-center" : ""}>
        <Text classNames="font-semibold">{item.label}</Text>
        {item.tooltip && (
          <span className="ml-2 flex items-center">
            <Tooltip value={item.tooltip} />
          </span>
        )}
      </div>
      <Text>
        {item.excludeValue ? "" : value}
        {dontPrintValue ? "" : item.valueSuffix || "g"}

        {displayPercentageButton && showPercentage && !item.excludeValue ? (
          <span className="font-normal">
            {getBakersPercentage({
              itemWeight: item.value,
              flourWeight: totalFlourAmount,
            })}
          </span>
        ) : (
          ""
        )}
      </Text>
    </li>
  );
};
