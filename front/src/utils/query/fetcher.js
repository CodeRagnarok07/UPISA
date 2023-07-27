
const backend = import.meta.env.VITE_BACKEND_URL

const Fetcher = async (path) => {

  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Accept-Language": "es"
  }

  const urlFetch = backend + path
  // console.log(urlFetch);

    const response = await fetch(urlFetch, {
      method: "GET",
      headers: headersList
    });
    const data = await response.json();
    return data
    
  
}

export default Fetcher