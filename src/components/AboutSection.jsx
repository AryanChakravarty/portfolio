import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Download } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Passionate Computer Science student</h3>

                    <p className="text-muted-foreground">
                    As a final-year Computer Science student, I have hands-on experience in software development, artificial intelligence, machine learning, and web technologies. My academic journey and project work have given me a strong foundation in Python, Java, and frameworks such as Spring Boot.
                    </p>

                    <p className="text-muted-foreground">
                        I am passionate about building real-world solutions and have developed projects in AI, ML, and web development, including full-stack applications using modern frameworks. I enjoy learning new technologies and collaborating on innovative projects that solve meaningful problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a
                          href="/Resume.pdf"
                          download
                          className="inline-flex items-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                          <Download className="mr-2" size={18} />
                          Download Resume
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Generative AI and ML</h4>
                                <p className="text-muted-foreground">
                                    AI-powered solutions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Developement</h4>
                                <p className="text-muted-foreground">
                                    Responsive Design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> SpringBoot</h4>
                                <p className="text-muted-foreground">
                                    Backend services
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
};