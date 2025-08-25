import { MapPin, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">ICAITSC 2025</h3>
            <p className="text-muted-foreground">International Conference on AI, IT, Security & Computational Models</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/important-dates" className="hover:text-primary transition-colors">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-primary transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/author-guidelines" className="hover:text-primary transition-colors">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-primary transition-colors">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                icaitsc@periyaruniversity.ac.in
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 427 2345113
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Periyar University Salem, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 ICAITSC Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
