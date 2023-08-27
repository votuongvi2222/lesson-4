import MyTable from "../../components/Table"
import { Button} from 'react-bootstrap';
import './style.css';
const defaultData = [
    {
        id: 'std1',
        fullName: 'Nguyen Van A',
        address: 'Hai Thuong Lang Ong',
        birthYear: 2001,
        sex: 1
    },
    {
        id: 'std2',
        fullName: 'Nguyen Van B',
        birthYear: 1999,
        address: 'Hai Thuong Lang Ong',
        sex: 0
    },
    {
        id: 'std3',
        fullName: 'Nguyen Van C',
        birthYear: 2000,
        address: 'Hai Thuong Lang Ong',
        sex: 1
    },
    {
        id: 'std4',
        fullName: 'Nguyen Van D',
        birthYear: 1996,
        address: 'Hai Thuong Lang Ong',
        sex: 1
    },
]


const Student = () => {

    const columns = [
        {
            title: 'STT',
            width: 50,
            render: (row, value, index) => {
                return index + 1;
            }
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            width: 200,
            render: (_, value) => {
                return <b>{value}</b>
            }
        },
        {
            title: 'Mã học sinh',
            dataIndex: 'id',
            width: 200,
        },
        {
            title: 'Tuổi',
            width: 100,
            render: (row) => {
                return new Date().getFullYear() - row.birthYear
            }
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            width: 400,
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            width: 100,
            render: (_, value) => {
                let sexStr = null, color = null;
                if (value === 1) {
                    sexStr = 'Nữ';
                    color = 'green'
                } else {
                    sexStr = 'Nam';
                    color = 'blue';
                }
                return <div style={{color}}>{sexStr}</div>
            }
        },
        {
            title: 'Thao tác',
            width: 200,
            render: () => {
                return [
                    <Button variant="danger">
                        Xóa 
                    </Button>,
                    <> </>,
                    <Button variant="warning">
                        Sửa 
                    </Button>
                ]
            }
        }
    ]

    return (
        <div style={{paddingTop: 20}}>
            <h2>Quản lý học sinh</h2>
            <Button variant="success" style={{textAlign: 'right', float: 'right', marginBottom: '20px'}}>
                Thêm học sinh mới
            </Button>
            <MyTable columns={columns} data={defaultData} />

        </div>
    )
}

export default Student;