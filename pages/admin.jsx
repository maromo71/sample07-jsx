// pages/admin.jsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AdminContent from "../components/AdminContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  function handleLogout() {
    signOut(auth);
    router.push("/");
  }

  if (loading) return <p className="text-center mt-5">Carregando...</p>;
  if (!user) return null;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-end mb-3">
          <button className="btn btn-danger" onClick={handleLogout}>Sair</button>
        </div>
        <AdminContent user={user} />
      </div>
      <Footer />
    </div>
  );
}
