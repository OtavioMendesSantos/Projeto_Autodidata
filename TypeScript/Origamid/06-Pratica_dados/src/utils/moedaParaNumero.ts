
/**
 * Recebe '3.500,00' retorna 3500.00 
 */
export default function moedaParaNumero(moeda: string): number | null {
  if (!moeda) return null;
  const moedaFormatada = Number(
    moeda.replaceAll("R$", "").replaceAll(".", "").replaceAll(",", ".")
  );

  return isNaN(moedaFormatada) ? null : moedaFormatada;
}
