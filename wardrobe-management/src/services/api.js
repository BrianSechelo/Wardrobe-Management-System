import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Laravel API Base URL
});

// Fetch all clothing items
export const getClothingItems = () => api.get("/clothing-items");

// Add a new clothing item
export const addClothingItem = (data) => api.post("/clothing-items", data);

// Delete a clothing item
export const deleteClothingItem = (id) => api.delete(`/clothing-items/${id}`);

// Update a clothing item
export const updateClothingItem = (id, data) => api.put(`/clothing-items/${id}`, data);