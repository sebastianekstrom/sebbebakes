import React, { useState } from "react";
import Text from "../Text";
import { CheckIcon } from "@heroicons/react/24/outline";

interface Props {
  index: number;
  step: React.ReactNode;
  completable?: boolean;
}

export const Step = ({ index, step, completable }: Props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const onClick = () => {
    if (!completable) {
      return;
    }

    setIsCompleted(!isCompleted);
  };

  return (
    <div key={index} className="mb-8 lg:mb-0 mt-12">
      <div className="flex">
        <div className="flex items-center justify-between self-start">
          <button type="button" onClick={onClick}>
            <Text
              classNames={`w-[40px] h-[40px] bg-pill-background dark:bg-pill-background-dark font-semibold rounded-full flex justify-center items-center !mb-0 transition-opacity ${
                isCompleted ? "opacity-10" : ""
              }`}
            >
              {isCompleted ? (
                <CheckIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                  aria-label="completed"
                />
              ) : (
                index + 1
              )}
            </Text>
          </button>
        </div>
        <div
          className={`ml-4 mt-[2px] lg:max-w-xl transition-opacity ${
            isCompleted ? "opacity-10" : ""
          }`}
        >
          {step}
        </div>
      </div>
    </div>
  );
};
