// components/AdminContent.jsx
import { useEffect, useState } from "react";
import {
  addDoc, collection, deleteDoc,
  doc, onSnapshot, orderBy, query, updateDoc, where
} from "firebase/firestore";
import { db } from "../lib/firebase";

export default function AdminContent({ user }) {
  const [tarefaInput, setTarefaInput] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const tarefaRef = collection(db, "tarefas");
    const q = query(tarefaRef, orderBy("created", "desc"), where("userUid", "==", user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setTarefas(lista);
    });

    return () => unsubscribe();
  }, [user.uid]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!tarefaInput) {
      alert("Digite sua tarefa");
      return;
    }

    if (edit) {
      const docRef = doc(db, "tarefas", edit.id);
      await updateDoc(docRef, { tarefa: tarefaInput });
      setEdit(null);
    } else {
      await addDoc(collection(db, "tarefas"), {
        tarefa: tarefaInput,
        created: new Date(),
        userUid: user.uid,
      });
    }

    setTarefaInput('');
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db, "tarefas", id));
  }

  function handleEdit(item) {
    setEdit(item);
    setTarefaInput(item.tarefa);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-control">
        <label className="form-label">Digite uma nova tarefa:</label>
        <textarea
          className="form-control"
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value)}
        />
        <button type="submit" className={`btn ${edit ? 'btn-primary' : 'btn-success'} mt-2`}>
          {edit ? "Atualizar Tarefa" : "Registrar Tarefa"}
        </button>
      </form>

      <div className="mt-4">
        {tarefas.map((item) => (
          <div key={item.id} className="form-control mb-3">
            <p>{item.tarefa}</p>
            <div>
              <button onClick={() => handleEdit(item)} className="btn btn-secondary btn-sm me-2">
                Editar
              </button>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                Concluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
