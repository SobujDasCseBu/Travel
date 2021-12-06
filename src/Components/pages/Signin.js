import React from 'react'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 280px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`
const Header = styled.p`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(48, 0, 185);
  font-size: 3rem;
  font-weight: 600;
  line-height: 4.9rem;
  text-align: center;
`

const HDesc = styled.p`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: 400;
  text-align: center;
  width: 21.5rem;
  display: inline;
`
const HDescp = styled.p`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: 400;
  text-align: center;
  width: 21.5rem;
  display: block;
`

const HDescs = styled.p`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: 400;
  text-align: center;
  width: 18.5rem;
  display: inline;
  margin-left: 75px;
`
const Bold = styled.p`
  font-weight: 600;
  display: inline;
`
const Form = styled.form`
  margin-top: 40px;
  width: 100%;
`
const Input = styled.input`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(48, 0, 185);
  border-radius: 0.8rem;
  border-width: 1px;
  border-style: solid;
  outline: none;
  background: white;
  padding: 8px 15px;
  font-size: 1.3rem;
  font-weight: 200;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
  box-shadow: 1px 1px #000000;
`
const Preq = styled.p`
  text-align: right;
  color: rgb(243, 147, 147);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`
const AFPass = styled.a`
  display: block;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 300;
  text-align: center;
  color: rgb(48, 0, 185);
  box-sizing: border-box;
  margin: 0.9rem 0px 0px;
  min-width: 0px;
  cursor: pointer;
`

const SButton = styled.button`
  font-size: 1.7rem;
  line-height: 1.6rem;
  font-weight: 600;
  height: 3.5rem;
  width: 18rem;
  box-sizing: border-box;
  margin: 2.1rem 0px 0px;
  min-width: 0px;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  padding: 8px 10px;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  font-weight: normal;
  color: rgb(255, 255, 255);
  background-color: rgb(48, 0, 185);
  border-radius: 5rem;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 1.5px;
  box-shadow: 4px -2px #888888;
`
const CSpan = styled.span`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(48, 0, 185);
  cursor: pointer;
`
const CAngkor = styled.a`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(48, 0, 185);
`
export default function SignIn() {
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [emailReq, setEmailReq] = React.useState(false)
  const [passReq, setPassReq] = React.useState(false)

  const inputref = useRef(null)
  useEffect(() => {
    inputref.current.focus()
  }, [])
  return (
    <div>
      <Container>
        <div>
          <i class='fas fa-sign-in-alt'></i>
        </div>
        <div>
          <Header>TRAVL</Header>
          <HDesc>
            ADVENTURE <Bold>AWAITS</Bold>
          </HDesc>
        </div>
        <Form>
          <Preq style={emailReq ? { display: '' } : { display: 'none' }}>
            This field is required.{' '}
          </Preq>
          <Input
            ref={inputref}
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            onBlur={(e) => {
              if (!email) setEmailReq(true)
            }}
          />
          <Preq style={passReq ? { display: '' } : { display: 'none' }}>
            This field is required.{' '}
          </Preq>
          <Input
            placeholder='Password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            onBlur={(e) => {
              if (!pass) setPassReq(true)
            }}
          />
          <AFPass>Forgot Password?</AFPass>
          <SButton>SIGN IN</SButton>
          <HDescp>Don't have an account?</HDescp>
          <HDescs>
            <CSpan>
              {' '}
              <CAngkor>Sign up</CAngkor> in a flash
            </CSpan>
          </HDescs>
        </Form>
      </Container>
    </div>
  )
}
