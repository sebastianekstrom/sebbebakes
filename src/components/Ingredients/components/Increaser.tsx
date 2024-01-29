import React, { useState, useRef, useEffect } from "react";
import Text from "components/Text";
import pluralize from "pluralize";
import { Plus } from "icons/Plus";
import { Minus } from "icons/Minus";

interface Props {
  onDecrease: () => void;
  onIncrease: () => void;
  yields: number;
  ingredientSuffix: string;
}

export const Increaser = ({
  onDecrease,
  onIncrease,
  yields,
  ingredientSuffix,
}: Props) => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [yieldWidth, setYieldWidth] = useState(0);

  useEffect(() => {
    if (!inputRef1?.current || !inputRef2?.current) {
      return;
    }

    const ref1Width = inputRef1?.current.getBoundingClientRect().width;
    const ref2Width = inputRef2?.current.getBoundingClientRect().width;
    const largestOne = Math.max(ref1Width, ref2Width);
    const roundedAndMargin = Math.ceil(largestOne) + 16;

    setYieldWidth(roundedAndMargin);
  }, []);

  return (
    <div className="flex justify-between mb-8 items-center flex-col md:flex-row">
      <Text variant="h3">Ingredients</Text>
      <div className="flex items-center mt-2 md:mt-0">
        <button
          id="TEST_ID_DECREASE_AMOUNT"
          data-testid="TEST_ID_DECREASE_AMOUNT"
          className="flex items-center justify-center border-2 border-outline rounded-full text-regular w-[40px] h-[40px] hover:bg-outline transition"
          onClick={onDecrease}
          aria-label="Decrease amount"
        >
          <Minus />
        </button>
        <div
          className="text-center"
          id="TEST_ID_YIELD"
          style={{
            minWidth: `${yieldWidth}px`,
          }}
        >
          <Text>
            <span
              className="invisible fixed overflow-hidden top-[-30px]"
              ref={inputRef1}
            >{`${yields - 1} ${pluralize(ingredientSuffix, yields - 1)}`}</span>
            <span>{`${yields} ${pluralize(ingredientSuffix, yields)}`}</span>
            <span
              className="invisible fixed overflow-hidden top-[-30px]"
              ref={inputRef2}
            >{`${yields + 12} ${pluralize(
              ingredientSuffix,
              yields + 12
            )}`}</span>
          </Text>
        </div>
        <button
          id="TEST_ID_INCREASE_AMOUNT"
          data-testid="TEST_ID_INCREASE_AMOUNT"
          className="flex items-center justify-center border-2 border-outline rounded-full text-regular w-[40px] h-[40px] hover:bg-outline transition"
          onClick={onIncrease}
          aria-label="Increase amount"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};
