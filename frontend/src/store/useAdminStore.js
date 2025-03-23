import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
export const useAdminStore = create((set, get) => ({
  addFeatures: async (data) => {
    try {
      const res = await axiosInstance.post("/features", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Feature created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
    }
  },
  features: [],
  fethFeatures: async () => {
    try {
      const response = await axiosInstance.get("/features");
      set({ features: Array.isArray(response.data) ? response.data : [] });
    } catch (error) {
      console.error("Error fetching items:", error);
      set({ features: [] }); // ✅ Set to empty array on error
    }
  },
  deleteFeature: async (id) => {
    try {
      await axiosInstance.delete(`/features/${id}`);
      toast.success("Feature deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
    }
  },

  updateFeature: async (data) => {
    try {
    } catch (error) {}
  },

  addInternships: async (data) => {
    try {
      const res = await axiosInstance.post("/internships", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Internship created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
    }
  },
  internships: [],
  fetchInterships: async () => {
    try {
      const response = await axiosInstance.get("/internships");
      set({ internships: Array.isArray(response.data) ? response.data : [] });
    } catch (error) {
      console.error("Error fetching items:", error);
      set({ internships: [] }); // ✅ Set to empty array on error
    }
  },
  deleteInternship: async (id) => {
    try {
      await axiosInstance.delete(`/internships/${id}`);
      toast.success("Internship deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
    }
  },

  title: "",
  description: "",
  image: null,
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setImage: (image) => set({ image }),
}));
export default useAdminStore;
