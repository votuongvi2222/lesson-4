const TableHeader = (props) => {
    const {columns} = props;
    return (
        <tr>
            {
                columns.map((column, index) => <th style={{width: column.width}} key={index}>{column.title}</th>)
            }
        </tr>
    )
}


//danh sach hoc sinh

export default TableHeader;