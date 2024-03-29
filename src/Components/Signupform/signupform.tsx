import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const Signupform = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    const registerHandle = async (e:{preventDefault: ()=> void;}) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8000/api/create/user',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({firstname, lastname, email, username,password}),
            });
            if (response.ok) {
              toast.success('Амжилттай бүртгүүллээ')
                console.log('Амжилттай бүртгүүлээ Succesfull')
            } else {
                setError('Бүртгэлтэй хэрэглэгч байна')
              toast.success('Зарим мэдээлэл дутуу байна')
            }

        }catch(error){
            console.log('err:',error)
        }
    }
  return (
    <div className='wrapper'>
      <form onSubmit={registerHandle}>
        <h1>Бүртгүүлэх</h1>
        <div className="input-box">
          <input type="text" placeholder='Овог' required value={firstname} onChange={(e)=> setFirstName(e.target.value)}/>
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="text" placeholder='Нэр' required value={lastname}  onChange={(e)=> setLastName(e.target.value)} />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="text" placeholder='Нэвтрэх нэр' required value={username} onChange={(e)=> setUserName(e.target.value)} />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="email" placeholder='И-Мэйл' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Нууц үг' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <FaUser className='icon'/>
        </div>
        <button type='submit'>Бүртгүүлэх</button>
        <div className="register-link">
          <p>
            Хэрэв Бүртгэлтэй бол <Link to='/'>Нэвтрэх</Link>
          </p>
        </div>
      </form>  
   
    </div>
  )
}

export default Signupform
