import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    data?.forEach((element) => {
        console.log(element);
    });
}
handleData();
//# sourceMappingURL=main.js.map