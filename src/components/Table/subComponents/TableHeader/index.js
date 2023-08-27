const TableHeader = ({columns}) => {
    return (
        <tr>
            {
                columns.map((column, index) => {
                    return <th 
                        style={{width: column.width}}
                        key={index}
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