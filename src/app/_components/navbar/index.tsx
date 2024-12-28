import ThemeSwitcher from "../ui/theme";

export default function Navbar() {
  return (
    <header className="pb-4 flex items-center justify-between">
      <h2 className="font-extrabold text-3xl">Croissant Software</h2>

      <ThemeSwitcher />
    </header>
  );
}
