import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "icons/Logo";

import Link from "next/link";
import Text from "components/Text";

export const Header = () => {
  return (
    <Popover className="relative">
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:mb-12">
        <div className="flex items-center justify-between py-4 md:py-6 md:space-x-10">
          <div className="flex">
            <Link href="/" aria-label="Go to home page">
              <Logo />
            </Link>
          </div>
          <div className="md:hidden h-6 w-6">
            <Popover.Button className="inline-flex items-center justify-center rounded-md text-foreground hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-8 lg:space-x-10 md:flex relative top-[2px]"
            role="navigation"
          >
            <Link href="/pizza">
              <Text>Pizza</Text>
            </Link>
            <Link href="/bread">
              <Text>Bread</Text>
            </Link>
            <Link href="/food-and-drinks">
              <Text>Food & Drinks</Text>
            </Link>
            <Link href="/guides">
              <Text>Guides</Text>
            </Link>
            <Link href="https://www.instagram.com/sebbebakes">
              <Text>Instagram</Text>
            </Link>
          </Popover.Group>
        </div>
      </header>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link
                    href="/"
                    aria-label="Go to home page"
                    className="focus-visible:outline-none"
                  >
                    <Text variant="h4">Sebbe bakes</Text>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6" role="navigation">
                  <Link
                    href="/pizza"
                    className="-m-3 flex items-center p-3 hover:bg-gray-50"
                  >
                    <Text>Pizza</Text>
                  </Link>
                  <Link
                    href="/bread"
                    className="-m-3 flex items-center p-3 hover:bg-gray-50"
                  >
                    <Text>Bread</Text>
                  </Link>
                  <Link
                    href="/food-and-drinks"
                    className="-m-3 flex items-center p-3 hover:bg-gray-50"
                  >
                    <Text>Food & Drinks</Text>
                  </Link>
                  <Link
                    href="/guides"
                    className="-m-3 flex items-center p-3 hover:bg-gray-50"
                  >
                    <Text>Guides</Text>
                  </Link>
                  <Link
                    href="https://www.instagram.com/sebbebakes/"
                    className="-m-3 flex items-center p-3 hover:bg-gray-50"
                  >
                    <Text>Instagram</Text>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
