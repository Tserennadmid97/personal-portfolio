import { FiSun } from "react-icons/fi";

export function Header() {
  return (
    <nav className="">
      <a href="/" className="Personal-Portfolio"></a>
      <ul className="flex justify-end gap-10 mt-1">
        <li>
          <a href="/about">About</a>{" "}
        </li>
        <li>
          <a href="/about">Work</a>{" "}
        </li>
        <li>
          <a href="/about">Testimonials</a>{" "}
        </li>
        <li>
          <a href="/about">Contact</a>{" "}
        </li>
        <FiSun />
        <button className="bg-slate-600 rounded-xl pl-3 pr-3 text-white">
          Download
        </button>
      </ul>
    </nav>
  );
}
