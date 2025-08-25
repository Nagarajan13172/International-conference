"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Csconference@periyaruniversity.ac.in",
      action: "mailto:Csconference@periyaruniversity.ac.in",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 427 2345113",
      action: "tel:+914272345113",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Department of Computer Science, Periyar University, Salem - 636011, Tamil Nadu, India",
      action: "https://maps.google.com",
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.periyaruniversity.ac.in",
      action: "https://www.periyaruniversity.ac.in",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about ICAITSC 2025? Get in touch with our organizing committee
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{info.title}</h4>
                          <p className="text-muted-foreground mb-3">{info.details}</p>
                          <Button variant="outline" size="sm" onClick={() => window.open(info.action, "_blank")}>
                            Contact
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="">
                  <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6663.906794083413!2d78.07630421529058!3d11.719961905918034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa3400000001%3A0xdd739a3d0c713e3d!2sPeriyar%20University!5e0!3m2!1sen!2sin!4v1756098189666!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: "0.5rem", width: "100%", height: "350px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6" />
                  <h4 className="font-semibold text-lg">Conference Hours</h4>
                </div>
                <div className="space-y-2 text-white/90">
                  <p>
                    <strong>December 18-20, 2025</strong>
                  </p>
                  <p>Registration: 8:00 AM - 9:00 AM</p>
                  <p>Sessions: 9:00 AM - 5:30 PM</p>
                  <p>Lunch: 12:30 PM - 1:30 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm">
                    Author Guidelines
                  </Button>
                  <Button variant="outline" size="sm">
                    Submission Portal
                  </Button>
                  <Button variant="outline" size="sm">
                    Accommodation
                  </Button>
                  <Button variant="outline" size="sm">
                    Travel Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
