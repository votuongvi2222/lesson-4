import Table from "../../components/Table"

const defaultData = [
    {
        index: 1,
        id: 'std1',
        fullName: 'Nguyen Van A',
        address: 'Hai Thuong Lang Ong',
        age: 18,
        sex: 'female'
    },
    {
        index: 2,
        id: 'std2',
        fullName: 'Nguyen Van A',
        age: 18,
        address: 'Hai Thuong Lang Ong',
        sex: 'male'
    },
    {
        index: 3,
        id: 'std3',
        fullName: 'Nguyen Van A',
        age: 18,
        address: 'Hai Thuong Lang Ong',
        sex: 'female'
    },
    {
        index: 4,
        id: 'std4',
        fullName: 'Nguyen Van A',
        age: 18,
        address: 'Hai Thuong Lang Ong',
        sex: 'male'
    },
]

const Student = () => {

    
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            width: 100,
        },
        {
            title: 'Ho va ten',
            dataIndex: 'fullName',
            width: 200,
            render: (_, value) => {

                return <b>{value}</b>
            }
        },
        {
            title: 'Ma hoc sinh',
            dataIndex: 'id',
            width: 100,
        },
        {
            title: 'Tuoi',
            dataIndex: 'age',
            width: 100,
        },
        {
            title: 'Dia chi',
            dataIndex: 'address',
            width: 300,
        },
        {
            title: 'Gioi tinh',
            dataIndex: 'sex',
            width: 100,
            render: (_, value) => {
                return value === 'female' ? <div style={{color: 'red'}}>{value}</div> : <div style={{color: 'green'}}>{value}</div>
            }
        },
        {
            title: 'Thao tac',
            width: 300,
            render: (row, _) => {
                return <button>Edit</button>
            }
        }
    ]

    return (
        <Table columns={columns} data={defaultData} />
    )
}

export default Student;