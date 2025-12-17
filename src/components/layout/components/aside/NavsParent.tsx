import Navs from "./Navs";
const items = [
  {
    iconId: "#home-icon",
    title: "Dashboard",
    href: "/",
  },
  {
    iconId: "#transactions-icon",
    title: "Transactions",
    href: "/Transactions",
  },
  {
    iconId: "#user-icon",
    title: "Accounts",
    href: "/Accounts",
  },
  {
    iconId: "#investments-icon",
    title: "Investments",
    href: "/Investments",
  },
  {
    iconId: "#Credit-Cards-icon",
    title: "Credit-Cards",
    href: "/Credit-Cards",
  },
  {
    iconId: "#Loans-icon",
    title: "Loans",
    href: "/Loans",
  },
  {
    iconId: "#Services-icon",
    title: "Services",
    href: "/Services",
  },
  {
    iconId: "#My-Privileges-icon",
    title: "My Privileges",
    href: "/My-Privileges",
  },
  {
    iconId: "#settings-icon",
    title: "Setting",
    href: "/Setting",
  },
];
export default function NavsParent() {
  return (
    <>
      {items.map((nav, i) => {
        return (
          <Navs key={i} iconId={nav.iconId} title={nav.title} href={nav.href} />
        );
      })}
    </>
  );
}
