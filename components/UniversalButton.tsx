export default function UniversalButton({ text, href, ariaLabel }) {
  return (
    <a
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href={href}
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {text}
    </a>
  );
}
