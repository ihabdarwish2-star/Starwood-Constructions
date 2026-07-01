export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-yellow-600 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold tracking-widest text-yellow-500">
          STARWOOD
        </h1>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#services" className="hover:text-yellow-500 transition">Services</a>
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </nav>

        <a
          href="#contact"
          className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Request Quote
        </a>

      </div>
    </header>
  );
}
