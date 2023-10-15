import * as tokenService from './tokenService' 
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/player`

async function create(player) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(player)
  })
  return res.json()
}

async function index() {
  try{
    const res = await fetch(BASE_URL)
    return res.json()
  }catch (err) {
    console.log(err);
  }
}

export {
  index,
  create
}