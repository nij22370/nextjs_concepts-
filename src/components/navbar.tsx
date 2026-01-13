import NavSearch from "./nav-search";
import NavLinks from "./nav-links";

const Navbar = () => {
  console.log("Navbar rendering");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

export default Navbar;
//it is ercommended that wes should put the client component as low as possible inthe tree if we msk this client component all of it's clildern will become the client component like nav links and nav serarch ,so we show use the client component in the low tree to take the advantage of the server component
