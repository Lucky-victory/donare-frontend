import { Fragment} from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
  const linkClassNames='text-base font-medium text-gray-400 hover:text-[var(--primary-color-tint)]'
  return (
    <Popover className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <div className="flex items-center justify-between py-8 md:space-x-10">
          <div className="flex">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <Logo />
            </Link>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-10 md:flex items-center"
          >
            <Link
              className={linkClassNames}
              href="/campaigns" 
            >
              CAMPAIGNS
            </Link>
            <Link
              href="/proposals"
              className={linkClassNames}

            >
              PROPOSALS
            </Link>
            <Link
              href="/join-our-dao"
              className={linkClassNames}

            >
              JOIN OUR DAO
            </Link>
            <ConnectButton
              chainStatus="icon"
            />
          </Popover.Group>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 w-full border border-white z-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6"></div>
            </div>
            <div className="space-y-6 py-6 px-5 w-full">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 ">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  CAMPAIGNS
                </Link>
                <Link
                  href="/"
                  className="text-base font-medium text-gray-200 hover:text-gray-300"
                >
                  NEW CAMPAIGN
                </Link>
              </div>
              {/* why styling a div like a button? */}
              <div className="w-full">
                <div className="long-btn py-2 px-10 text-[#8E8F94] w-full">
                  LAUNCH APP
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const Logo = () => (
  <svg width="205" height="60" viewBox="0 0 205 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M79.38 40V36.52H82.14V22.48H79.38V19H88.02C90.84 19 92.98 19.72 94.44 21.16C95.92 22.58 96.66 24.7 96.66 27.52V31.48C96.66 34.3 95.92 36.43 94.44 37.87C92.98 39.29 90.84 40 88.02 40H79.38ZM86.1 36.4H88.08C89.68 36.4 90.85 35.98 91.59 35.14C92.33 34.3 92.7 33.12 92.7 31.6V27.4C92.7 25.86 92.33 24.68 91.59 23.86C90.85 23.02 89.68 22.6 88.08 22.6H86.1V36.4ZM107.16 40.42C105.68 40.42 104.35 40.12 103.17 39.52C101.99 38.92 101.06 38.05 100.38 36.91C99.7005 35.77 99.3605 34.4 99.3605 32.8V32.32C99.3605 30.72 99.7005 29.35 100.38 28.21C101.06 27.07 101.99 26.2 103.17 25.6C104.35 25 105.68 24.7 107.16 24.7C108.64 24.7 109.97 25 111.15 25.6C112.33 26.2 113.26 27.07 113.94 28.21C114.62 29.35 114.96 30.72 114.96 32.32V32.8C114.96 34.4 114.62 35.77 113.94 36.91C113.26 38.05 112.33 38.92 111.15 39.52C109.97 40.12 108.64 40.42 107.16 40.42ZM107.16 37.06C108.32 37.06 109.28 36.69 110.04 35.95C110.8 35.19 111.18 34.11 111.18 32.71V32.41C111.18 31.01 110.8 29.94 110.04 29.2C109.3 28.44 108.34 28.06 107.16 28.06C106 28.06 105.04 28.44 104.28 29.2C103.52 29.94 103.14 31.01 103.14 32.41V32.71C103.14 34.11 103.52 35.19 104.28 35.95C105.04 36.69 106 37.06 107.16 37.06ZM118.45 40V25.12H122.17V27.07H122.71C122.95 26.55 123.4 26.06 124.06 25.6C124.72 25.12 125.72 24.88 127.06 24.88C128.22 24.88 129.23 25.15 130.09 25.69C130.97 26.21 131.65 26.94 132.13 27.88C132.61 28.8 132.85 29.88 132.85 31.12V40H129.07V31.42C129.07 30.3 128.79 29.46 128.23 28.9C127.69 28.34 126.91 28.06 125.89 28.06C124.73 28.06 123.83 28.45 123.19 29.23C122.55 29.99 122.23 31.06 122.23 32.44V40H118.45ZM141.556 40.42C140.496 40.42 139.546 40.24 138.706 39.88C137.866 39.5 137.196 38.96 136.696 38.26C136.216 37.54 135.976 36.67 135.976 35.65C135.976 34.63 136.216 33.78 136.696 33.1C137.196 32.4 137.876 31.88 138.736 31.54C139.616 31.18 140.616 31 141.736 31H145.816V30.16C145.816 29.46 145.596 28.89 145.156 28.45C144.716 27.99 144.016 27.76 143.056 27.76C142.116 27.76 141.416 27.98 140.956 28.42C140.496 28.84 140.196 29.39 140.056 30.07L136.576 28.9C136.816 28.14 137.196 27.45 137.716 26.83C138.256 26.19 138.966 25.68 139.846 25.3C140.746 24.9 141.836 24.7 143.116 24.7C145.076 24.7 146.626 25.19 147.766 26.17C148.906 27.15 149.476 28.57 149.476 30.43V35.98C149.476 36.58 149.756 36.88 150.316 36.88H151.516V40H148.996C148.256 40 147.646 39.82 147.166 39.46C146.686 39.1 146.446 38.62 146.446 38.02V37.99H145.876C145.796 38.23 145.616 38.55 145.336 38.95C145.056 39.33 144.616 39.67 144.016 39.97C143.416 40.27 142.596 40.42 141.556 40.42ZM142.216 37.36C143.276 37.36 144.136 37.07 144.796 36.49C145.476 35.89 145.816 35.1 145.816 34.12V33.82H142.006C141.306 33.82 140.756 33.97 140.356 34.27C139.956 34.57 139.756 34.99 139.756 35.53C139.756 36.07 139.966 36.51 140.386 36.85C140.806 37.19 141.416 37.36 142.216 37.36ZM154.28 40V25.12H158V26.8H158.54C158.76 26.2 159.12 25.76 159.62 25.48C160.14 25.2 160.74 25.06 161.42 25.06H163.22V28.42H161.36C160.4 28.42 159.61 28.68 158.99 29.2C158.37 29.7 158.06 30.48 158.06 31.54V40H154.28ZM172.427 40.42C170.947 40.42 169.637 40.11 168.497 39.49C167.377 38.85 166.497 37.96 165.857 36.82C165.237 35.66 164.927 34.3 164.927 32.74V32.38C164.927 30.82 165.237 29.47 165.857 28.33C166.477 27.17 167.347 26.28 168.467 25.66C169.587 25.02 170.887 24.7 172.367 24.7C173.827 24.7 175.097 25.03 176.177 25.69C177.257 26.33 178.097 27.23 178.697 28.39C179.297 29.53 179.597 30.86 179.597 32.38V33.67H168.767C168.807 34.69 169.187 35.52 169.907 36.16C170.627 36.8 171.507 37.12 172.547 37.12C173.607 37.12 174.387 36.89 174.887 36.43C175.387 35.97 175.767 35.46 176.027 34.9L179.117 36.52C178.837 37.04 178.427 37.61 177.887 38.23C177.367 38.83 176.667 39.35 175.787 39.79C174.907 40.21 173.787 40.42 172.427 40.42ZM168.797 30.85H175.757C175.677 29.99 175.327 29.3 174.707 28.78C174.107 28.26 173.317 28 172.337 28C171.317 28 170.507 28.26 169.907 28.78C169.307 29.3 168.937 29.99 168.797 30.85Z" fill="white"/>
  <path d="M9 21L49.5333 25.8971L57 58L19.6667 50.3824L9 21Z" fill="#1171CD"/>
  <path d="M14 3L53.6889 8.16176L61 42L24.4444 33.9706L14 3Z" fill="#1171CD"/>
  <path d="M30.6561 39.6012C49.9923 29.4253 47.8435 27.3704 29.1189 17.655L30.2369 33.6159" stroke="white" strokeWidth="2"/>
  </svg>
  
);
