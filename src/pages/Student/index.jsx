import MyTable from "../../components/Table"
import AddStudent from "./subComponents/AddStudent"
import DeleteStudent from "./subComponents/DeleteStudent";
import UpdateStudent from "./subComponents/UpdateStudent"
import { useEffect, useState } from "react"
const defaultData = [
    {
        id: 'std1',
        fullName: 'Nguyen Van A',
        address: 'Hai Thuong Lang Ong',
        age: 20,
        sex: 1
    },
    {
        id: 'std2',
        fullName: 'Nguyen Van B',
        age: 18,
        address: 'Hai Thuong Lang Ong',
        sex: 0
    },
    {
        id: 'std3',
        fullName: 'Nguyen Van C',
        age: 18,
        address: 'Hai Thuong Lang Ong',
        sex: 1
    },
    {
        id: 'std4',
        fullName: 'Nguyen Van D',
        age: 17,
        address: 'Hai Thuong Lang Ong',
        sex: 1
    },
]

const Student = () => {
    const [students, setStudents] = useState(defaultData)
    
    const columns = [
        {
            title: 'STT',
            width: 50,
            sortable: false,
            render: (row, value, index) => {
                return index + 1;
            }
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            width: 200,
            sortable: true,
            render: (_, value) => {

                return <b>{value}</b>
            }
        },
        {
            title: 'Mã học sinh',
            dataIndex: 'id',
            width: 200,
            sortable: true,
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
            width: 100,
            sortable: true,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            width: 400,
            sortable: true,
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            width: 100,
            sortable: true,
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
            sortable: false,
            render: (row, _) => {
                return [
                    <DeleteStudent onDelete={handleDeleteStudent}  row={row}/>,
                    <>{' '}</>,
                    <UpdateStudent onUpdate={handleUpdateStudent}  row={row}/>
                ]
            }
        }
    ]

    const handleAddStudent = (student) => {
        student.sex = student.sex ? student.sex : 1;
        setStudents([...students, student])
    }

    const handleUpdateStudent = (student) => {
        const _updatedStudents = [...students].map(std => std.id === student.id ? student : std);
        setStudents(_updatedStudents)
    }

    const handleDeleteStudent = (id) => {
        const _updatedStudents = [...students].filter(std => std.id !== id);
        setStudents(_updatedStudents)
    }

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...students].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "vi", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setStudents(sorted);
        }
    };

    useEffect(() => {

    }, [students]);

    return (
        <div className="container" style={{paddingTop: 20}}>
            <h2>Quản lý học sinh</h2>

            <AddStudent onAdd={handleAddStudent}/>
            <MyTable columns={columns} data={students} handleSorting={handleSorting} />
        </div>
    )
}

export default Student;