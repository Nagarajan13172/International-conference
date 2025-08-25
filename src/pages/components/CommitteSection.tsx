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
    <section id="committee" className="py-20 bg-sky-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Organizing Committee</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the distinguished committee members organizing ICAITSC 2025
          </p>
        </motion.div>

        {/* Organizing Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Crown className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Chief Patron</h3>
          </div>
          <div className="flex justify-center items-center gap-4 w-[100%]">
            {organizingCommittee.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="gradient-primary text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-96 md:w-[28rem]">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-xl mb-2">{member.name}</h4>
                    <p className="text-white/90 text-sm mb-1">{member.role}</p>
                    <p className="text-white/80 text-sm">{member.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizing Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Crown className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800"> Patron</h3>
          </div>
          <div className="flex justify-center items-center gap-4 w-[100%]">
            {patron.map((member, index) => (
              <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
              >
          <Card className="gradient-primary text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-96 md:w-[28rem]">
            <CardContent className="p-6 text-center">
              <h4 className="font-bold text-xl mb-2">{member.name}</h4>
              <p className="text-white/90 text-sm mb-1">{member.role}</p>
              <p className="text-white/80 text-sm">{member.organization}</p>
            </CardContent>
          </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conference Chairs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Convenor</h3>
          </div>
          <div className="flex justify-center items-center gap-4 w-[100%]">
            {Convenor.map((chair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm ">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">{chair.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{chair.role}</p>
                    <p className="text-gray-600 text-sm">{chair.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conference Chairs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Organizing Secretaries</h3>
          </div>
          <div className="flex justify-center items-center gap-4 w-[100%]">
            {conferenceChairs.map((chair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm ">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">{chair.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{chair.role}</p>
                    <p className="text-gray-600 text-sm">{chair.organization}</p>
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
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-800">Organizing Members:</h3>
          </div>
          <div className="flex justify-center items-center w-[100%] gap-6">
            {advisoryCommittee.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gradient-card text-white">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-lg mb-3">{advisor.name}</h4>
                    <p className="text-white/90 text-sm mb-2">{advisor.role}</p>
                    <p className="text-white/80 text-sm">{advisor.organization}</p>
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
