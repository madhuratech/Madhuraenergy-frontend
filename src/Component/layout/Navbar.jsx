import React from "react";
import logo from "../../assets/navbar/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Solar Energy Logo"
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <Link
            to="/#home"
            className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
          >
            About
          </Link>
          <Link
            to="/#services"
            className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
          >
            Services
          </Link>
          <Link
            to="/#projects"
            className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
          >
            Projects
          </Link>
          <Link
            to="/#blog"
            className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/#consultation"
            className="rounded-lg bg-emerald-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900 sm:px-5 sm:py-2.5"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;