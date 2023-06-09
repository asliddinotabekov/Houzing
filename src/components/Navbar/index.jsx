import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import Filter from '../Filter'
import Footer from '../Footer'
import { Button } from '../Generics'
import { Container,Icon,Link,Main,Section,Wrapper } from './style'




const Navbar = () => {

//   useEffect(()=>{
//     fetch('http://127.0.0.1:8081/api/public/auth/login',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },

//       body: JSON.stringify({
//         email: "admin@gmail.com",
//         password: "admin",
//       }
//     )

//   },[]).then((res) => res.json())
//   .then((res) => {
//     localStorage.setItem('token', res?.authenticationToken
//     );
//     console.log(res)
//   });
// })

  const navigate = useNavigate()
  return (
    <Container >
      <Main>

        <Wrapper>
        <Section logo='true' onClick={()=>navigate('/home')}>
         <div className='flex items-center'>
          <Icon.Logo/>
          <h3 className='ml-4 font-semibold text-[18px] text-[#fff]'>Houzing</h3>
         </div>
        </Section>
        <Section>
        {
          navbar.map((val,index)=>{
            return !val.hidden && <Link key={index} className='text-white'  to={val.path} >
            {val.title}
            </Link>
          })
        }
        </Section>
        <Section>
       <Button type={'dark'} onClick={()=>navigate('/signin')}>Sign In</Button>
        </Section>
        
        </Wrapper>
      </Main>
      <Filter></Filter>
      <Outlet/>
      <Footer/>
    </Container>
  )
}

export default Navbar
