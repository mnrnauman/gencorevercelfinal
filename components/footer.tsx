import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="GENCORE IT Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-4">Next Generation Core IT Solutions</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/gencoreit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FFA94D]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/gencoreit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FFA94D]"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/gencoreit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FFA94D]"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/gencoreit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FFA94D]"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#FFA94D]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-[#FFA94D]">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FFA94D]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FFA94D]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#FFA94D]">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FFA94D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="text-gray-300 hover:text-[#FFA94D]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-solutions" className="text-gray-300 hover:text-[#FFA94D]">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#pbx-voip" className="text-gray-300 hover:text-[#FFA94D]">
                  PBX & VoIP Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#seo-marketing" className="text-gray-300 hover:text-[#FFA94D]">
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#it-support" className="text-gray-300 hover:text-[#FFA94D]">
                  IT Support & Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-[#FFA94D] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  4th Floor, Saeed Alam Tower, 37-Commercial Zone, Liberty Market, Gulberg, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[#FFA94D] mr-2 flex-shrink-0" />
                <a href="tel:+923320000911" className="text-gray-300 hover:text-[#FFA94D]">
                  +92 332 0000911
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#FFA94D] mr-2 flex-shrink-0" />
                <a href="mailto:nauman@gencoreit.com" className="text-gray-300 hover:text-[#FFA94D]">
                  nauman@gencoreit.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="text-[#FFA94D] mr-2 flex-shrink-0" />
                <span className="text-gray-300">Monday-Friday: 09:00am-07:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GENCORE IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

