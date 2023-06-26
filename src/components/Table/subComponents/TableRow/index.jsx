import TableCell from "../TableCell";

const TableRow = (props) => {
    const {columns, data} = props;
    return (
        <>
            {
                data.map((row, index) => 
                    <tr key={index}>
                        {
                            columns.map((column, colIndex) => <TableCell colIndex={colIndex} column={column} row={row}/>)
                        }
                    </tr>
                )
            }
        </>
    )
}

export default TableRow;