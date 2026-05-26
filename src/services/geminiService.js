import axios from 'axios';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export const reviewCode = async (code, language) => {
  if (!GEMINI_API_KEY) {
    throw new Error("API Key is missing. Please set VITE_GEMINI_API_KEY in your .env file.");
  }

  const prompt = `
    You are an expert AI Code Reviewer. Please review the following ${language} code.
    Analyze the code and provide feedback structured clearly using Markdown.
    
    You MUST use exactly these headings for your sections, using exactly H3 (###):
    ### Overall Summary
    (Provide a brief 2-sentence summary here)
    
    ### 1. Errors
    (Identify any bugs, syntax errors, or logical flaws. Use bullet points. If none, state "No critical errors found.")
    
    ### 2. Best Practices
    (Suggest improvements to align with ${language} best practices.)
    
    ### 3. Optimization
    (Recommend ways to improve performance or efficiency.)
    
    ### 4. Readability
    (Suggest ways to make the code cleaner and easier to read.)
    
    ### 5. Security
    (Highlight any security vulnerabilities if applicable. If none, state "No security issues detected.")
    
    Code to review:
    \`\`\`${language}
    ${code}
    \`\`\`
  `;

  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const result = response.data.candidates[0].content.parts[0].text;
    return result;
  } catch (error) {
    console.error("Error generating code review:", error.response?.data || error);
    const errorMessage = error.response?.data?.error?.message || error.message || "Failed to generate code review. Please try again.";
    throw new Error(errorMessage);
  }
};
