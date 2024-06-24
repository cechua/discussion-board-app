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
} from '@nextui-org/react';
import HeaderProfile from './users/headerProfile';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <Navbar
      maxWidth="full"
      height="4rem"
      isBordered
      className="shadow mb-4"
      classNames={{ wrapper: 'px-2 xl:px-6' }}
    >
      <NavbarBrand>
        <Link href="/" className="font-bold text-2xl">
          Discussion Board
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden sm:flex">
        <Input type="text" placeholder="searchinputhere" />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <Button>Create new post </Button>
        <HeaderProfile />
      </NavbarContent>

      <NavbarContent justify="center" className="flex sm:hidden">
        <Popover placement="bottom">
          <PopoverTrigger>
            {/*TODO: Change to search icon */}
            <Button>Search</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Input type="text" placeholder="searchinputhere" />
          </PopoverContent>
        </Popover>
      </NavbarContent>

      <NavbarContent justify="end" className="flex sm:hidden">
        <NavbarMenuToggle
          aria-label={isSearchOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="flex">
        <HeaderProfile />
        <Button>Create new post </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
