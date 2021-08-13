export async function getUsersLoro(){
  const res = await fetch("https://api.github.com/search/users?q=YOUR_NAME");
  const resJson = await res.json();
  return resJson
}
