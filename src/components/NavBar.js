
import Link from "next/link"
export default function NavBar() {
  return (
    <div className="container row">
      <div className="col"><Link className="link" href={'/Task1'}>TASK 1</Link></div>
      <div className="col"><Link className="link" href={'/Task2'}>TASK 2</Link></div>
      <div className="col"><Link className="link" href={'/Task3'}>TASK 3</Link></div>
    </div>
  )
}
