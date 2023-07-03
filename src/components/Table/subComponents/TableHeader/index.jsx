import { useState } from 'react';
const TableHeader = (props) => {
    const {columns, handleSorting } = props;
    const [field, setField] = useState(null);
    const [order, setOrder] = useState('asc');

    const handleFieldClick = (dataIndex) => {
        const nextOrder = field === dataIndex && order === 'asc' ? 'desc' : 'asc';
        setOrder(nextOrder);
        setField(dataIndex);
        handleSorting(dataIndex, nextOrder)
    }
    return (
        <tr>
            {
                columns.map((column, index) => {
                    return <th 
                        style={{width: column.width}}
                        key={index}
                        onClick={column.sortable ? () => handleFieldClick(column.dataIndex) : null}
                    >
                        {column.title} 
                    </th>
                })
            }
        </tr>
    )
}


//danh sach hoc sinh

export default TableHeader;