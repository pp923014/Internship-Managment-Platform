import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useHomeStore = create((set, get) => ({
  features: [],

  fetchfeatures: async () => {
    try {
      const response = await axiosInstance.get("/features");
      set({ features: Array.isArray(response.data) ? response.data : [] });
    } catch (error) {
      console.error("Error fetching items:", error);
      set({ features: [] }); // ✅ Set to empty array on error
    }
  },
  title: "",
  description: "",
  image: null,
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setImage: (image) => set({ image }),
}));
export default useHomeStore;
