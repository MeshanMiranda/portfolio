import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/My Logo.png"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="https://meshanmiranda.github.io/portfolio/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/meshan-miranda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin/>
            </a>
            <a href="https://github.com/MeshanMiranda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub/>
            </a>
            <a href="https://www.instagram.com/prashansa_meshan?igsh=MTBrdmp5N2k2ZDR1MQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                    <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/prashansa.meshan.2025?mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                    <FaFacebook/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar

