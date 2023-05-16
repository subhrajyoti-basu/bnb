import React from "react";
import Container from "../Container";
import H4 from "../ui/h4";
import SearchM from "./searchM";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white z-10 ">
      <div className="py-4 border-b">
        <Container>
          <div
            className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <H4>BnB</H4>
            <SearchM />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
