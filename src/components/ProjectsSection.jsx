import { Github, ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
       id: 1,
       title:"Movie recommender",
       description:"A semantic movie recommender with genres, emotional tone and a relevance score",
       image:"/projects/project1.png",
       tags: ["Python"],
       githubUrl:"https://github.com/AryanChakravarty/semantic-movie-recommender",
    },
    {
       id: 2,
       title:"Autonomous car",
       description:"A self driving car using neural networks with a visualisation of it built in Javascript",
       image:"/projects/project2.png",
       tags: ["Javascript","HTML","CSS"],
       liveUrl:"https://self-drive.vercel.app/",
       githubUrl:"https://github.com/AryanChakravarty/Self-Drive",
    },
    {
       id: 3,
       title:"Game time",
       description:"A retro style interactive game website : Tetris , Snake , Rock paper scissors and Wordle",
       image:"/projects/project3.png",
       tags: ["Javascript","HTML","CSS"],
       liveUrl:"https://game-time-seven.vercel.app/",
       githubUrl:"https://github.com/AryanChakravarty/Game-time",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex justify-end items-end mt-auto gap-3">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                    )}
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/AryanChakravarty" target="_blank">
                        Checkout My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};