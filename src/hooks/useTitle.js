import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}`; // Sets the browser tab title
  }, [title]); // Re-runs only if the title changes
};

export default useTitle;
