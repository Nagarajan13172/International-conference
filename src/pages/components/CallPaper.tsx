"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Target,
  Send,
  CheckCircle,
  Clock,
  Users,
  AlertCircle,
  BookOpen,
  Edit3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

export function CallForPapers() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const tracks = [
    {
      title: "Artificial Intelligence & Machine Learning",
      topics: [
        "Deep Learning and Neural Networks",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics and Explainable AI",
        "Machine Learning Applications",
        "Speech and Audio Processing",
        "Generative AI and Foundation Models",
      ],
    },
    {
      title: "IoT and Cyber Security",
      topics: [
        "IoT Architectures and Protocols",
        "Edge and Fog Computing for IoT",
        "IoT Security and Privacy",
        "Smart Sensors and Actuators",
        "Industrial IoT Applications",
        "Cyber Threat Intelligence",
        "Secure Communication in IoT",
      ],
    },
    {
      title: "Natural Language Processing",
      topics: [
        "Text Mining and Information Extraction",
        "Machine Translation",
        "Sentiment Analysis and Opinion Mining",
        "Speech Recognition and Synthesis",
        "Question Answering Systems",
        "Dialogue Systems and Conversational AI",
        "Language Modeling",
        "Multilingual and Cross-lingual NLP",
        "Ethics and Fairness in NLP",
      ],
    },
    {
      title: "Smart Computing",
      topics: [
        "Cloud and Edge Computing",
        "High Performance Computing",
        "Green Computing and Energy Efficient Systems",
        "Wearable and Ubiquitous Computing",
        "Embedded Systems and IoT Integration",
        "Cognitive Computing",
        "Smart Healthcare Systems",
        "Smart Sensors and Devices",
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tracks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const submissionRequirements = [
    {
      icon: <Send className="h-6 w-6 text-blue-600" />,
      title: "Submission Process",
      description:
        "Please submit your paper only through online by clicking the link: Easy Chair. The submitted paper must be substantially original work.",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Format Requirements",
      description:
        "Papers submitted in English will be reviewed. Only Adobe Portable Document Format (PDF) , Microsoft Word (DOC/DOCX) will be accepted for submission and review. Other formats will automatically be rejected by the Easy Chair.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Originality & Ethics",
      description:
        "The submitted paper is not under consideration for publication anywhere else",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Author Approval",
      description:
        "The publication has been approved by all co-authors, if any, as well as by the responsible authorities—tacitly or explicitly—at the institute where the work has been carried out. The publisher will not be held legally responsible should there be any claims for compensation",
    },
  ]

  const formatGuidelines = [
    {
      icon: <Edit3 className="h-6 w-6 text-blue-600" />,
      title: "Language & Style",
      description:
        "All documents must be written in English, using correct diction, syntax, and grammar.",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Page Format",
      description:
        "All pages must be typed and 1.5 spaced using 12-point Times New Roman font. Please use a 1-inch margin on all sides.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Length Requirements",
      description:
        "The number of pages should be 12-15 pages (including references). Papers that are judged to be unnecessarily lengthy, poorly written, and theoretically under-developed or based on poor science will be rejected.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Content Requirements",
      description:
        "Authors are kindly requested to make sure that all equations, tables, and figures are embedded in the PDF, Microsoft Word (DOC/DOCX) file.",
    },
  ]

  return (
    <section id="call-for-papers" className="py-20 relative overflow-hidden font-poppins">
      {/* Background Image with Subtle Parallax */}
      <motion.img
        src="/images/auditorium.png"
        alt="Conference background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
        style={{ opacity: 0.4 }}
        onError={() => console.error("Background image failed to load")}
        aria-hidden="true"
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
      />

      {/* Dark Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 to-blue-700/70  z-1"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-white drop-shadow-md tracking-tight">
            Call for Papers
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            We invite researchers, academicians, and industry professionals to submit their original research papers for
            ICAITSC 2025. Join us in advancing the frontiers of AI, IT, Security, and Computational Models.
          </p>
        </motion.div>

        {/* Author Guidelines Section */}
        <motion.div
          id="author-guidelines"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-md tracking-tight relative">
            Author Guidelines
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></span>
          </h3>

          <div className="mb-12">
            <h4 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-md border-b-2 border-blue-600 pb-2">
              Submission Requirements
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {submissionRequirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-600 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-50/50 transition-all duration-300 ring-1 ring-blue-400/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div>{requirement.icon}</div>
                        <CardTitle className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-1">{requirement.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-800">{requirement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-md border-b-2 border-blue-600 pb-2">
              Formatting Guidelines
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {formatGuidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-600 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-50/50 transition-all duration-300 ring-1 ring-blue-400/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div>{guideline.icon}</div>
                        <CardTitle className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-1">{guideline.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-800">{guideline.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-600 rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-3 text-gray-900 border-b-2 border-blue-600 pb-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  Paper Organization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-gray-800 mb-6">
                  Papers should be organized in the following order:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h5 className="font-bold text-lg text-blue-600">Required Sections:</h5>
                    <ul className="space-y-2">
                      {["Title Page (Blinded)", "Title Page (Unblinded)", "Abstract (100-250 words)", "Keywords (4-6 keywords)", "Main Text", "Acknowledgements (if applicable)", "References (APA style)"].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-bold text-lg text-blue-600">Important Notes:</h5>
                    <ul className="space-y-2 text-sm text-gray-800">
                      {[
                        "Blinded title page should remove author names and affiliations for anonymous review",
                        "Use no more than three levels of displayed headings in main text",
                        "Remove identifying references for anonymous peer review",
                        "All references must be complete and follow APA citation style",
                      ].map((note, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Conference Tracks Section */}
        <motion.div
          id="tracks"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-md tracking-tight relative">
            Conference Tracks
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md border-blue-600 rounded-full shadow-md hover:shadow-lg hover:bg-blue-100 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 text-blue-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md border-blue-600 rounded-full shadow-md hover:shadow-lg hover:bg-blue-100 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 text-blue-600" />
            </Button>

            <div className="overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-12"
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-600 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-50/50 transition-all duration-300 ring-1 ring-blue-400/50">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl flex items-center justify-center gap-3 text-gray-900 border-b-2 border-blue-600 pb-1">
                        <Target className="h-6 w-6 text-blue-600" />
                        {tracks[currentSlide].title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tracks[currentSlide].topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.1 }}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-800 font-medium">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {tracks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600 scale-125" : "bg-blue-300 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-4">
              <span className="text-sm text-white drop-shadow-md">
                Track {currentSlide + 1} of {tracks.length}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Submit Paper Section */}
        <motion.div
          id="submit-paper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-600 rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center justify-center gap-3 text-gray-900 border-b-2 border-blue-600 pb-2">
                <Send className="h-8 w-8 text-blue-600" />
                Submit Your Paper
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-800">
                Ready to share your research with the global community? Submit your paper through our online submission
                system.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-800">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    Submission Deadline: November 6, 2025
                  </span>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 ring-2 ring-blue-400/50 hover:ring-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
                >
                  Submit Paper via Easy Chair
                </Button>
                <p className="text-sm text-gray-800">
                  Papers should be submitted through Easy Chair Conference Management System
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}