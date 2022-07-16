
  interface CardProps {
    name: string,
    time: any,

  }

export function Card(props: CardProps) {

  return(

    <div className="card h-full w-1/2 mb-5 bg-rose-500 text-white rounded-3xl p-6 text-1xl flex items-center  justify-between cursor-pointer hover:bg-rose-700 font-sans">
      <strong>{props.name}</strong>
      <small>{props.time}</small> 
      
    </div>
  )
}