import { useData } from '../context/DataContext';
import VendaItem from '../components/VendaItem';
import Loading from '../components/Loading';

const Vendas = () => {
    const { data, loading } = useData();

    if (loading) return <Loading />;
    if (data === null) return null;
    return (
        <ul>{data.map(venda => (
            <li key={venda.id}>
                <VendaItem venda={venda} />
            </li>))}
        </ul>
    )
}

export default Vendas