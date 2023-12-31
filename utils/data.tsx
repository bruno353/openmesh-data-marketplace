import axios from 'axios'

export async function getDatasets() {
  const config = {
    method: 'post' as 'post',
    url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/openmesh-data/functions/getDatasets`,
    headers: {
      'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
    },
  }

  let dado

  await axios(config).then(function (response) {
    if (response.data) {
      dado = response.data
      console.log('api response')
      console.log(dado)
    }
  })

  return dado
}

export async function getData(id: any) {
  const data = {
    id,
  }
  console.log(data)
  const config = {
    method: 'post' as 'post',
    url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/openmesh-data/functions/getDataset`,
    headers: {
      'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
      'Content-Type': 'application/json',
    },
    data,
  }

  let dado

  await axios(config).then(function (response) {
    if (response.data) {
      dado = response.data
      console.log(dado)
    }
  })
  return dado
}
