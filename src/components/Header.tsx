import { Link } from "@tanstack/react-router";

const NavList = [
  { to: "/", label: "Home" },
  { to: "/wishes", label: "Wishes" },
  { to: "/split-text", label: "Split Text" },
];

export default function Header() {
  return (
    <header className="flex justify-between gap-2 px-4 py-2 glass-effect fixed top-0 left-0 right-0 z-10 h-14 items-center">
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
      className="rounded px-4 py-2 hover:text-maroon hover:underline font-serif uppercase font-medium"
    >
      {children}
    </Link>
  );
};
