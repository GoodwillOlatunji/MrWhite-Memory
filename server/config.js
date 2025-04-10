export const config = {
    HOST: process.env.HOST || '0.0.0.0',
    PORT: process.env.PORT || 5000,
    PUBLIC_URL: process.env.PUBLIC_URL || 'http://localhost:5000',
    OLLAMA_API: process.env.OLLAMA_API || 'http://localhost:11434',
    DEFAULT_MODEL: 'codellama:latest',
    DEFAULT_OLLAMA_PATH: 'C:\\Users\\Goodwill\\AppData\\Local\\Programs\\ollama\\ollama.exe'
};