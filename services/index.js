import axios from 'axios'

const BASE_URL = 'https://www.zippia.com/api/jobs/'

export default function fetchJobs(jobTitle="") {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: BASE_URL,
      data: {
        "companySkills": true,
        "dismissedListingHashes": [],
        "fetchJobDesc": true,
        jobTitle,
        "locations": [],
        "numJobs": 20,
        "previousListingHashes": []
      }
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(e => {
        reject(e)
      })
  })
}