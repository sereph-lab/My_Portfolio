import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Your Company</h3>
          <p>Building modern web experiences with Next.js.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>

          <ul className="space-y-2">
            <li>Next.js</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>

          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6 border-t border-gray-800">
        © 2024 Your Company
      </div>
    </footer>
  );
}
