import style from "./workList.module.css";

export default function WorkList({ jobList, selectedJob, setSelectedJob }) {
  return (
    <div className={style.container}>
      <ul className={style["work-list"]}>
        {jobList.map((job) => (
          <li
            key={job.id}
            onClick={() => setSelectedJob(job.id)}
            className={
              selectedJob && job.id === selectedJob.id ? style.active : ""
            }
          >
            <h2>{job.title}</h2>
            <p className={style.company}>{job.company}</p>
            <p> {job.location}</p>
            <p>{String(job.is_bookmarked)}</p>
            <p> {job.salary}</p>
            <p>{job.category}</p>
            <p>{job.jobDesc}</p>
            <p>{job.benefit}</p>
            <p className={style.listed}>{job.listed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// const job = [
//   {
//     id: "1",
//     title: "Production Operator",
//     company: "PT. Shimano Batam",
//     location: "Batam Kota, Kepulauan Riau",
//     salary: "Rp. 5.000.000 - Rp. 7.000.000",
//     jobDesc: "Production, Manufacturing & Production",
//     benefit: "career path, 5-Days work, salary negotiatable",
//   },
//   {
//     id: "2",
//     title: "Software Engineer",
//     company: "Tokopedia",
//     location: "Jakarta Selatan, DKI Jakarta",
//     salary: "Rp. 15.000.000 - Rp. 25.000.000",
//     jobDesc: "Information Technology, Software Development",
//     benefit: "health insurance, remote work option, annual bonus",
//   },
//   {
//     id: "3",
//     title: "Marketing Manager",
//     company: "Unilever Indonesia",
//     location: "Tangerang, Banten",
//     salary: "Rp. 20.000.000 - Rp. 30.000.000",
//     jobDesc: "Marketing, Brand Management",
//     benefit: "performance bonus, company car, leadership training",
//   },
//   {
//     id: "4",
//     title: "Accounting Staff",
//     company: "Bank BCA",
//     location: "Surabaya, Jawa Timur",
//     salary: "Rp. 6.000.000 - Rp. 8.500.000",
//     jobDesc: "Finance, Accounting & Auditing",
//     benefit: "BPJS, annual leave, meal allowance",
//   },
//   {
//     id: "5",
//     title: "Hotel Receptionist",
//     company: "Ayana Resort Bali",
//     location: "Badung, Bali",
//     salary: "Rp. 4.500.000 - Rp. 6.000.000",
//     jobDesc: "Hospitality & Tourism",
//     benefit: "accommodation, service charge, meals on duty",
//   },
//   {
//     id: "6",
//     title: "Civil Engineer",
//     company: "PT. Waskita Karya",
//     location: "Makassar, Sulawesi Selatan",
//     salary: "Rp. 8.000.000 - Rp. 12.000.000",
//     jobDesc: "Engineering, Construction",
//     benefit: "project bonus, certification program, field allowance",
//   },
// ];
