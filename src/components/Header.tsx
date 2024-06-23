import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
} from '@nextui-org/react';
import HeaderProfile from './users/headerProfile';

const Header = () => {
  return (
    <Navbar maxWidth="full" height="4rem" isBordered className="shadow mb-4">
      <NavbarBrand>
        <Link href="/" className="font-bold text-2xl">
          Discussion Board
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input type="text" placeholder="searchinputhere" />
      </NavbarContent>

      <NavbarContent justify="end">
        <Button>Create new post </Button>
        <HeaderProfile />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
