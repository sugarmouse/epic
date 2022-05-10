import { Form, Input, Button,message } from 'antd';
import styled from 'styled-components';
import { useStores } from '../../stores';
import { useNavigate } from 'react-router-dom';

const Wraper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`

const Login = () => {
  const { AuthStore } = useStores();
  const navigate = useNavigate();

  const onFinish = (values) => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login( )
      .then(() => {
        navigate('/')
      }).catch((e) => {
        message.error('登陆失败')
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const validatePassword = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是字母、数字或者下划线')
    if (value.length < 4 || value.length > 10) return Promise.reject('密码必须为4到10个字符')
    return Promise.resolve()
  }


  return (
      <Wraper>
        <Title>登陆</Title>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              { validator: validatePassword }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 20,
            }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Wraper>
  );
};

export  {Login}