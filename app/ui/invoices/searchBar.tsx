"use client";
import { RiSearchLine } from "react-icons/ri";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    console.log(`Searching . . . ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex flex-shrink-0 w-3/4 rounded-md border border-font">
      <input
        className="peer block w-full rounded-md bg-primary py-[9px] pl-10 text-sm outline-2 outline-brown placeholder:text-brown "
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <RiSearchLine className="absolute h-[20px] w-[20px] -translate-y-[-7px] -translate-x-[-10px] text-brown peer-focus:text-brown" />
    </div>
  );
}
