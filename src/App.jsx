
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

function App() {
  const [user, setUser] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  const hideLayoutRoutes = ["/404"]; 
  const isLayoutVisible = !hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {isLayoutVisible && <Navbar user={user} />}
      <AppRoutes user={user} />
      {isLayoutVisible && <Footer />}
    </>
  );
}

export default App;
