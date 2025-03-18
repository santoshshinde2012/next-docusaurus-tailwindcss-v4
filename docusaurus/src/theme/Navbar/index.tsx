import React, { type ReactNode } from "react";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";
import { useLocation } from "@docusaurus/router";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  const location = useLocation();
  // Hide Navbar on the home page
  if (location.pathname === "/") {
    return null; // Returning null hides the Navbar
  }
  return (
    <>
      <Navbar {...props} />
    </>
  );
}
