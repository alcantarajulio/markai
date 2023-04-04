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
          let rows = [<option value={""}></option>];
          periods.forEach(i => {
            rows.push(<option value={i}>{i}º</option>);
          });
          return rows;
        })()}
      </>
    );
  }

  return (
    <>
      <div style={{ padding: "0px 16px", margin: 0, marginTop: "16px" }}>
        <select style={{ padding: "8px", border: "2px solid black" }} onChange={(e) => filterDisciplineByPeriod(e)}>
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