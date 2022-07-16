import { useEffect, useState } from "react";
import { Card } from "../../components/Card";



function App() {
  const [studentName, setstudentName] = useState(" ");
  const [students, setStudents] = useState<any[]>([]);
  const [user, setUser] = useState ({name: '', avatar:''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
      fetch("https://api.github.com/users/EmersonSEP")
      .then(response => response.json())
      .then(data =>{
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      })
  }, [])
  
  return (
    <div className="flex items-center text-center flex-col ">
      <header className="flex items-center mb-2 mt-20 justify-between  w-1/2">
      <h1 className="text-3xl ">Lista de Presença</h1>
<div className="flex items-center ">
  <strong>{user.name}</strong>
  <img className="w-14 h-14 rounded-3xl ml-5" src={user.avatar} alt="Foto de perfil" />
</div>
      </header>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setstudentName(e.target.value)}
        value={studentName}
        className="w-1/2 p-6 rounded-3xl bg-zinc-300 text-lg"
      />
      <button
       type="button"
        className="w-1/2 p-6 bg-lime-400 hover:bg-lime-700 rounded-3xl mt-3 mb-3 text-3xl text-zinc-800"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>
      {students.map((student) => (
        <Card  
        key={student.time}
        name={student.name} 
        time={student.time}/>
      ))}
    </div>
  );
}

export default App;
