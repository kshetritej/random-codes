const Navbar = () => {
  return (

    <div className=" flex justify-between">
      <div className="navitems-group1 flex gap-2 items-center">
        <div className="logo text-3xl font-bold mr-5">Meetcode</div>
        <ul className="flex gap-2">
          <li>Explore</li>
          <li>Problems</li>
          <li>Discuss</li>
        </ul>
      </div>

      <div className="navitems-group2 flex items-center">
        <ul className="flex gap-1">
          <li>Register</li>
          or
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
