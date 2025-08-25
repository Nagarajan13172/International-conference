"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, CreditCard, Users, GraduationCap, Building } from "lucide-react"

export function RegistrationSection() {
  const registrationFees = [
    {
      category: "Faculty",
      earlyBird: "₹7,000",
      regular: "₹8,000",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Industry",
      earlyBird: "₹10,000",
      regular: "₹12,000",
      icon: Building,
      color: "from-green-500 to-green-600",
    },
    {
      category: "Students",
      earlyBird: "₹3,000",
      regular: "₹4,000",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const registrationInfo = [
    "Registration fee includes conference kit, lunch and refreshments",
    "All speakers are exempted from registration fee",
    "Delegates are requested to pay registration fee by wire transfer",
    "Registration form for ICAITSC 2025 is available in the Downloads link",
    "Fill-in the registration form on or before the last date",
    "Upload payment proof with banking payment reference number",
  ]

  return (
    <section id="registration" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Registration</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Starts on January 9, 2026
          </p>
        </motion.div>

        {/* Registration Fees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {registrationFees.map((fee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fee.color}`} />
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${fee.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <fee.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{fee.category}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        Early Bird
                      </Badge>
                      <p className="text-2xl font-bold text-primary">{fee.earlyBird}</p>
                      <p className="text-sm text-muted-foreground">Until Sep 20, 2025</p>
                    </div>
                    <div className="border-t pt-4">
                      <Badge variant="outline" className="mb-2">
                        Regular
                      </Badge>
                      <p className="text-xl font-semibold">{fee.regular}</p>
                      <p className="text-sm text-muted-foreground">After Sep 20, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Registration Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Registration Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {registrationInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{info}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <Card className="gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Register?</h3>
              <p className="mb-6 opacity-90">
                Download the registration form and secure your spot at ICAITSC 2025. Don't miss the early bird discount!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Download className="mr-2 h-4 w-4" />
                  Download Registration Form
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold bg-transparent"
                >
                  View Payment Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
