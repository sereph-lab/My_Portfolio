import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-amber-500 via-pink-500 to-amber-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo + description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[url('/image/750x422_762111_1498723002.jpg')] bg-center bg-cover rounded-full"></div>
              <span className="text-white font-semibold text-lg">
                Your Company
              </span>
            </div>

            <p className="text-slate-900 max-w-sm">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>

            {/* Social icons */}
            <div className="flex gap-5 mt-6 text-xl">
              <FaFacebook className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaXTwitter className="hover:text-white cursor-pointer" />
              <FaGithub className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-slate-900">
              <li className="hover:text-white cursor-pointer">Marketing</li>
              <li className="hover:text-white cursor-pointer">Analytics</li>
              <li className="hover:text-white cursor-pointer">Automation</li>
              <li className="hover:text-white cursor-pointer">Commerce</li>
              <li className="hover:text-white cursor-pointer">Insights</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-slate-900">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Jobs</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-slate-900">
              <li className="hover:text-white cursor-pointer">
                Terms of service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy policy
              </li>
              <li className="hover:text-white cursor-pointer">License</li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-slate-900">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
