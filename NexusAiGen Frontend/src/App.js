import React, { useState } from "react";
import "./App.css";

import ImageGenerator from "./components/ImageGenerator";
import ChatComponent from "./components/ChatComponent";
import RecipeGenerator from "./components/RecipeGenerator";

import {
  FaRobot,
  FaImage,
  FaComments,
  FaUtensils,
  FaSearch
} from "react-icons/fa";

function App() {

  const [activeTab, setActiveTab] = useState("chat");

  // GLOBAL PROMPT
  const [prompt, setPrompt] = useState("");

  // GENERATE BUTTON FUNCTION
  const handleGenerate = () => {

    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    // SWITCH TAB AUTOMATICALLY
    if (prompt.toLowerCase().includes("image")) {
      setActiveTab("image-generator");
    }

    else if (
      prompt.toLowerCase().includes("recipe") ||
      prompt.toLowerCase().includes("food")
    ) {
      setActiveTab("recipe-generator");
    }

    else {
      setActiveTab("chat");
    }
  };

  return (
    <div className="app">

      {/* Animated Background */}
      <div className="bg-blur blur1"></div>
      <div className="bg-blur blur2"></div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <FaRobot className="logo-icon" />
          <span>AI Nexus</span>
        </div>

        <div className="nav-links">

          <button
            className={activeTab === "chat" ? "active" : ""}
            onClick={() => setActiveTab("chat")}
          >
            <FaComments />
            Ask AI
          </button>

          <button
            className={activeTab === "image-generator" ? "active" : ""}
            onClick={() => setActiveTab("image-generator")}
          >
            <FaImage />
            Image AI
          </button>

          <button
            className={activeTab === "recipe-generator" ? "active" : ""}
            onClick={() => setActiveTab("recipe-generator")}
          >
            <FaUtensils />
            Recipe AI
          </button>

        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="hero">

        <h1>
          Ask Anything.
          <br />
          <span>Powered by AI.</span>
        </h1>

        <p>
          Your futuristic AI assistant for intelligent conversations,
          AI images, and smart recipe generation.
        </p>

        {/* SEARCH BOX */}

        <div className="search-box">

          <FaSearch className="search-icon" />

          {/* PROMPT INPUT */}

          <input
            type="text"
            placeholder="Ask anything with AI..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          {/* GENERATE BUTTON */}

          <button onClick={handleGenerate}>
            Generate
          </button>

        </div>

      </section>

      {/* FEATURE CARDS */}

      <section className="feature-cards">

        <div
          className={`feature-card ${
            activeTab === "chat" ? "selected" : ""
          }`}
          onClick={() => setActiveTab("chat")}
        >
          <FaComments className="card-icon" />
          <h3>Ask AI</h3>
          <p>Get instant intelligent AI responses.</p>
        </div>

        <div
          className={`feature-card ${
            activeTab === "image-generator" ? "selected" : ""
          }`}
          onClick={() => setActiveTab("image-generator")}
        >
          <FaImage className="card-icon" />
          <h3>Image AI</h3>
          <p>Create stunning AI-generated visuals.</p>
        </div>

        <div
          className={`feature-card ${
            activeTab === "recipe-generator" ? "selected" : ""
          }`}
          onClick={() => setActiveTab("recipe-generator")}
        >
          <FaUtensils className="card-icon" />
          <h3>Recipe AI</h3>
          <p>Generate delicious recipes instantly.</p>
        </div>

      </section>

      {/* MAIN CONTENT */}

      <main className="main-content">

        {activeTab === "chat" && (
          <div className="glass-panel">

            {/* SEND PROMPT TO CHAT */}
            <ChatComponent prompt={prompt} />

          </div>
        )}

        {activeTab === "image-generator" && (
          <div className="glass-panel">

            {/* SEND PROMPT TO IMAGE */}
            <ImageGenerator prompt={prompt} />

          </div>
        )}

        {activeTab === "recipe-generator" && (
          <div className="glass-panel">

            {/* SEND PROMPT TO RECIPE */}
            <RecipeGenerator prompt={prompt} />

          </div>
        )}

      </main>

    </div>
  );
}

export default App;