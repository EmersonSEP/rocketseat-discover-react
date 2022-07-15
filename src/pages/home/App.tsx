import { useState } from "react";
import { Card } from "../../components/Card";

function App() {
  const [studentName, setstudentNome] = useState("Palmeiras");
  const [students, setstudents] = useState([]);
  


  function handleAddStudent() {
    

    
    const newStudent = {

    name: studentName,
    time: new Date().toLocaleDateString('pt-br', {
      hour: '2-digit',
      minute:'2-digit',
      second: '2-digit'
    })
  };
  setstudents((state) => [...state, newStudent]);
  }

  return (
    <div className="flex items-center text-center flex-col ">
      <h1 className="text-3xl mt-20 mb-8 ">Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setstudentNome(e.target.value)}
        className="w-1/2 p-6 rounded-3xl bg-slate-50 text-lg"
      />
      <button 
      className="w-1/2 p-6 bg-lime-400 hover:bg-lime-700 rounded-3xl mt-3 mb-3 text-3xl text-white" 
      type="button" 
      onClick={handleAddStudent}>
        Adicionar
      </button>
      {
      students.map((students) =>(
         <Card name={students.name} time={students.time}/>
         ))}
    </div>
  );
}

export default App;
