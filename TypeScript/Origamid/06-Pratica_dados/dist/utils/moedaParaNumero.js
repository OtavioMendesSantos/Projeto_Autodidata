export default function moedaParaNumero(moeda) {
    if (!moeda)
        return null;
    const moedaFormatada = Number(moeda.replaceAll("R$", "").replaceAll(".", "").replaceAll(",", "."));
    return isNaN(moedaFormatada) ? null : moedaFormatada;
}
//# sourceMappingURL=moedaParaNumero.js.map