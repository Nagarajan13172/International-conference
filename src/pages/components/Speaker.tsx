"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building } from "lucide-react"

export function KeynoteSpeakers() {
  const speakers = [
    {
      name: "Dr. Balaji Palanisamy",
      title: "Associate Professor",
      affiliation: "University of Pittsburgh, USA",
      image: "/dr-balaji-palanisamy-headshot.png",
      expertise: ["Distributed Systems", "Big Data", "Privacy"],
      bio: "Leading researcher in distributed systems and privacy-preserving technologies with over 100 publications.",
    },
    {
      name: "Dr. Pramod Pisharady",
      title: "Assistant Professor",
      affiliation: "University of Minnesota, USA",
      image: "/dr-pramod-pisharady-headshot.png",
      expertise: ["Computer Vision", "Machine Learning", "Medical Imaging"],
      bio: "Expert in computer vision and medical imaging with focus on AI applications in healthcare.",
    },
    {
      name: "Dr. Shrisha Rao",
      title: "Professor & Dean",
      affiliation: "International Institute of Information Technology, Bangalore",
      image: "/dr-shrisha-rao-headshot.png",
      expertise: ["Algorithms", "Computational Complexity", "Game Theory"],
      bio: "Renowned expert in algorithms and computational complexity with extensive research contributions.",
    },
    {
      name: "Dr. Preksha Nema",
      title: "Research Scientist",
      affiliation: "Google, Bangalore",
      image: "/professional-headshot-preksha-nema.png",
      expertise: ["Natural Language Processing", "Deep Learning", "AI Research"],
      bio: "Leading AI researcher at Google with focus on natural language processing and deep learning.",
    },
  ]

  return (
    <section id="speakers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Keynote Speakers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from world-renowned experts and thought leaders in computational intelligence and cyber security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{speaker.name}</h3>
                    <p className="text-primary font-medium mb-2">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                      <Building className="h-3 w-3" />
                      {speaker.affiliation}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {speaker.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
