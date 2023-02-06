import React from "react";
import Logo from '@/components/Elements/Navigation/Logo';
import MenuLinks from "@/components/Elements/Navigation/MenuLinks";
import MenuToggle from "@/components/Elements/Navigation/MenuToggle";
import NavBarContainer from "@/components/Elements/Navigation/NavBarContainer";
import ToggleLayout from "@/components/Elements/Navigation/ToggleLayout";

export default function Header(props: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>

      <Logo w="100px" />
      <MenuLinks isOpen={isOpen} />
      <ToggleLayout />
      <MenuToggle toggle={toggle} isOpen />

    </NavBarContainer>
  );
}
