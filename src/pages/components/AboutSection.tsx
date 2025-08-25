"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Award, Target } from "lucide-react"
import { useState } from "react"

export function AboutSection() {
    const features = [
        {
            icon: BookOpen,
            title: "Research Excellence",
            description: "Advancing research in Computational Intelligence, Cyber Security, and Computational Models",
        },
        {
            icon: Users,
            title: "Global Network",
            description: "Connect with researchers and practitioners from around the world",
        },
        {
            icon: Award,
            title: "Quality Publications",
            description: "The presented papers will be considered for possible publication in Springer or other publishers, subject to acceptance.",
        },
        {
            icon: Target,
            title: "Innovation Focus",
            description: "Promoting cutting-edge research and technological advancement",
        },
    ]

    const conferenceText = `The International Conference on Artificial Intelligence Techniques and Smart Computing is a leading global forum that unites researchers, academicians, and industry professionals to share cutting-edge advancements and foster collaboration in AI and smart computing. Covering a broad spectrum of topics—from AI applications in smart societies like infrastructure, healthcare, and transportation, to innovations in machine learning, deep learning, data mining, blockchain, IoT, and cloud computing—the conference promotes interdisciplinary dialogue and knowledge exchange. Its primary aim is to create an international platform that encourages collaborative research and practical solutions, addressing both theoretical developments and real-world challenges. The conference strives to showcase groundbreaking research, bridge gaps between academia and industry, explore ethical and societal implications, and support the development of intelligent systems to tackle complex global problems and shape the future of intelligent technologies`

    const departmentText = `The Department of Computer Science at Periyar University was established in 2002 with the mission to provide quality education and research in the field of computer science and applications. The department is committed to imparting a strong theoretical foundation along with practical skills to prepare students for the evolving demands of the IT industry and research sectors. Known for its regularly updated curriculum and emphasis on innovation, the department offers postgraduate (M.Sc., MCA, M.Sc. (DS)), and Ph.D. programmes that equip students with expertise in areas such as artificial intelligence, machine learning, data science, algorithm design, and cybersecurity. With dedicated faculty recognised for their research contributions and active industry collaborations, the department fosters an environment conducive to academic excellence, cutting-edge research, and holistic development, producing professionals ready to excel globally. The department is proud to be sponsored by SAP in both DRS-I (2011-2016) and DRS-II (2018-2023) phases, enhancing its capabilities through access to software, training, and industry-driven resources that prepare students for advanced careers in technology.`

    const getShortText = (text: string, wordLimit: number = 100) => {
        const words = text.split(' ')
        if (words.length <= wordLimit) return text
        return words.slice(0, wordLimit).join(' ') + '...'
    }

    const [showFullConference, setShowFullConference] = useState(false)
    const [showFullDepartment, setShowFullDepartment] = useState(false)

    return (
        <section id="about" className="py-20 bg-light-blue-gradient">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <h2 className=" text-3xl md:text-4xl mb-6 text-gray-800">About the Conference</h2>
                        <p className="text-lg text-gray-700 max-w-3xl text-left leading-relaxed poppins-regular">
                            {showFullConference ? conferenceText : getShortText(conferenceText)}
                        </p>
                        <Button
                            onClick={() => setShowFullConference(!showFullConference)}
                            className="mt-4 gradient-primary text-white hover:opacity-90"
                        >
                            {showFullConference ? "Show Less" : "Learn More"}
                        </Button>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start"
                        >
                            <h2 className="lexend-deca text-3xl md:text-4xl mb-6 text-gray-800">About the Department</h2>
                            <p className="text-lg text-gray-700 max-w-3xl text-left leading-relaxed poppins-regular">
                                {showFullDepartment ? departmentText : getShortText(departmentText)}
                            </p>
                            <Button
                                onClick={() => setShowFullDepartment(!showFullDepartment)}
                                className="mt-4 gradient-primary text-white hover:opacity-90"
                            >
                                {showFullDepartment ? "Show Less" : "Learn More"}
                            </Button>
                        </motion.div>
                    </div>
                    <div className="absolute inset-y-0 left-1/2 w-px bg-amber-950 hidden lg:block"></div>
                    <div className="w-full h-px bg-amber-950 lg:hidden"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-gray-800 poppins-bold lg:text-2xl text-xs">{feature.title}</h3>
                                    <p className="lg:text-[16px] text-sm text-gray-600 poppins-regular">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="lg:text-4xl text-2xl font-bold mb-6 text-gray-800 lexend-deca">About Periyar University Salem</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed poppins-regular">
                            Established in 1997 and located in Salem, Tamil Nadu,
                            Periyar University (PU) is a premier institution committed to
                            academic excellence, research innovation, and community
                            engagement. Accredited with an ‘A++’ NAAC grade, the
                            university offers a wide range of undergraduate,
                            postgraduate, and doctoral programs across diverse
                            disciplines. Known for its strong emphasis on technology and
                            interdisciplinary research, PU fosters innovation through
                            state-of-the-art facilities, a vibrant research environment, and
                            active industry collaborations. The university is deeply
                            committed to sustainable development and inclusive
                            education, making it a hub for nurturing skilled professionals
                            and future leaders. With its forward-thinking initiatives in
                            digital education, skill development, and entrepreneurship,
                            Periyar University stands as a catalyst for transformative
                            knowledge and societal progress.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed poppins-regular">
                            Our academic process focuses on developing quality professionals by providing concept-oriented subject
                            knowledge through high-quality teaching supplemented with practical training and implementation of
                            concepts in various fields of Science and Engineering.
                        </p>
                        <Button className="gradient-primary text-white hover:opacity-90">
                            Learn More About Periyar University
                        </Button>
                    </div>
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-lg shadow-xl"
                        >
                            <img
                                src="/images/bg2.png"
                                alt="Periyar University Salem"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 gradient-primary opacity-20" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}