import axios from 'axios';

const providers = [
  {
    name: 'Gemini',
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
    call: async (prompt, key) => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
      const response = await axios.post(
        url,
        {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.4, topK: 40, topP: 0.95, maxOutputTokens: 2048 }
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data.candidates[0].content.parts[0].text;
    }
  },
  {
    name: 'Groq',
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    call: async (prompt, key) => {
      const url = `https://api.groq.com/openai/v1/chat/completions`;
      const response = await axios.post(
        url,
        {
          model: 'llama3-8b-8192',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.4,
          max_tokens: 2048
        },
        { headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' } }
      );
      return response.data.choices[0].message.content;
    }
  },
  {
    name: 'Mistral',
    apiKey: import.meta.env.VITE_MISTRAL_API_KEY,
    call: async (prompt, key) => {
      const url = `https://api.mistral.ai/v1/chat/completions`;
      const response = await axios.post(
        url,
        {
          model: 'mistral-small-latest',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.4,
          max_tokens: 2048
        },
        { headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' } }
      );
      return response.data.choices[0].message.content;
    }
  },
  {
    name: 'Cerebras',
    apiKey: import.meta.env.VITE_CEREBRAS_API_KEY,
    call: async (prompt, key) => {
      const url = `https://api.cerebras.ai/v1/chat/completions`;
      const response = await axios.post(
        url,
        {
          model: 'llama3.1-8b',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.4,
          max_tokens: 2048
        },
        { headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' } }
      );
      return response.data.choices[0].message.content;
    }
  },
  {
    name: 'Cohere',
    apiKey: import.meta.env.VITE_COHERE_API_KEY,
    call: async (prompt, key) => {
      const url = `https://api.cohere.com/v1/chat`;
      const response = await axios.post(
        url,
        {
          model: 'command-r',
          message: prompt,
          temperature: 0.4,
          max_tokens: 2048
        },
        { headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json', 'accept': 'application/json' } }
      );
      return response.data.text;
    }
  }
];

export const reviewCode = async (code, language) => {
  const availableProviders = providers.filter(p => p.apiKey);

  if (availableProviders.length === 0) {
    throw new Error("No API keys found. Please set at least one API key in your .env file.");
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

  let lastError = null;

  for (const provider of availableProviders) {
    try {
      console.log(`Attempting to generate code review using ${provider.name}...`);
      const result = await provider.call(prompt, provider.apiKey);
      console.log(`Successfully generated review using ${provider.name}`);
      return result;
    } catch (error) {
      console.warn(`Failed with ${provider.name}:`, error.response?.data || error.message);
      lastError = error;
      // Continue to the next provider automatically
    }
  }

  console.error("All available AI providers failed.", lastError);
  throw new Error("All AI providers are currently unavailable or rate-limited. Please try again later.");
};
