"use client";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: IoHomeOutline },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: LiaFileInvoiceDollarSolid,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const Linkicon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 bg-primary p-3 tracking-widest text-md font-medium hover:bg-font hover:text-brown md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-black text-secondary": pathname === link.href,
              }
            )}
          >
            <Linkicon className="h-6 w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
