export default function Button({ children, className, href }) {
  return (
    <a
      className={`
        text-gray-800 bg-yellow-500
        font-semibold hover:no-underline
        inline-flex gap-3 items-center justify-center
        px-6 py-3 rounded-full group
        group hover:pr-0 transition-all duration-200
        ${className}
      `}
      href={href}
    >
      {children}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6 group-hover:translate-x-3 transition:translate duration-200 flex-none"
      >
        <path
          stroke-linecap="square"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </a>
  );
}
