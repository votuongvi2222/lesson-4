import TableHeader from './subComponents/TableHeader'
import TableRow from './subComponents/TableRow';
import './style.css';
import { useEffect } from 'react';
const Table = (props) => {

    const {columns, data, handleSorting} = props;

    useEffect(() => {

    }, [columns, data])
    return (
        <table>
            <thead>
                <TableHeader columns={columns} handleSorting={handleSorting}/>
            </thead>
            <tbody>
                <TableRow columns={columns} data={data}/>
            </tbody>
        </table>
    )
}
export default Table;