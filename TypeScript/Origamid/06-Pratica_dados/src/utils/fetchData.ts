export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    const data: T = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) console.error('fetchData: ' + e.message);
    return null;
  }
}
