import { Icons } from "./Icons";

export default function Footer() {
  return (
    <footer className="max-w-[900px] mx-auto px-6 py-6 pb-10 border-t border-[#ECEAE4] flex justify-between items-center">
      <p className="text-xs text-[#bbb]">
        © {new Date().getFullYear()} Lafia Adam Bagri
      </p>
      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/Yerima18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ccc] hover:text-[#1a1a1a] transition-colors"
        >
          {Icons.github}
        </a>
        <a
          href="https://www.linkedin.com/in/lafia-adam-bagri-1b0a73263/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ccc] hover:text-[#1a1a1a] transition-colors"
        >
          {Icons.linkedin}
        </a>
      </div>
    </footer>
  );
}
