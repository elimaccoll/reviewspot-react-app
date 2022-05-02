export const API_BASE = (process.env.NODE_ENV && 
        process.env.NODE_ENV.toLowerCase() === "prod") ? 
        process.env.REVIEWSPOT_SERVER_API_BASE : 
        "http://localhost:4000/api/v1";
