import Disciplines from "@/components/Disciplines";
import NavBar from "@/components/NavBar";
import { getAllDisciplines } from "@/services/discipline.service"
import React from "react";

// @ts-ignore
export default function Page({ disciplines }) {
  /** @type import("../../services/discipline.service").Discipline[]) */
  const _disciplines = disciplines;
  return (
    <>
      <Disciplines disciplines={_disciplines} />
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