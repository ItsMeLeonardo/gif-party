import { useState, useEffect } from "react";
import CallApi from "../api";

const URL_CATEGORIES = "https://api.giphy.com/v1/gifs/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CallApi({ url: URL_CATEGORIES }).then((category) => {
      setCategories(category);
      setIsLoading(false);
    });
  }, []);

  return { categories, isLoading };
}
