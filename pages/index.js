import Upload from '../components/Upload'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'


import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function Home()
{
  const { user, login, logout } = useAuth();
  
  return (
    <>
      <Header />
      {!user && <LoginForm onSubmit={login}/>}
      < Upload />
      
      
    </>
  )

}

