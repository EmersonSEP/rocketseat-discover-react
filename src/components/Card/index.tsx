
  interface CardProps {
    name: any,
    time: any,
  }

export function Card(props: CardProps) {

  return(

    <div className="card h-full w-1/2 mb-5 bg-rose-500 text-white rounded-3xl p-6 text-3xl flex items-center  justify-between cursor-pointer hover:bg-rose-700 font-Roboto">
      <strong className= {`${props.name}`}/>
      <small className= {`${props.time}`}/>
      
    </div>
  )
}