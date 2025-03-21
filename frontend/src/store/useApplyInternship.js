import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const useApplyInternship = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  userId: null,
  isAdmin: false,

  // Check authentication
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      const { id, role } = res.data;
      set({
        authUser: res.data,
        userId: id,
        isAdmin: role,
      });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({
        authUser: null,
        userId: null,
        isAdmin: false,
      });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // Form data state
  formData: {
    name: "",
    email: "",
    contactNo: "",
    internshipType: "",
    internshipDuration: "",
  },

  isLoading: false,
  error: null,

  // Update form data
  setFormData: (name, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    }));
  },

  // Submit internship application
  applyForInternship: async () => {
    set({ isLoading: true, error: null });
    try {
      const { formData, userId } = get(); // Fetch userId from the store

      if (!userId) {
        toast.error("User ID not found. Please log in.");
        return;
      }

      const response = await axiosInstance.post(
        `/apply/${userId}`,
        {
          name: formData.name,
          email: formData.email,
          contactNo: formData.contactNo,
          internshipType: formData.internshipType,
          internshipDuration: formData.internshipDuration,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data) {
        // Reset form data
        set({
          formData: {
            name: "",
            email: "",
            contactNo: "",
            internshipType: "",
            internshipDuration: "",
          },
          error: null,
        });

        // Show success message
        toast.success("Application submitted successfully!");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to submit application";
      set({ error: errorMessage });

      // Show error message
      toast.error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useApplyInternship;
