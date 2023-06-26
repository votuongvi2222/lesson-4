const TableCell = (props) => {
    const {column, row, colIndex} = props;

    const value = column.dataIndex ? row[column.dataIndex] : null;
    return (
        <td key={colIndex} style={{width: column.width}}>
            {
                column.render ? column.render(row, value) : value
            }
        </td>
    )
}

export default TableCell;