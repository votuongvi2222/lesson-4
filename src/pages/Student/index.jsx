import MyTable from "../../components/Table"
import AddStudent from "./subComponents/AddStudent"
import DeleteStudent from "./subComponents/DeleteStudent";
import UpdateStudent from "./subComponents/UpdateStudent"
import { useEffect, useState, useContext } from "react"
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
import './style.css';
import ThemeContext from "../../contexts/theme";
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
    const [students, setStudents] = useState(defaultData);
    const themeCtx = useContext(ThemeContext);
    const [isScroll, setIsScroll] = useState(false);
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

    const handleThemeChange = (e)  => {
        themeCtx.setTheme(e.target.value);
    }

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > window.screenY) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', onScroll)
        console.log(window.screenTop > window.screenY)
    }, []);


    return (
        <div className={`container-fluid ${themeCtx.theme === 'dark' && 'dark' }`} style={{paddingTop: 20}}>
            <h2>Quản lý học sinh</h2>

            <AddStudent onAdd={handleAddStudent}/>
            <Row style={{marginBottom: 10, float: 'left'}}>

                {/* <Form as={Col}>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Search here ..." />
                    </Form.Group>

                </Form> */}
                <Form.Group controlId="form.theme">
                    <Form.Select defaultValue={themeCtx.theme} aria-label="Chọn theme" required onChange={handleThemeChange}>
                        <option value={'dark'}>Dark Mode</option>
                        <option value={'light'}>Light Mode</option>
                    </Form.Select>
                </Form.Group>
                {/* <Button as={Col} variant="success">
                    Tìm kiếm
                </Button> */}

            </Row>
            <MyTable columns={columns} data={students} handleSorting={handleSorting} />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iste eligendi omnis optio placeat corporis earum laudantium, tenetur delectus a sit! Deleniti ab sapiente quidem? At, quasi! Corporis, eaque.

            </div>
            {
                isScroll &&
                <button className="backToTopBtn" onClick={handleBackToTop}>
                    &#8593;
                </button>
            }
        </div>
    )
}

export default Student;