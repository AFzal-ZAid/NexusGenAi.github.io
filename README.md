# 🚀 NexusGen AI — Intelligent Multi-Feature Generative AI Platform

NexusGen AI is a modern full-stack AI platform that combines conversational AI, AI-powered image generation, and intelligent recipe generation into a unified SaaS-style application.

Built using **Spring Boot**, **React.js**, and **Generative AI APIs**, the platform demonstrates real-world AI integration, scalable backend architecture, and modern frontend engineering.

---

# 🌐 Project Overview

NexusGen AI was designed to simulate the architecture and workflow of modern AI products like ChatGPT, Gemini, and iAsk AI.

The platform provides:

- 💬 AI Chat Assistant
- 🎨 AI Image Generation
- 🍳 AI Recipe Creator
- ⚡ REST API-based AI communication
- 🌙 Modern responsive UI
- 🔐 Environment variable-based API security
- ☁️ Deployment-ready architecture

---

# 🧠 Core Features

## 💬 Conversational AI Assistant
- Real-time AI responses
- Prompt-based interaction
- AI model customization
- Temperature-based response tuning

## 🎨 AI Image Generator
- Generate AI images from prompts
- Dynamic image quality selection
- Multiple image rendering support
- Adjustable image dimensions

## 🍳 Smart Recipe Generator
- Ingredient-based recipe generation
- Cuisine-specific recommendations
- Dietary restriction support
- Structured cooking instructions

## 🎨 Modern UI/UX
- Inspired by modern AI platforms
- Glassmorphism dark interface
- Responsive layout
- Interactive navigation system

---

# 🏗️ System Architecture

```text
React Frontend
       ↓
REST API Layer
       ↓
Spring Boot Backend
       ↓
AI Service Layer
       ↓
Generative AI APIs
```

---

# ⚙️ Tech Stack

## Frontend
- React.js
- CSS3
- Responsive Design
- Lucide React Icons

## Backend
- Java 17
- Spring Boot
- Spring AI
- REST APIs
- Maven

## AI Integration
- Gemini API
- OpenAI-Compatible Spring AI Architecture

## Tools & Platforms
- IntelliJ IDEA
- VS Code
- Postman
- GitHub

---

# 📂 Project Structure

```bash
NexusGenAi.github.io/
│
├── spring-ai-demo-react/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── App.css
│
├── src/main/java/com/ai/SpringAiDemo/
│   ├── ChatService.java
│   ├── ImageService.java
│   ├── RecipeService.java
│   ├── GenAIController.java
│   └── WebConfig.java
│
├── application.properties
└── pom.xml
```

---

# 🔥 Backend Capabilities

## AI Chat Service
Implements prompt-based conversational AI using Spring AI's `ChatModel`.

### Features
- Dynamic prompt handling
- Configurable AI temperature
- AI model selection
- Response abstraction layer

---

## AI Image Service
Generates AI-powered images using prompt engineering and configurable rendering options.

### Features
- Image quality control
- Dynamic dimensions
- Multi-image generation
- Prompt-based rendering

---

## Recipe Generation Engine
Uses prompt templating to generate intelligent cooking recipes.

### Features
- Ingredient mapping
- Cuisine preferences
- Dietary filtering
- Structured response formatting

---

# 🔐 Environment Variable Security

Sensitive API keys are managed using environment variables instead of hardcoding credentials.

## Example

```properties
spring.ai.openai.api-key=${MY_APP_KEY}
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/AFzal-ZAid/NexusGenAi.github.io.git
```

---

# Backend Setup

## Navigate to Backend

```bash
cd SpringAiDemo
```

## Configure Environment Variables

Inside IntelliJ → Edit Configurations:

```env
MY_APP_KEY=YOUR_API_KEY
```

---

## Run Backend

```bash
mvn spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

# Frontend Setup

## Navigate to Frontend

```bash
cd spring-ai-demo-react
```

## Install Dependencies

```bash
npm install
```

## Install UI Icons

```bash
npm install lucide-react
```

## Start React Application

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 📡 API Endpoints

## AI Chat

```http
GET /ask-ai?prompt=hello
```

---

## AI Chat With Custom Options

```http
GET /ask-ai-options?prompt=hello
```

---

## AI Image Generation

```http
GET /generate-image?prompt=robot
```

---

## Recipe Creator

```http
GET /recipe-creator?ingredients=rice,tomato
```

---

# 📈 Engineering Concepts Demonstrated

This project showcases understanding of:

- Full Stack Development
- REST API Design
- AI Integration
- Prompt Engineering
- Spring Boot Architecture
- React Component Design
- Environment Variable Security
- Client-Server Communication
- Service Layer Architecture
- Responsive UI Design

---

# 🎯 Why This Project Stands Out

Unlike traditional CRUD applications, NexusGen AI demonstrates:

✅ Real-world AI integration  
✅ Multi-service backend architecture  
✅ Full-stack engineering capability  
✅ Production-style UI/UX  
✅ AI prompt engineering  
✅ API security practices  
✅ Scalable service-oriented design  

This project reflects skills relevant for:

- Java Full Stack Developer
- Software Engineer
- Spring Boot Developer
- React Developer
- AI Application Developer
- Backend Engineer

---

# 🔮 Future Enhancements

- 🔐 JWT Authentication
- 💾 Chat History Storage
- ☁️ Cloud Deployment
- 📱 Mobile Optimization
- 🎤 Voice Assistant
- 🌐 Multi-model AI Switching
- 📊 Analytics Dashboard
- ⚡ Streaming AI Responses
- 🧠 RAG-based Knowledge System

---

# 👨‍💻 Developer

## [AFzal Zaid GitHub Profile](https://github.com/AFzal-ZAid?utm_source=chatgpt.com)

Passionate Full Stack & AI Developer focused on building scalable AI-powered applications using Java, Spring Boot, React, and Generative AI.

---

# ⭐ Support

If you found this project valuable:

⭐ Star the repository  
🍴 Fork the project  
📢 Share with developers

---

# 📜 License

This project is licensed under the MIT License.
