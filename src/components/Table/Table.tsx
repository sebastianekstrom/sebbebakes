import React, { useState, useCallback, useMemo } from "react";
import { roundValue } from "utils/roundValue";

import { Ingredient } from "types/recipe";
import Text from "components/Text";
import { Row } from "./components/Row";
import { getTotalFlourAmount } from "./utils/getTotalFlourAmount";

interface Props {
  items: Ingredient[];
  multiplier: number;
}

export const Table = ({ items, multiplier }: Props) => {
  const [showPercentage, setShowPercentage] = useState(false);

  const totalFlourAmount = useMemo(() => getTotalFlourAmount(items), [items]);
  const displayPercentageButton = totalFlourAmount !== 0;

  const toggleBakersPercentage = useCallback(() => {
    setShowPercentage((prevShowPercentage) => !prevShowPercentage);
  }, []);

  return (
    <div className="flex flex-col">
      <ul>
        {items.map((item, i) => {
          const value = item.shouldNotBeDuplicated
            ? item.value
            : roundValue(item.value * multiplier);
          const dontPrintValue = item.valueSuffix === false;
          return (
            <Row
              key={i}
              displayPercentageButton={displayPercentageButton}
              item={item}
              value={value}
              dontPrintValue={dontPrintValue}
              totalFlourAmount={totalFlourAmount}
              showPercentage={showPercentage}
            />
          );
        })}
      </ul>
      {displayPercentageButton ? (
        <div className="ml-auto">
          <button
            onClick={toggleBakersPercentage}
            data-testid="BAKERS_PERCENTAGE"
            role="button"
            className="mt-2 rounded-full text-foreground bg-pill-background dark:bg-pill-background-dark py-2 px-4"
          >
            <Text variant="caption">
              {showPercentage ? "Hide bakers %" : "Show bakers %"}
            </Text>
          </button>
        </div>
      ) : null}
    </div>
  );
};
