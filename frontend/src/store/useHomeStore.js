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
      set({ features: [] }); //  Set to empty array on error
    }
  },
  title: "",
  description: "",
  image: null,
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setImage: (image) => set({ image }),

  // show interns details
  trainee: null,
  loading: false,
  error: null,
  fetchTraineeData: async (certificateNo) => {
    set({ loading: true, error: null, trainee: null });
    try {
      const response = await axiosInstance.get(
        `/apply/intern?certificate=${certificateNo}`
      );
      if (response.data.intern) {
        set({ trainee: response.data.intern, loading: false, error: null });
        console.log("Trainee State Updated:", response.data.intern); // Check this log
      } else {
        set({ error: response.data.message, trainee: null, loading: false }); // Shows "No trainee found"
      }
    } catch (error) {
      console.error(error);
      set({
        error: "Failed to fetch data. Try again.",
        trainee: null,
        loading: false,
      });
    }
  },
}));
export default useHomeStore;
