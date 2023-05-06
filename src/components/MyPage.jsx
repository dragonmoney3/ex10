import React from 'react'
import { useState } from 'react'
import { Row, Col, Form, InputGroup, Card, Button } from 'react-bootstrap'

const MyPage = () => {
    const [form, setForm] = useState({
        name: '무기명',
        phone: '010-1212-3434',
        address: '인천 서구 경서동',
        image: 'https://via.placeholder.com/200x200'
    });

    const { name, phone, address, image } = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onChangeFile = (e) => {
        setForm({
            ...form,
            image: URL.createObjectURL(e.target.files[0]),
        })
    }

    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center'>회원정보</h1>
                <Card className='p-5'>
                    <Form>
                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>메 일</InputGroup.Text>
                            <Form.Control readOnly
                                value={sessionStorage.getItem('email')} />
                        </InputGroup>

                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>이 름</InputGroup.Text>
                            <Form.Control
                                onChange={onChange} name="name"
                                value={name} />
                        </InputGroup>

                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>전 화</InputGroup.Text>
                            <Form.Control
                                onChange={onChange} phone="phone"
                                value={phone} />
                        </InputGroup>

                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>주 소</InputGroup.Text>
                            <Form.Control
                                onChange={onChange} address="address"
                                value={address} />
                        </InputGroup>

                        <div className='my-2'>
                            <img src={image} width="25%" className='my-2' />
                            <Form.Control onChange={onChangeFile}
                                type="file" />
                        </div>

                        <div className='text-center my-2'>
                            <Button>정보수정</Button>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row >
    )
}

export default MyPage