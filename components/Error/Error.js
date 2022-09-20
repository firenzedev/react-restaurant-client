export default function Error(error) {
  if (!error || !error.error) {
    return null;
  }
  console.error("An error occurred", error);
  return (
    <div className="text-xl bg-gray-50 font-semibold text-center lg:m-8 p-4 lg:p-16 shadow-lg">
      Sorry, an error occurred.
    </div>
  );
}
