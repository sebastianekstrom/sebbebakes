import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "components/Text";
import { truncateString } from "utils/truncateString";
import { Recipe } from "types/recipe";

interface ArticleProps {
  first?: boolean;
  recipe: Recipe;
  type: "featured" | "square" | "rectangle";
}

export const Article = ({ recipe, first, type }: ArticleProps) => {
  if (type === "featured") {
    return (
      <article className="mb-12 lg:mb-0">
        <Link
          href={recipe.url}
          aria-label={`Go to ${recipe.title}`}
          tabIndex={-1}
        >
          <Image
            src={recipe.thumbnails.hero}
            alt=""
            className="w-full h-auto lg:w-[613px] object-cover"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 40vw,
            40vw"
            quality={100}
          />
        </Link>
        <Link href={recipe.category.path}>
          <Text classNames="!text-cta font-medium mt-4">
            {recipe.category.label}
          </Text>
        </Link>
        <Link href={recipe.url}>
          <Text variant="h3" classNames="mt-2">
            {recipe.title}
          </Text>
        </Link>
        <Text classNames="mt-2">{truncateString(recipe.description, 180)}</Text>
      </article>
    );
  }

  if (type === "rectangle") {
    return (
      <article className="flex flex-col lg:block mb-12 lg:mb-0">
        <Link
          href={recipe.url}
          aria-label={`Go to ${recipe.title}`}
          tabIndex={-1}
        >
          <Image
            src={recipe.thumbnails.wide}
            alt=""
            className="w-full h-auto lg:w-[408px] lg:h-[196px] object-cover"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            quality={100}
          />
        </Link>
        <Link href={recipe.category.path}>
          <Text classNames="!text-cta font-medium mb-2 mt-2">
            {recipe.category.label}
          </Text>
        </Link>
        <Link href={recipe.url}>
          <Text variant="h4">{recipe.title}</Text>
        </Link>
        <Text>{truncateString(recipe.description, 130)}</Text>
      </article>
    );
  }

  return (
    <div className={`${first ? "" : "mt-6"}  mb-12 lg:mb-0`}>
      <article className="flex mb-6 flex-col lg:flex-row">
        <Link
          href={recipe.url}
          className="w-full h-full lg:w-[204px] lg:h-[204px] lg:min-w-[204px] lg:min-h-[204px]"
          aria-label={`Go to ${recipe.title}`}
          tabIndex={-1}
        >
          <Image
            src={recipe.thumbnails.square}
            alt=""
            className="w-full h-full lg:w-[204] lg:h-[204] object-cover"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 25vw,
            25vw"
            quality={100}
          />
        </Link>
        <div className="lg:ml-6 flex flex-col">
          <Link href={recipe.category.path}>
            <Text classNames="!text-cta font-medium mb-2 mt-2 lg:mt-0">
              {recipe.category.label}
            </Text>
          </Link>
          <Link href={recipe.url}>
            <Text variant="h4">{recipe.title}</Text>
          </Link>
          <Text>{truncateString(recipe.description, 140)}</Text>
        </div>
      </article>
      <span className="bg-separator dark:bg-separator-dark lg:h-[2px] w-full block" />
    </div>
  );
};
