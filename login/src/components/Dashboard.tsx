import  { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import {  useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [isLogged, setLogged] = useState<boolean | null>(null)
  const navigate = useNavigate()
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log('Successful')
      })
  }

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("uid", uid)
          setLogged(true)
        } else {
          console.log("user is logged out")
          setLogged(false)
        }
      });

      return () => {
        unsub()
      }
}, [])


  useEffect(() => {
    if (isLogged === false) navigate('/signin');
  }, [isLogged, navigate]);

  if (isLogged === null) return <div>Loading...</div>;


  return (
    <>
    {isLogged ? (
      <>
        <div>Dashboard</div>
        <button onClick={signout}>Sign Out</button>
      </>
    ) : null}
  </>
  )
}

export default Dashboard