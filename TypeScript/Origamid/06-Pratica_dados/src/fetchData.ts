export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) throw new Error("");	
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}
