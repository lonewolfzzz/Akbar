export default function Footer() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  }

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <div className="flex space-x-1">
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase">AKBAR IRAWAN</span>
        </div>
        <div>
          <span className="text-lg">Have fun build this site</span>
        </div>
        <button
          onClick={toTop}
          className="col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1"
          style={{ cursor: 'pointer' }} // Ensure the button shows a pointer on hover
        >
          <span
            className="font-extrabold uppercase duration-200 transform group-hover:scale-110 group-hover:font-black transition-transform ease-in-out"
          >
            BACK TO TOP
          </span>
        </button>
      </div>
    </footer>
  );
}
