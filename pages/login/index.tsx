import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState, Suspense } from 'react'
import { Tabs, Tab, Card, CardBody, Spinner, Button, Image } from "@heroui/react";
import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

export default function index() {
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState(false)

    async function handleGoogleSignin() {
        setIsLoading(true)
        await signIn('google', { callbackUrl: '/ftp' })
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
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <Card className="relative overflow-hidden shadow-xl rounded-2xl border border-white/10 bg-gradient-to-br from-white to-white/50">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
                        <div className="relative p-8">
                            <div className="flex flex-col items-center mb-10">
                                <Image
                                    src="/logo.svg"
                                    alt="HCI Logo"
                                    width={180}
                                    height={180}
                                />
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Welcome Back
                                </h1>
                                <p className="text-gray-500 mt-2">Sign in to continue to HCI</p>
                            </div>

                            <Button
                                fullWidth
                                size="lg"
                                onClick={handleGoogleSignin}
                                isLoading={isLoading}
                                startContent={!isLoading && (
                                    <Image
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        alt="Google"
                                        width={24}
                                        height={24}
                                    />
                                )}
                                className="bg-white text-gray-700 hover:bg-gray-50 font-medium shadow-md hover:shadow-lg transition-all"
                            >
                                Continue with Google
                            </Button>

                            <div className="mt-6 text-center text-sm text-gray-500">
                                Having issues?{' '}
                                <a 
                                    href="https://m.me/hcibysumonta" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </Card>

                    <footer className="mt-8 text-center text-sm text-gray-600">
                        <p className="flex items-center justify-center gap-2">
                            © 2024 HCI v0.4 
                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                            All Rights Reserved
                        </p>
                        <p className="mt-2">
                            Made with ❤️ by{' '}
                            <a 
                                href="http://github.com/OSP101" 
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                OSP101
                            </a>{' '}
                            &{' '}
                            <a 
                                href="http://www.facebook.com/picha143" 
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Aomsin
                            </a>
                        </p>
                    </footer>
                </motion.div>
            </div>
        </>
    )
}