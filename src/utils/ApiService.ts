import axios from "axios";

// Base URL for the API
const BASE_URL = "https://ldb-me.ve-live.com/api/AdminApiProvider";

// Function to register a user
export const registerUser = async (data: {
  UserName: string;
  Email: string;
  Mobile: string;
  Password: string;
  Speciality: string;
  Country: string;
  InstagramLink?: string;
  TikTokLink?: string;
  Userconsent: string;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/RegisterUser`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// Function to login a user
export const loginUser = async (data: { Email: string; Password: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/UserLogin`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// Function to submit a question
export const submitQuestion = async (data: {
  SpeakerName: string;
  AskedBy: string;
  QuestionDetail: string;
  EventId: number;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/AskQuestion`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// Function to fetch agenda data
export const fetchAgenda = async (eventId: number) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/LoadAgenda?EventId=${eventId}`
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// Function to fetch speaker data
export const fetchSpeakers = async (eventId: number) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/LoadSpeakers?EventId=${eventId}`
    );
    return response.data;
  } catch (error: any) {
    console.log("catch -------error", error);
    throw error.response?.data || error.message;
  }
};
