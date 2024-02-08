import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState,Suspense } from 'react'
import { Tabs, Tab, Card, CardBody ,Spinner} from "@nextui-org/react";
import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'



export default function index() {
    const { data: session } = useSession()
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordType, setPasswordType] = useState(true);
    const [inputValid, setInputValid] = useState({
        email: "",
        password: ""
    })

    async function handleGoogleSignin() {
        await signIn('google', { callbackUrl: '/ftp' })
    }

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setInputValid((prevFormIn) => ({
            ...prevFormIn,
            [name]: value,
        }));
    }

    const handlePasswordChange = () => {
        if (!passwordType) {
            setPasswordType(true)
        } else if (passwordType) {
            setPasswordType(false)
        }
    }

    const router = useRouter()
    useEffect(() => {
        if (session) {
            router.push("/ftp");
        } 
    }, [session, router]);

    
    return (
        <>
            <Head>
                <title>Login - HCI</title>
            </Head>
            <div className=" text-[#333]">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    {/* <div className={`grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full bg-gray-500 p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md `}> */}
                        <Card className=' max-w-6xl w-96 p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md'>
                        <div className="md:max-w-md w-full sm:px-6 py-4">
                            <form action="">
                                <div className={`${emailInvalid ? `mb-0` : `mb-12`}`}>
                                    <h3 className="text-3xl font-extrabold">Login to your account</h3>
                                                                    </div>
                                                                    
                                                                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                            <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            width={18} height={18} />Continue with
                        Google
                    </button>
                            </form>

                        </div>

                        </Card>
                    <p className='text-small text-default-500 mb-3 mt-1'>Copyright 2024 © Generate-Key-Hci BY <a href='https://github.com/OSP101' target='_blank'><u>OSP101</u></a></p>

                    {/* </div> */}
                </div >
            </div >
        </>

    )
}