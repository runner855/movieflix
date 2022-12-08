import {
  UPCOMING_LABEL,
  TOP_RATED_LABEL,
  POPULAR_LABEL,
} from "../constants/dictionary";
import { AppUrls } from "../types/Apptypes";
import { NOW_PLAYING_LABEL } from "../constants/dictionary";

export const NavBarElements = [
  {
    navbar_element: UPCOMING_LABEL,
    to: AppUrls.UPCOMING,
  },
  {
    navbar_element: TOP_RATED_LABEL,
    to: AppUrls.TOP_RATED,
  },
  {
    navbar_element: POPULAR_LABEL,
    to: AppUrls.POPULAR,
  },

  {
    navbar_element: NOW_PLAYING_LABEL,
    to: AppUrls.NOWPLAYING,
  },
];

export const Movieslanguages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "vi", label: "Vietnamese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "fi", label: "Finnish" },
  { value: "hi", label: "Hindi" },
  { value: "it", label: "Italian" },
  { value: "is", label: "Icelandic" },
  { value: "fr", label: "French" },
  { value: "uk", label: "Ukrainian" },
];
