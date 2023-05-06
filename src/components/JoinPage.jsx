import React from 'react'
import { useState } from 'react'
import { Row, Col, Form, InputGroup, Card, Button } from 'react-bootstrap'
import { app } from '../firebaseinit' // 컴포넌트 폴더에 없기때문에 ../ 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';

const JoinPage = ({ history }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [form, SetForm] = useState({
        email: 'pink@inha.com',
        password: '12345678'
    })

    const onChange = (e) => {
        SetForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onJoin = () => {
        if (!window.confirm('회원으로 등록하시겠습니까?')) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then(succes => {
                history.push('/login');

            })
            .catch(error => {
                alert('에러 : ' + error.message);
            })
    }

    if (loading) return <h1 className='text-center my-5'>로딩중...</h1>

    const { email, password } = form;

    return (
        <Row className='justify-content-center my-5'>
            <Col md={5}>
                <h1 className='text-center'>로그인</h1>
                <Card className='p-3'>
                    <Form>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>이 메 일</InputGroup.Text>
                            <Form.Control value={email}
                                onChange={onChange} name="email" />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>비밀번호</InputGroup.Text>
                            <Form.Control value={password} type="password"
                                onChange={onChange} name="password" />
                        </InputGroup>
                        <Button
                            onClick={onJoin}
                            className='w-100'>회원등록</Button>
                        <div className='text-end my-2'>
                            <Link to="/join">로그인</Link>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default JoinPage