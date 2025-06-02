import React from "react";
import style from './NewJob.module.css'

export default function NewJob() {



const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch('https://jobseek-be-5bpq.vercel.app/jobs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: data.title,
    major: data.major,
    company: data.company,
    location: data.location,
    salary: 'Rp.' + ' ' + data.salary,
    category: data.category,
    benefit: data.benefit,
    rating: '4.5',
     listed: 'just now',
    job_category: data.job_category,
    about_role: data.about_role,
    job_desc: ['data.job_desc', 'Responsibility 2'],
    requirements: ['Requirement 1', 'Requirement 2'],
    our_offer: data.our_offer
  })
})
  .then(response => console.log(response, 'tttt'))
  // .then(data => console.log('Created job:', data))
  // .catch(error => console.error('Error:', error));
  };

  return (
    <div className={style['form-box']}>
      <h1>Job Posting Form</h1>
      <form onSubmit={handleSubmit} id={style.form}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>

        <div>
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major"  />
        </div>

        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>

        <div>
          <label htmlFor="salary">Salary:</label>
          <input type="text" id="salary" name="salary" />
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" />
        </div>

        <div>
          <label htmlFor="benefit">Benefit:</label>
          <input type="text" id="benefit" name="benefit" />
        </div>

        <div>
          <label htmlFor="job_category">Job Category:</label>
          <input type="text" id="job_category" name="job_category" />
        </div>

        <div>
          <label htmlFor="about_role">About Role:</label>
          <textarea id="about_role" name="about_role"></textarea>
        </div>

        <div>
          <label>Job Description:</label>
          <div id="jobDescList">
            <div>
              <input type="text" name="job_desc[]" />
            </div>
            <div>
              <input type="text" name="job_desc[]" />
            </div>
            <div>
              <input type="text" name="job_desc[]" />
            </div>
            <div>
              <input type="text" name="job_desc[]" />
            </div>
          </div>
        </div>

        <div>
          <label>Requirements:</label>
          <div id="requirementsList">
            <div>
              <input type="text" name="requirements[]" />
            </div>
            <div>
              <input type="text" name="requirements[]" />
            </div>
            <div>
              <input type="text" name="requirements[]" />
            </div>
            <div>
              <input type="text" name="requirements[]" />
            </div>
            <div>
              <input type="text" name="requirements[]" />
            </div>
            <div>
              <input type="text" name="requirements[]" />
            </div>
            <div>
              <input type="text" name="requirements[]" />
            </div>
          </div>
        </div>

        <div>
          <label for="our_offer">Our Offer:</label>
          <textarea id="our_offer" name="our_offer"></textarea>
        </div>

        <button type="submit">Submit Job Posting</button>
      </form>
    </div>
  );
}
