import style from "./WorkDetails.module.css";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import ClickImage from "/src/assets/click.png";
import { useState } from "react";

export default function WorkDetails({ selectedJob, jobList}) {
  // if (!selectedJob) {
  //   return <div>hellow</div>;
  // } // another way

  const [isLoading, setIsLoading] = useState(false);

  async function handleClickBookmark() {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:5000/jobs/${selectedJob}/bookmark`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("Bookmarked:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }

    console.log(selectedJob);

 }

  const job = jobList.find(j => j.id === selectedJob);

  return (
    <div className={style.container}>
      {job ? (
        <ul className={style["work-details"]}>
          <li className={style["first-li"]} key={job.id}>
            <h2>{job.title}</h2>
            <div className={style["company-rating-box"]}>
              <p className={style["company-icon"]}>
                {job.company} <VscWorkspaceTrusted />
              </p>
              <div className={style["star-icon"]}>
                <FcRating className={style.star} /> {job.rating}
              </div>
            </div>

            <div className={style["detail-box"]}>
              <p className={style.icons}>
                <MdOutlinePlace className={style.icon} /> {job.location}
              </p>
              <p className={style.icons}>
                <LiaUniversitySolid className={style.icon} />{" "}
                {job.major}
              </p>
              <p>{String(job.is_bookmarked)}</p>
              <p className={style.icons}>
                <CiClock2 className={style.icon} /> {job.job_category}
              </p>
              <p className={style.icons}>
                <CiMoneyBill className={style.icon} /> {job.salary}
              </p>
            </div>

            <p className={style.posted}>Posted {job.listed}</p>

            <div className={style["button-box"]}>
              <button>Lamaran Cepat</button>
              {!job.is_bookmarked ? (
                <button onClick={handleClickBookmark}>Bookmark</button>
              ) : (
                <button>UnBookmark</button>
              )}
            </div>

            <div className={style.role}>
              <p className={style.title}>About the role</p>
              <p className={style.details}>{job.about_role}</p>
            </div>

            <div className={style.role}>
              <p className={style.title}>What you'll be doing</p>
              <ul>
                {job.job_desc?.map((description, id) => (
                  <li key={id}>{description}</li>
                ))}
              </ul>
            </div>

            <div className={style.role}>
              <p className={style.title}>What we're looking for</p>
              <ul>
                {job.requirements?.map((require, id) => (
                  <li key={id}>{require}</li>
                ))}
              </ul>
            </div>

            <div className={style.role}>
              <p className={style.title}>What we offer</p>
              <p className={style.details}>{job.our_offer}</p>
            </div>
          </li>
        </ul>
      ) : (
        <div className={style["before-clicked-box"]}>
          <p className={style.opening}>&#129128; Select a job</p>
          <p className={style.outro}>Display details here</p>
          <img src={ClickImage} alt="" />
        </div>
      )}
    </div>
  );
}
