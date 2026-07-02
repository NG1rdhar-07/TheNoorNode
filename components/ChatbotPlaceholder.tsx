"use client";

import { motion } from "framer-motion";

// RAG Chatbot Placeholder Component
// This is a placeholder for future implementation
// To implement later:
// 1. Add chat UI components (message bubble, input field, etc.)
// 2. Connect to your RAG backend API
// 3. Handle message state management
// 4. Implement chatbot logic

const ChatbotPlaceholder = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20"
        onClick={() => {
          // Future: Toggle chat window
          console.log("Chatbot placeholder clicked - implement later!");
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default ChatbotPlaceholder;
