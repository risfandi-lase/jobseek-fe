import { useState } from "react";
import WorkList from "../work-list/WorkList";
import style from "./Main.module.css";
import { useEffect } from "react";
import WorkDetails from "../work-details/WorkDetails";

export default function Main({ title, location}) {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    console.log('jhkjh')
    fetch(
      `http://localhost:5000/jobs?title=${title}&location=${location}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [title, location]);

  

  return (
    <main className={style.main}>
      <div className={style.container}>
        <WorkList jobList={data} setSelectedJob={setSelectedJob} selectedJob={selectedJob} />
        <WorkDetails jobList={data} selectedJob={selectedJob} />
      </div>
    </main>
  );
}
