import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import SplitTextAtChar from "./SplitTextAtChar";
import { useNavStore } from "@/stores/navStore";

const navLists = [
  { to: "/", label: "Home" },
  { to: "/wishes", label: "Wishes" },
  { to: "/split-text", label: "Split Text" },
];

const NavMenu = () => {
  const { isOpen, close } = useNavStore();

  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "nav-menu-overlay") {
      close();
    }
  };

  const onNavClick = () => {
    close();
  };

  return (
    <motion.div
      id="nav-menu-overlay"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
      className="glass-effect absolute inset-0 -top-1/2 z-50 flex h-screen w-screen translate-y-1/2 flex-col items-center justify-center"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        {navLists.map(({ to, label }, index) => (
          <Link
            key={index}
            to={to}
            className="hover:text-maroon text-gray-800"
            onClick={onNavClick}
          >
            <SplitTextAtChar
              text={label}
              className="font-serif text-5xl font-medium"
              delay={index * 0.1 + 1.4}
            />
          </Link>
        ))}
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
        onClick={close}
        className="bg-maroon/80 hover:bg-maroon absolute bottom-10 rounded px-4 py-2 font-serif text-white"
      >
        Close
      </motion.button>
    </motion.div>
  );
};

export default NavMenu;
