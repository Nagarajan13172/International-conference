"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Crown, Award } from "lucide-react"

export function CommitteeSection() {
  const organizingCommittee = [
    {
      name: "Tmt. E. Sundaravalli, I.A.S.",
      role: "Convenor, Vice Chancellor Committee",
      organization: "Periyar University Salem",
    },
    {
      name: "Prof. R. Subramani.",
      role: "Convenor, Vice Chancellor Committee",
      organization: "Periyar University Salem",
    },
    {
      name: "Dr S. Jayanthi.",
      role: "Convenor, Vice Chancellor Committee",
      organization: "Periyar University Salem",
    },
  ]

  const patron = [
    {
      name: "Dr. V. Raj",
      role: "Registrar(FAC)",
      organization: "Periyar University Salem",
    },
  ]

  const conferenceChairs = [
    {
      name: "Dr. H. Hannah Inbarani",
      role: "Professor",
      organization: "Department of Computer Science, Periyar University, Salem",
    },
    {
      name: "Dr. I. Laurence Aroquiaraj",
      role: "Professor",
      organization: "Department of Computer Science, Periyar University, Salem",
    }
  ]

  const advisoryCommittee = [
    {
      name: "Dr. R. Rathipriya",
      role: "Professor",
      organization: "Department of Computer Science, Periyar University, Salem",
    },
    {
      name: "Dr S.Sathish",
      role: "Associate Professor",
      organization: "Department of Computer Science, Periyar University, Salem",
    },
  ]

  const Convenor = [
    {
      name: "Dr. C. Chandrasekar",
      role: "Senior Professor and Head",
      organization: "Department of Computer Science, Periyar University, Salem",
    }
  ]

  return (
    <section id="committee" className="py-8 sm:py-12 lg:py-20 bg-sky-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
            Organizing Committee
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the distinguished committee members organizing ICAITSC 2025
          </p>
        </motion.div>

        {/* Organizing Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Crown className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Chief Patron</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {organizingCommittee.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full max-w-sm"
              >
                <Card className="gradient-primary text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">{member.name}</h4>
                    <p className="text-white/90 text-sm sm:text-base mb-1">{member.role}</p>
                    <p className="text-white/80 text-sm sm:text-base">{member.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patron */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Crown className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Patron</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {patron.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full max-w-sm"
              >
                <Card className="gradient-primary text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-2">{member.name}</h4>
                    <p className="text-white/90 text-sm sm:text-base mb-1">{member.role}</p>
                    <p className="text-white/80 text-sm sm:text-base">{member.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Convenor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Award className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Convenor</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {Convenor.map((chair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full max-w-sm"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">{chair.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base mb-1">{chair.role}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{chair.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizing Secretaries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Award className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Organizing Secretaries</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {conferenceChairs.map((chair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full max-w-sm"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">{chair.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base mb-1">{chair.role}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{chair.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisory Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Users className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Organizing Members</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {advisoryCommittee.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full max-w-sm"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gradient-card text-white">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h4 className="font-bold text-lg sm:text-xl mb-3">{advisor.name}</h4>
                    <p className="text-white/90 text-sm sm:text-base mb-2">{advisor.role}</p>
                    <p className="text-white/80 text-sm sm:text-base">{advisor.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}