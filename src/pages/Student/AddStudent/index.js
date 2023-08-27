import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
const AddStudent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow} style={{textAlign: 'right', float: 'right', marginBottom: '20px'}}>
                Thêm học sinh mới
            </Button>
            <Form>
                <Modal show={show} size='lg' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm học sinh mới</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="form.fullName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ và tên" name="fullName" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="form.id">
                                <Form.Label>Mã học sinh</Form.Label>
                                <Form.Control type="text" placeholder="Nhập mã học sinh" name="id" required />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="form.age">
                                <Form.Label>Tuổi</Form.Label>
                                <Form.Control type="number" placeholder="Nhập tuổi" name="age" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="form.sex">
                                <Form.Label>Giới tính</Form.Label>

                                <Form.Select defaultValue={1} aria-label="Chọn giới tính" required name='sex'>
                                    <option value={1}>Nữ</option>
                                    <option value={0}>Nam</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className='mb-3' controlId="form.address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập địa chỉ" name="address" required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleClose}>
                            Thêm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    );
}

export default AddStudent;