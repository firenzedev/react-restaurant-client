export default function Button({ children, color, className, ...props }) {
  const classes = fromType(color);
  return (
    <button {...props} className={[classes, className].join(" ")}>
      {children}
    </button>
  );
}

function fromType(color) {
  switch (color) {
    case "primary":
      return "text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-opacity-50";
    case "secondary":
    default:
      return "py-2.5 px-5 mr-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-opacity-50";
  }
}
