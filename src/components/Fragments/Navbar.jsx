import { Link, NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon"; // Pastikan file dan komponen Icon ada
import Logo from "../Elements/Logo";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bill",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expenses",
    },
    {
      id: "goal",
      link: "/goal",
      icon: <Icon.Goal />,
      label: "Goal",
    },
    {
      id: "setting",
      link: "/setting",
      icon: <Icon.Setting />,
      label: "Setting",
    },
  ];

  return (
    <div className="bg-defaultBlack">
    <nav className="sticky-top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-10">
          <Logo variant="text-white text-sm sm:text-2x1" />
        </div>
        {menus.map((menu) => (
          <NavLink
            key={menu.id}
            to={menu.link}
            className={({ isActive }) =>
              isActive
                ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
            }
          >
            <div className="mx-auto sm:mx-0">{menu.icon}</div>
            <div className="ms-3 hidden sm:block">{menu.label}</div>
          </NavLink>
        ))}
      </div>
      <div className="sticky bottom-12">
        {/* Bagian Logout */}
        <Link to="/logout">
          <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
            <div className="mx-auto sm:mx-0">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
        </Link>
        <div className="border-b my-10 border-b-special-bg"></div>
        {/* Bagian Profil */}
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0 self-center">
            <img src="images/profile.png" alt="Profile" />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold">Username</div>
            <div className="text-xs">View Profile</div>
          </div>
          <div className="hidden sm:block self-center justify-end">
            <Icon.KebabMenu />
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
