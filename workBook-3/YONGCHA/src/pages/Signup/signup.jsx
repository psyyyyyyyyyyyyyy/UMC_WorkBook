import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignupContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 200px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: white;
  overflow: hidden;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #111;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 0 10px 0;
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '#666' : '#ff4b5c')};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#666' : '#ff1f1f')};
  }
`;

const SignupPage = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다! 다시 확인해주세요!')
            .required('이메일을 입력해주세요!'),
        password: yup
            .string()
            .min(8, '비밀번호는 8자 이상이어야 합니다!')
            .max(16, '비밀번호는 16자 이하여야 합니다!')
            .required('비밀번호를 입력해주세요!'),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다!')
            .required('비밀번호 확인이 필요합니다!')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        console.log('회원가입 데이터 제출');
        console.log(data);
    }

    return (
        <SignupContainer>
            <FormWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        type='email' 
                        {...register("email")} 
                        placeholder="이메일을 입력하세요" 
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    
                    <Input 
                        type='password' 
                        {...register("password")} 
                        placeholder="비밀번호를 입력하세요" 
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    
                    <Input 
                        type='password' 
                        {...register("passwordCheck")} 
                        placeholder="비밀번호 확인" 
                    />
                    {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}
                    
                    <SubmitButton type='submit' value="회원가입" disabled={!isValid} />
                </Form>
            </FormWrapper>
        </SignupContainer>
    );
};

export default SignupPage;
