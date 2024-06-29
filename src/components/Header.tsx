'use client';

import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from '@nextui-org/react';
import HeaderProfile from './users/headerProfile';
import { Suspense, useState } from 'react';
import { AddIcon } from './common/SvgIcons/AddIcon';
import SearchInput from './SearchInput';
import { SearchIcon } from './common/SvgIcons/SearchIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      maxWidth="full"
      height="4rem"
      isBordered
      className="shadow"
      classNames={{ wrapper: 'px-2 xl:px-6' }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/" className="font-bold text-2xl">
          Discussion Board
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden sm:flex">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <Link href="/posts/new" onClick={() => setIsMenuOpen(false)}>
          <Button
            color="primary"
            variant="bordered"
            startContent={<AddIcon fill="#006FEE" filled />}
          >
            Create new post
          </Button>
        </Link>
        <HeaderProfile />
      </NavbarContent>

      {/*Mobile View */}

      <NavbarContent justify="end" className="flex gap-6 sm:hidden">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button variant="light" isIconOnly className="bg-transparent">
              <SearchIcon filled fill="#006FEE" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Suspense>
              <SearchInput />
            </Suspense>
          </PopoverContent>
        </Popover>
        <Link href="/posts/new" onClick={() => setIsMenuOpen(false)}>
          <AddIcon fill="#006FEE" filled />
        </Link>
        <HeaderProfile />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
