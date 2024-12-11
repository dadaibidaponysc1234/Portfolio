import Navbar from "./components/Navbar"
import { Button } from "./components/ui/button"
import { Separator } from "@/components/ui/separator"
import selfImage from '../public/figmaImages/ProfilePics1.jpg'
// import secondSelf from '../public/figmaImages/ProfilePics1.jpg'
import {
  BrainCircuit,
  BrainCog,
  CodeXml,
  Cpu,
  Microscope,
  ScanEye,
  Send
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./components/ui/card";

function App() {

   const SERVICES = [
    {
      title: "Software Engineering",
      value: "Software Engineering",
      description: "I design and develop robust software solutions from start to finish. My expertise spans frontend frameworks like React for interactive and backend technologies like Django to ensure scalable and secure server-side architecture. With a full-stack approach, I create seamless, efficient applications tailored to meet your needs.",
      icon: CodeXml
     },
     {
       title: "Computer Vision",
       value: "Computer Vision",
       description: "Using computer vision techniques, I empower systems to interpret and process visual data. From image classification to object detection, my solutions enable automated visual recognition across applications in various fields, including healthcare and agriculture.",
       icon: ScanEye
     },
    {
      title: "AI Developer & Software Engineer",
      value: "AI Developer & Software Engineer",
      description: "I provide comprehensive software engineering services (frontend and backend), delivering scalable applications. I specialize in machine learning, deep learning, computer vision for image analysis, and NLP to enhance human-machine communication through language understanding.",
      icon: Cpu
    },
    {
      title: "Machine Learning & Deep Learning",
      value: "Machine Learning & Deep Learning",
      description: "Leveraging advanced machine learning and deep learning techniques, I build predictive models that drive actionable insights. My experience includes designing algorithms for complex problems, including optimization, recommendation systems, and personalized solutions.", 
      icon: BrainCircuit
    },
    {
      title: "Natural Language Processing",
      value: "Natural Language Processing",
      description: "With NLP, I create systems that understand and generate human language, enabling smarter interactions and insights. I work on projects like semantic similarity, sentiment analysis, and chatbot development to bring human-like understanding to digital platforms.",
      icon: BrainCog
    },
    {
      title: "Research",
      value: "Research",
      description: "My research focuses on advanced AI techniques, including machine learning, deep learning, computer vision, and natural language processing. I work on developing novel algorithms and applications, such as efficient transformer models for memory management, AI-driven digital soil mapping for agriculture, and enhanced attention mechanisms for improved semantic similarity detection. These efforts aim to push the boundaries of AI in practical, high-impact domains.",
      icon: Microscope
    }
  ] as const
  
  const PROJECTS = [
    {
      image: "/Homepage.png",
      title: "Image Classification with TinyVGG",
      description: "Image Classification with TinyVGG is a computer vision project for classifying images using a modified TinyVGG architecture.",
      technologies: ["Python", "PyTorch", "Matplotlib"],
      link: "https://github.com/dadaibibadapo/vision_dataset.git"
    },
    {
      image: "/Homepage1.png", 
      title: "iAttention-sentence Transformer for Automated Grading of Free-response",
      description: "iAttention-sentence Transformer is a project using advanced NLP models to provide fair and efficient grading of free-response questions by comparing students answers to reference responses. The system uses transformer models for automated grading and it provides both raw and fuzzy predictions to ensure accuracy.",
      technologies: ["Python","Transformers model","PyTorch", "NLP", "Js"],
      link: ""
    },
    {
      image: "/Homepage2.png", 
      title: "Salary Prediction Model",
      description: "Salary Prediction Model is a machine learning model to predict the salaries of software developers based on experience and location.",
      technologies: ["Python", "PyTorch", "Django", "Js"],
      link: ""
    },
    {
      image: "/Homepage4.png", 
      title: "PsycGen African",
      description: "The Psychiatric Genomics Africa Portal (PsychGen Africa) is an initiative of the PGC Africa working group to establish a unified metadata repository of psychiatric genomics studies in the African population. The portal serve as a comprehensive resource for publicly available studies associated with neuropsychiatric disorders involving participants or research from Africa. Additionally,it provides tools for exploratory data analytics, data visualization, and links to external databases.",
      technologies: ["Python", "Django", "Next.js"],
      link: ""
    }
  ] as const

  const SKILLS = [
    {
      image: "/skills/image1.png"
    },
    {
      image: "/skills/image3.png"
    },
    {
      image: "/skills/image4.png"
    },
    {
      image: "/skills/image5.png"
    },
    {
      image: "/skills/image7.png"
    },
    {
      image: "/skills/image8.png"
    },
    {
      image: "/skills/Javascript.png"
    },
    {
      image: "/skills/Python.png"
    },
    {
      image: "/skills/React.png"
    },
    {
      image: "/skills/Tensorflow.png"
    },
    {
      image: "/skills/VsCode.png"
    },
    {
      image: "/skills/Django.png"
    },
    {
      image: "/skills/Docker.png"
    },
    {
      image: "/skills/Git.png"
    },
    {
      image: "/skills/Group.png"
    },
  ]
  
  function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  }
  
  


  return (
    <>
      <main id="home" className='bg-[#08010f] text-white w-full flex flex-col gap-4 px-4 pb-10'>
        <Navbar />
        <div className="max-w-3xl mx-auto">
          <header className="flex flex-col sm:flex-row justify-center sm:items-center mt-20 md:mt-28 gap-6 sm:gap-0">
            <div className="flex flex-col gap-3">
              <p className="text-[#ff6d00]">Hello!</p>
              <h1 className="max-w-sm text-5xl font-bold">l'm <span className="text-[#ff6d00]">Ibidapo Dada</span></h1>
              <p className="max-w-sm text-4xl font-medium">Fullstack Software Engineer</p>
              <p className="w-80 text-sm font-medium">l'm a software developer and researcher specializing in machine learning, deep-learning and full-stack development.</p>
            </div>
            <div className="md:ml-auto">
              <img
                src={selfImage}
                alt=""
                className='w-80 h-80 object-cover object-center rounded-lg'
              />
            </div>
          </header>
        </div>
      </main>

      <section id="about" className="bg-[#0f0518] text-white py-10 px-4">
        <div className=" max-w-3xl flex flex-col mx-auto">
          <div className="flex gap-x-6">
            <div className="hidden sm:block">
              <img
                src={selfImage}
                alt=""
                className='w-80 h-80 object-cover object-center rounded-lg'
              />
            </div>

            <div className="flex flex-col grow items-center gap-6 mt-10 px-2">
              <h2 className="text-4xl font-bold">About me</h2>
              <p className="max-w-sm text-sm font-medium">I am Dada Ibidapo a software developer and researcher who is passionate about building innovative solutions that drives technological advancements in natural language processing, computer vision, and web development. I reside in Ota, Ogun State. Currently, I serve as an assistant Lecturer at Convenant University, while also pursuing a Ph.D. in Computer Science.</p>
              <div className="flex justify-center items-center gap-6">
                <Button
                  className="bg-[#ff6d00] px-10 rounded-full"
                  onClick={()=>{
                    window.location.href="mailto:dman4computer@gmail.com?subject=Hire%20Me";
                  }}
                >
                  HIRE ME
                </Button>

                <Button
                  className="rounded-full"
                  onClick={()=>{
                    window.open("../public/cv/DADA's CV.pdf");
                  }}
                >
                  DOWNLOAD CV
                </Button>
              </div>
            </div>  
          </div>

          
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:items-start sm:gap-0 sm:h-60 md:h-44 space-x-4 mt-10">
            <div className="space-y-4">
              <h3 className="flex text-2xl font-bold w-100">My Education</h3>
              <ul className="space-y-2 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d00]">•</span>
                  NCE: Computer Science and Mathematics 
                  <span className="text-sm">2011</span>
                </li>
                <li className="flex items-start gap-2">
                <span className="text-[#ff6d00]">•</span>
                  Bachlor of Science: Computer Science 
                  <div>
                    <span className="text-sm">2017</span>
                    </div>
                </li>

                <li className="flex items-start gap-2">
                <span className="text-[#ff6d00]">•</span>
                  Master of Science: Computer Science 
                  <div>
                    <span className="text-sm">2021</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d00]">•</span>
                  PhD: Computer Science 
                  <div>
                    <span className="text-sm">now</span></div></li>
              </ul>
            </div>

            <Separator orientation="vertical" className="hidden sm:block bg-[#ff6d00] " />

            <div className="space-y-4">
              <h3 className="flex text-2xl font-bold">Research</h3>
              <ul className="space-y-2 font-medium">
                <li className="flex items-start gap-2">
                <span className="text-[#ff6d00]">•</span>
                  Optimization Algorithms and Theory
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d00]">•</span>
                  Natural Language Processing/Computer Vision
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6d00]">•</span>
                  Machine Learning/Deep Learning/Transformer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#08010f] text-white py-10 px-4">
        <div className="max-w-3xl flex flex-col items-center gap-10 mx-auto">
          <h2 className="text-3xl font-bold">MY QUALITY SERVICES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map(service => (
              <div key={service.value} className="bg-[#110b17] space-y-6 border border-gray-600 p-2 text-balance rounded-lg">
                <div className="flex items-center gap-4">
                  <div>{<service.icon className="ml-2 w-6 h-6 text-[#ff6d00]" />}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-sm font-medium text-justify">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="portfoilo" className="bg-[#0f0518] text-white py-10 px-4">
        <div className="max-w-3xl flex flex-col items-center gap-10 mx-auto">
          <h2 className="text-3xl font-bold">PORTFOILO</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {PROJECTS.map((project, index) => (
                <CarouselItem key={index} className="w-full md:basis-1/2 cursor-grabbing">
                  <div className="">
                    <Card className="bg-[#110121] text-white rounded-none">
                      <img src={project.image} alt="" className="aspect-video select-none"/>
                      <CardHeader>
                        <CardTitle className="text-2xl text-balance font-bold">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-center gap-4">
                        <p>{truncateText(project.description, 15)}</p>
                      
                        <div className="flex flex-col">
                          <span className="font-semibold">Technologies:</span>
                          <div className="flex flex-wrap">
                            {project.technologies.map((technology, index) => (
                              <p key={index} className=" ml-1">
                                {technology}
                                {index < project.technologies.length - 1 && ',  '}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex flex-col text-sm">
                          GitHub Repository:
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{project.link}</a>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </section>



      <section id="skills" className="bg-[#08010f] text-white py-10 px-4">
        <div className="max-w-3xl flex flex-col items-center gap-10 mx-auto">
          <h2 className="text-3xl font-bold">SKILLS</h2>
          <Carousel>
            <CarouselContent>
              {SKILLS.map(skill => (
                <CarouselItem className="basis-1/3 md:basis-1/5 cursor-grabbing">
                  <img src={skill.image} alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section id="contact" className="bg-[#0f0518] text-white py-10 px-4">
        <div className="max-w-3xl flex flex-col justify-center gap-10 mx-auto">
          <h2 className="flex justify-center text-3xl font-bold">CONTACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#110121] flex flex-col gap-4 p-4 rounded-lg">
              <h3 className="flex  text-2xl font-bold">Let's talk about your project!</h3>

              <p className="text-sm">Reach me to me by dropping a message</p>
              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  className="p-2 rounded-lg"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className="p-2 border rounded-lg"
                  placeholder="Email"
                  required
                />

                <textarea className="h-28 p-2 resize-none rounded-lg" placeholder="Type a message" ></textarea>
                <Button
                  className="bg-[#ff6d00] w-fit flex items-center"
                >
                  <p className="text-sm">SEND</p>
                  <Send className="w-4 h-4 lm-2" />
                </Button>
              </form>
            </div>

            <div className="space-y-4 p-4">
              <p className="text-sm">Feel free to reach out to me on these platforms</p>
              <div className="flex items-center gap-4 ">
                <img
                  src="/gmail.png"
                  alt=""
                  className="w-8 h-8 object-cover object-center"
                />
                <div className="space-y-1">
                  <p>dman4computer@gmail.com</p>
                  <p>ibidapo.dada@convenantuniversity.edu.ng</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <img
                  src="/linkedin.png"
                  alt=""
                  className="w-8 h-8 object-cover object-center"
                />
                <a href="https://www.linkedin.com/in/dada-ibidapo-a2b64395" target="_blank" className="underline-offset-4 hover:underline">https://www.linkedin.com/in/dada-ibidapo-a2b64395</a>
              </div>
              <div className="flex items-center gap-4 ">
                <img
                  src="/github.png"
                  alt=""
                  className="w-8 h-8 object-cover object-center"
                />
                <a href="https://github.com/dadaibidapo" target="_blank" className="underline-offset-4 hover:underline">https://github.com/dadaibidapo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08010f] text-white py-10 px-4"></section>

      <footer className="bg-[#0f0518] text-white py-6 px-4 border-t">
        <div className="max-w-3xl flex flex-col items-center gap-10 mx-auto">
          &copy;Copyright.{" "}All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
