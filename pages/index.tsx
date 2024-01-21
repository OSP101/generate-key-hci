import Image from 'next/image'
import { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session } = useSession()
const router = useRouter()
  useEffect(() =>{
    if(session){
      router.push("/ftp")
    }else{
      router.push("/login")
    }
  },[])
  return (
    <></>
  )
}
