import Disciplines from "@/components/Disciplines";
import { getAllDisciplines } from "@/services/discipline.service"
import React, { useState } from "react";

/**
 * @param {{disciplines: import("../../services/discipline.service").Discipline[], periods: number[]}} props
 */
export default function Page({ disciplines, periods }) {
  const [disciplinesFiltered, setDisciplinesFiltered] = useState(disciplines);

  /**
   * 
   * @param {React.ChangeEvent<HTMLSelectElement>} e 
   */
  function filterDisciplineByPeriod(e) {
    if (e.target.value == "") {
      setDisciplinesFiltered(disciplines);
      return;
    }
    const period = parseInt(e.target.value);
    /**
     * @type {import("@/services/discipline.service").Discipline[]}
     */
    const _disciplinesFiltered = [];
    disciplines.forEach(discipline => {
      if (discipline.period == period) {
        _disciplinesFiltered.push(discipline);
      }
    });
    setDisciplinesFiltered(_disciplinesFiltered);
  }

  const options = () => {
    return (
      <>
        {(() => {
          let rows = [<option key={""} value={""}></option>];
          periods.forEach(i => {
            rows.push(<option key={i} value={i}>{i}º</option>);
          });
          return rows;
        })()}
      </>
    );
  }

  return (
    <>
      <div style={{ padding: "16px 8px 0 8px", margin: "0 auto"}}>
        <select style={{ padding: "12px 4px", border: "2px solid black", width: "100%", fontSize: "16px" }} onChange={(e) => filterDisciplineByPeriod(e)}>
          {options()}
        </select>
      </div>
      <Disciplines disciplines={disciplinesFiltered} />
    </>
  )
}

export async function getStaticProps() {
  const disciplines = getAllDisciplines();
  const periods = new Set();
  disciplines.forEach((discipline) => {
    periods.add(discipline.period);
  });
  return {
    props: { disciplines: disciplines, periods: Array.from(periods) }
  }
}