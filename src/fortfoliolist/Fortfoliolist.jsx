import "./fortfoliolist.css"

export default function Fortfoliolist({title, id, active, setselected}) {
  const handleId = () =>{
    setselected(id)
  }
  return (
    <li className={active ? "fortfoliolist active" : "fortfoliolist"} onClick={handleId}>
        {title}
    </li>
  )
}
