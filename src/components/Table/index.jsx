import TableHeader from './subComponents/TableHeader'
import TableRow from './subComponents/TableRow';
import './style.css';
const Table = (props) => {

    const {columns, data} = props;
    return (
        <table>
            <thead>
                <TableHeader columns={columns} />
            </thead>
            <tbody>
                <TableRow columns={columns} data={data}/>
            </tbody>
        </table>
    )
}
export default Table;