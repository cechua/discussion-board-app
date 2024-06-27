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
import { useState } from 'react';
import { AddIcon } from './common/SvgIcons/AddIcon';

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
        <Input type="text" placeholder="searchinputhere" />
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
      <NavbarMenu className="flex">
        <HeaderProfile />
        <Link href="/posts/new" onClick={() => setIsMenuOpen(false)}>
          <Button
            color="primary"
            variant="bordered"
            startContent={<AddIcon fill="#006FEE" filled />}
          >
            Create new post
          </Button>
        </Link>
      </NavbarMenu>

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
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
