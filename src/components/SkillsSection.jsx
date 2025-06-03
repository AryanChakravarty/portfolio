import { useState } from "react";

const skills = [
    {name: "HTML/CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "Next.js", category: "frontend"},

    {name: "Node.js", category: "backend"},
    {name: "Express", category: "backend"},
    {name: "SpringBoot", category: "backend"},
    {name: "PostgreSQL", category: "backend"},
    {name: "Python", category: "backend"},
    {name: "NLP", category: "backend"},
    {name: "LLMs", category: "backend"},
    {name: "Vector Search", category: "backend"},
    {name: "Hugging Face", category: "backend"},
    {name: "LangChain", category: "backend"},
    {name: "ChromaDB", category: "backend"},
    {name: "PyTorch", category: "backend"},

    {name: "Git/Github", category: "tools"},
    {name: "VS Code", category: "tools"},
    {name: "Docker", category: "tools"},
    {name: "Figma", category: "tools"},
    {name: "Jupyter", category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = activeCategory === "all" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                ${activeCategory === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-card hover:bg-primary/10"}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-left">
                                <h3 className="font-semibold text-lg text-primary">{skill.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};