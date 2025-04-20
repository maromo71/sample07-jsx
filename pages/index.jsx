import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("@detailsUser", JSON.stringify({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      }));
      router.push('/admin');
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            className="form-control mb-3"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
          />
          <button type="submit" className="btn btn-primary">Acessar</button>
        </form>
        <p className="text-center mt-3">
          Não tem conta? <a href="/register">Cadastre-se</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
