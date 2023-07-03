import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';
const DeleteStudent = (props) => {
    const { onDelete, row } = props;
    const [show, setShow] = useState(false);
    const [student,] = useState(row)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onDelete(student.id);
        handleClose();
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Xóa 
            </Button>
            <Modal show={show} size='lg' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa học sinh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa học sinh {student && student.fullName}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="danger" type='submit' onClick={handleSubmit}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteStudent;