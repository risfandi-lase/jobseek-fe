fetch('https://jobseek-be-5bpq.vercel.app/jobs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Job Title',
    major: 'Relevant Major',
    company: 'Company Name',
    location: 'City, Country',
    salary: 'Rp. 10.000.000 - Rp. 12.000.000',
    category: 'Category',
    benefit: 'benefit details',
    rating: '4.5',
    listed: 'just now',
    job_category: 'Full time',
    about_role: 'Description about the role',
    job_desc: ['Responsibility 1', 'Responsibility 2'],
    requirements: ['Requirement 1', 'Requirement 2'],
    our_offer: 'Offer details'
  })
})
  .then(response => response.json())
  .then(data => console.log('Created job:', data))
  .catch(error => console.error('Error:', error));