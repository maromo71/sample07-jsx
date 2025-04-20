// pages/register.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("@detailsUser", JSON.stringify({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      }));
      router.push('/admin');
    } catch (error) {
      alert("Erro ao registrar: " + error.message);
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={handleRegister} className="form-control">
          <h2 className="text-center">Cadastro</h2>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-success">Cadastrar</button>

          <p className="text-center">
            Já tem conta? <a href="/" className="btn-link">Voltar para login</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
