import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/assets/images/portfolio1.png",
      description: "Modern e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Corporate Website",
      category: "WordPress",
      image: "/assets/images/portfolio2.png",
      description: "Professional corporate website with custom CMS",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
      link: "#",
    },
    {
      id: 3,
      title: "Mobile App UI/UX",
      category: "Design",
      image: "/assets/images/portfolio3.png",
      description: "Modern mobile app interface design",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      link: "#",
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "/assets/images/portfolio4.png",
      description: "Complete digital marketing strategy and execution",
      technologies: ["SEO", "Social Media", "PPC", "Analytics"],
      link: "#",
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      image: "/assets/images/portfolio5.png",
      description: "Complex dashboard with real-time analytics",
      technologies: ["Next.js", "TypeScript", "Chart.js", "API"],
      link: "#",
    },
    {
      id: 6,
      title: "Restaurant Website",
      category: "WordPress",
      image: "/assets/images/portfolio6.png",
      description: "Restaurant website with online ordering system",
      technologies: ["WordPress", "WooCommerce", "Custom Plugin"],
      link: "#",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "WordPress",
    "Design",
    "Marketing",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Portfolio
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our latest projects and see how we transform ideas into
            digital reality
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    View Project
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101727] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let&apos;s create something amazing together. Contact us for a free
            consultation.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
