export const API_URL = 
	process.env.NODE_ENV === "test"
		? "https://www.google.com" 
		: import.meta.env.VITE_API_URL;