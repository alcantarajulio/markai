import Disciplines from "@/components/DIsciplines";
import NavBar from "@/components/NavBar";
import { getAllDisciplines } from "@/services/discipline.service"

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