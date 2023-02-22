import { getAllDisciplines } from "@/services/post.service"
import Link from "next/link";

export default function Disciplines({ disciplines }) {
  return (
    <>
    <Link href={"/"}>Home</Link>
    <ul>
      {disciplines.map((discipline) =>
        <li key={discipline}>
          <h2><Link href={`disciplinas/${discipline}`}>{discipline}</Link></h2>
        </li>)}
    </ul>
    </>
  )
}

export async function getStaticProps() {
  const disciplines = getAllDisciplines();
  return {
    props: { disciplines: disciplines }
  }
}