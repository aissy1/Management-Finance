import { RiSearchLine } from "react-icons/ri";

export default async function SearchBar() {
  return (
    <div className="flex flex-shrink-0 w-3/4 rounded-md border border-font">
      <input
        className="peer block w-full rounded-md bg-primary py-[9px] pl-10 text-sm outline-2 outline-brown placeholder:text-brown "
        type="text"
        placeholder="Search..."
      />
      <RiSearchLine className="absolute h-[20px] w-[20px] -translate-y-[-7px] -translate-x-[-10px] text-brown peer-focus:text-brown" />
    </div>
  );
}
