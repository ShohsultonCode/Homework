import React,{useEffect, useState} from 'react';
import "./style.scss";
import User from '../../components/Userss/index'
import { API } from '../../API/index'

const index = () => {

   const [user, setUser] = useState([])
   const [load, setLoad] = useState(false)


   const [username, setUsername] = useState("")
   const [useremail, setUseremail] = useState("")

   useEffect(()=>{
      API.getUser().then((user)=>{
         setUser(user.data)
         setLoad(true)
      })

   },[user])

      const addUsers = ()=> {
         const newUser = {
            username:username,
            useremail:useremail  
         }

         
         if (username.trim().length === 0 || useremail.trim().length === 0) {
            alert('Please fill the username')
         }else{
            API.addUser(newUser)
            alert('Successfully')
      
         }
         setUsername("")
         setUseremail("")
      }



   return (
      <div>
         <div className="card p-5 shadow mx-auto mt-5 w-50">

            <form action="#" onSubmit={addUsers}>
               <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className='form-control p-3 my-3' placeholder='Enter username' />
               <input value={useremail} onChange={(e)=>setUseremail(e.target.value)} on type="email" className='form-control p-3' placeholder='Enter email' />
               <button type={'submit'} className='btn btn-success'>Submit</button>
            </form>
         </div>
         <h1 className='text-center'>User list</h1>
          <ul className='list-group w-50 mx-auto '>
         {
            user.map((item)=>{
             return  <User key={item.id} info={item}/>
            })
         }
      </ul>
      </div>
   );
};

export default index;