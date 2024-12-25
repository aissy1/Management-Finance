import Link from "next/link";
import { BiBarChartAlt } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import NavLinks from "./nav-links";

export default async function sideNav() {
  return (
    <div className="flex h-full flex-col border-r-2 border-r-brown rounded-r-xl bg-primary gap-2 overflow-hidden top-0">
      <Link
        className="mb-1 flex h-20 items-end justify-start bg-brown p-2 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 text-white md:w-40">
          <BiBarChartAlt className="h-1/3 w-1/3" />
        </div>
      </Link>
      <div className="flex grow flex-row justify-center md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow bg-primary md:block"></div>
        <form
        //   action={async () => {
        //     "use server";
        //     await signOut();
        //   }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-b-lg bg-brown p-3 text-sm text-white font-medium hover:bg-font hover:text-brown md:flex-none md:justify-start md:p-2 md:px-3">
            <VscSignOut className="h-6 w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
