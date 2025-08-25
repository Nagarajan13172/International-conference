"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

export function ImportantDates() {
  const dates = [
    {
      date: "November 6, 2025",
      event: "Last date for paper submission",
      color: "from-blue-500 to-blue-600",
      status: "upcoming",
    },
    {
      date: "December 24, 2025",
      event: "Notification of paper acceptance",
      color: "from-yellow-500 to-orange-500",
      status: "upcoming",
    },
    {
      date: "January 2, 2026",
      event: "Camera ready paper submission",
      color: "from-pink-500 to-red-500",
      status: "upcoming",
    },
    {
      date: "January 9, 2026",
      event: "Registration Date",
      color: "from-cyan-500 to-blue-500",
      status: "upcoming",
    },
    {
      date: "26-27 February 2026",
      event: "Conference dates",
      color: "from-purple-500 to-indigo-500",
      status: "conference",
    },
  ]

  return (
    <section id="dates" className="py-8 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
            Important Dates
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar with these crucial deadlines and dates for ICAITSC 2025
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on md and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot - Adjusted for mobile */}
                <div className="md:absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 mb-4 md:mb-0" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 px-4 md:px-8">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 sm:p-6">
                      <div
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-white text-sm font-medium mb-3 bg-gradient-to-r ${item.color}`}
                      >
                        {item.status === "conference" ? "Conference" : "Deadline"}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {item.date}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{item.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <Card className="max-w-2xl mx-auto gradient-primary text-white">
            <CardContent className="p-6 sm:p-8">
              <Clock className="h-6 sm:h-8 w-6 sm:w-8 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Don't Miss Out!</h3>
              <p className="opacity-90 text-sm sm:text-base">
                Submit your papers early and take advantage of early bird registration rates. All deadlines are final
                and no extensions will be granted.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}