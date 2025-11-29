"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Editor" }
  ]);
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      thumbnail: "/assets/images/portfolio1.png",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      languages: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      thumbnail: "/assets/images/portfolio2.png",
      title: "Corporate Website",
      description: "Professional corporate website with custom CMS",
      languages: ["WordPress", "PHP", "MySQL"],
      liveUrl: "https://example2.com"
    }
  ]);
  
  const [contacts] = useState([
    {
      id: 1,
      name: "Alice Brown",
      email: "alice@example.com",
      message: "Interested in web development services",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Bob Wilson",
      email: "bob@example.com",
      message: "Need help with WordPress customization",
      date: "2024-01-14"
    }
  ]);
  
  const [newProject, setNewProject] = useState({
    thumbnail: "",
    title: "",
    description: "",
    languages: "",
    liveUrl: ""
  });
  
  const [editingProject, setEditingProject] = useState(null);

  const handleAddProject = (e) => {
    e.preventDefault();
    const project = {
      id: Date.now(),
      ...newProject,
      languages: newProject.languages.split(",").map(lang => lang.trim())
    };
    setProjects([...projects, project]);
    setNewProject({ thumbnail: "", title: "", description: "", languages: "", liveUrl: "" });
  };

  const handleUpdateProject = (e) => {
    e.preventDefault();
    setProjects(projects.map(p => 
      p.id === editingProject.id 
        ? { ...editingProject, languages: editingProject.languages.split(",").map(lang => lang.trim()) }
        : p
    ));
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-white">
              Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dashboard</span>
            </h1>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-blue-300 hover:text-white transition-colors">
                ← Back to Site
              </Link>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { key: "users", label: "User Management" },
              { key: "add-project", label: "Add Projects" },
              { key: "manage-projects", label: "Manage Projects" },
              { key: "contacts", label: "Contact Forms" }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* User Management Tab */}
        {activeTab === "users" && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">User Management</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-200 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-200 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-200 uppercase">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-blue-200 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-blue-200">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "Admin" ? "bg-red-500/20 text-red-300" :
                          user.role === "Editor" ? "bg-yellow-500/20 text-yellow-300" :
                          "bg-green-500/20 text-green-300"
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Projects Tab */}
        {activeTab === "add-project" && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Add New Project</h3>
            <form onSubmit={handleAddProject} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Thumbnail URL</label>
                  <input
                    type="url"
                    value={newProject.thumbnail}
                    onChange={(e) => setNewProject({...newProject, thumbnail: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter thumbnail URL"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Project Title</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter project title"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="3"
                  placeholder="Enter project description"
                  required
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Languages (comma separated)</label>
                  <input
                    type="text"
                    value={newProject.languages}
                    onChange={(e) => setNewProject({...newProject, languages: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="React, Node.js, MongoDB"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Live URL</label>
                  <input
                    type="url"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({...newProject, liveUrl: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Add Project
              </button>
            </form>
          </div>
        )}

        {/* Manage Projects Tab */}
        {activeTab === "manage-projects" && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Manage Projects</h3>
            
            {editingProject && (
              <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Edit Project</h4>
                <form onSubmit={handleUpdateProject} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      placeholder="Title"
                    />
                    <input
                      type="url"
                      value={editingProject.liveUrl}
                      onChange={(e) => setEditingProject({...editingProject, liveUrl: e.target.value})}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      placeholder="Live URL"
                    />
                  </div>
                  <textarea
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="Description"
                  ></textarea>
                  <input
                    type="text"
                    value={Array.isArray(editingProject.languages) ? editingProject.languages.join(", ") : editingProject.languages}
                    onChange={(e) => setEditingProject({...editingProject, languages: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="Languages (comma separated)"
                  />
                  <div className="flex gap-4">
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      Update
                    </button>
                    <button type="button" onClick={() => setEditingProject(null)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                    <p className="text-blue-200 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.languages.map((lang, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingProject(project)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Forms Tab */}
        {activeTab === "contacts" && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Form Submissions</h3>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{contact.name}</h4>
                      <p className="text-blue-200">{contact.email}</p>
                    </div>
                    <span className="text-sm text-blue-300">{contact.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{contact.message}</p>
                  <div className="mt-4 flex gap-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Reply
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                      Mark as Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
