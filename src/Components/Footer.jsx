import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 2xl:px-80">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Stethoscope className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-tight text-gray-900">
              Khulna City<span className="text-blue-600">Doctors</span>
            </span>
          </Link>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Khulna City Doctors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
