import Disciplines from "@/components/Disciplines";
import NavBar from "@/components/NavBar";
import { getAllDisciplines } from "@/services/discipline.service"

/**
 * @typedef Props
 * @property {import("../../services/discipline.service").Discipline[]} disciplines
 */

/**
 * @param {Props} props
 */
export default function Page({ disciplines }) {
  return (
    <>
      <Disciplines disciplines={disciplines}/>
      <NavBar />
    </>
  )
}

export async function getStaticProps() {
  const disciplines = getAllDisciplines();
  return {
    props: { disciplines: disciplines }
  }
}