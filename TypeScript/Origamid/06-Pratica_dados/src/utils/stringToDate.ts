export default function stringToDate(texto: string): Date {
  const [data, tempo] = texto.split(" ");

  // O .map(Number) vai aplicar a fun o Number para cada item do array,
  // transformando as strings em números.
  // Por exemplo, ["1", "2", "3"] => [1, 2, 3].
  const [dia, mes, ano] = data.split("/").map(Number);
  const [hora, minuto] = tempo.split(":").map(Number);

  const agora = new Date(ano, mes - 1, dia, hora, minuto);
  return agora;
}
