"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCallForPapersOpen, setIsCallForPapersOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#dates", label: "Important Dates" },
    { href: "#speakers", label: "Speakers" },
    {
      href: "#call-for-papers",
      label: "Call for Papers",
      hasDropdown: true,
      subItems: [
        { href: "#author-guidelines", label: "Author Guidelines" },
        { href: "#tracks", label: "Tracks" },
        { href: "#submit-paper", label: "Submit Paper" },
      ],
    },
    { href: "#registration", label: "Registration" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="bg-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCallForPapersOpen(true)}
                    onMouseLeave={() => setIsCallForPapersOpen(false)}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-white hover:text-yellow-300 transition-colors font-medium py-4"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.button>

                    {isCallForPapersOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-0 w-48 bg-blue-900 border border-blue-700 rounded-b-lg shadow-lg py-2"
                      >
                        {item.subItems?.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white hover:text-yellow-300 hover:bg-blue-800 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-yellow-300 transition-colors font-medium py-4 block"
                  >
                    {item.label}
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-yellow-300 hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-900 border-t border-blue-700"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 text-white hover:text-yellow-300 hover:bg-blue-800 transition-colors"
                        onClick={() => setIsCallForPapersOpen(!isCallForPapersOpen)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isCallForPapersOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isCallForPapersOpen && (
                        <div className="pl-4 space-y-1">
                          {item.subItems?.map((subItem) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-white hover:text-yellow-300 hover:bg-blue-800 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-white hover:text-yellow-300 hover:bg-blue-800 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
