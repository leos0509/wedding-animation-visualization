import { Link } from "@tanstack/react-router";

const NavList = [
  { to: "/", label: "Home" },
  { to: "/wishes", label: "Wishes" },
  { to: "/split-text", label: "Split Text" },
  { to: "/nav-menu", label: "Nav Menu" },
];

export default function Header() {
  return (
    <header className="glass-effect fixed top-0 right-0 left-0 z-10 flex h-14 max-w-screen gap-2 overflow-x-auto overflow-y-hidden px-4 py-2">
      <nav className="flex flex-row gap-2">
        {NavList.map(({ to, label }) => (
          <NavButton key={to} to={to}>
            {label}
          </NavButton>
        ))}
      </nav>
    </header>
  );
}

type NavButtonProps = {
  to: string;
  children: React.ReactNode;
};

const NavButton = ({ to, children }: NavButtonProps) => {
  return (
    <Link
      to={to}
      className="hover:text-maroon rounded px-4 py-2 font-serif font-medium text-nowrap uppercase hover:underline"
    >
      {children}
    </Link>
  );
};
