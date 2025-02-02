import React, { useState, useEffect, useRef } from 'react'
import { Snippet } from "@heroui/react";
import { Tooltip, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Divider, Link, Image, Button, Switch, Avatar, Spinner } from "@heroui/react";
import { Chip } from "@heroui/react";
import CheckIcon from "./CheckIcon"
import { signOut } from 'next-auth/react';
import { useSession, signIn } from "next-auth/react"
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { IoIosInformationCircle } from "react-icons/io";
import { motion } from 'framer-motion';

import { users, groups } from '../../data/data';



interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
    <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
    >
        <span className="font-mono text-xl md:text-5xl bg-gradient-to-br from-success-400 to-success-700 bg-clip-text text-transparent">
            {value.toString().padStart(2, '0')}
        </span>
        <span className="text-sm text-default-500">{label}</span>
    </motion.div>
)

export default function index() {
    const { data: session } = useSession()
    const { theme, setTheme } = useTheme()
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft('2025-03-24T13:00:00'))
    const [timeLeftSinger, setTimeLeftSinger] = useState<TimeLeft>(calculateTimeLeft('2025-03-05T13:00:00'))

    function calculateTimeLeft(targetDate: string): TimeLeft {
        const difference = new Date(targetDate).getTime() - Date.now()
        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
            minutes: Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
            seconds: Math.max(0, Math.floor((difference % (1000 * 60)) / 1000))
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft('2025-03-24T13:00:00'))
            setTimeLeftSinger(calculateTimeLeft('2025-03-05T13:00:00'))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push("/ftp");
        } else {
            // Redirect to the login page only if there's no session
            router.push("/login");
        }
      }, [session, router]);

    const currentUser = users.find(user => user.email === session?.user?.email)
    const currentGroup = groups.find(group => group.id === currentUser?.groupid)

    if (!currentUser) return (
        <div className="min-h-screen flex items-center justify-center">
            <Spinner size="lg" />
        </div>
    )
    return (
        <>
            <Head>
                <title>FTP - Generate-Key-Hci</title>
            </Head>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Generate-Key-Hci</a>
                    </div>
                    <div className="flex-none gap-2 me-2
                    ">

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-success  ring-offset-2">
                                    <img src={session?.user?.image || undefined} alt="User Image" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52">
                                <li><button onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Tabs
                            aria-label="Project Tabs"
                            color="success"
                            variant="light"
                            className="mb-2"
                        >
                            <Tab key="solo" title="งานเดี่ยว">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Card ข้อมูลส่วนตัว */}
                                    <Card className="w-full p-4 bg-gradient-to-br from-success-50 to-success-100">
                                        <CardHeader className="flex gap-4">
                                            <Avatar src={session?.user?.image || undefined} size="lg" />
                                            <div>
                                                <p className="text-lg font-semibold">{session?.user?.name}</p>
                                                <p className="text-sm text-success-600">{currentUser?.stdid} | Section {currentUser?.sec}</p>
                                            </div>
                                        </CardHeader>

                                        <CardBody className="space-y-4">
                                            <div>
                                                <p className="text-sm text-default-500 mb-1">Username</p>
                                                <Snippet symbol="" color="success" variant="flat" className='w-full'>{currentUser?.stdid}</Snippet>
                                            </div>
                                            <div>
                                                <p className="text-sm text-default-500 mb-1">Password</p>
                                                <Snippet symbol="" color="success" variant="flat" className='w-full'>{currentUser?.key}</Snippet>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    {/* Card นับเวลาถอยหลัง */}
                                    <Card className="w-full p-6 bg-gradient-to-br from-default-50 to-default-100">
                                        <h3 className="text-sm md:text-xl font-bold text-center mb-4">⏳ กำหนดส่ง 24 มีนาคม 2568 เวลา 13:00</h3>

                                        <div className="grid grid-flow-col gap-8 justify-center mb-6">
                                            <CountdownItem value={timeLeft.days} label="วัน" />
                                            <CountdownItem value={timeLeft.hours} label="ชั่วโมง" />
                                            <CountdownItem value={timeLeft.minutes} label="นาที" />
                                            <CountdownItem value={timeLeft.seconds} label="วินาที" />
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <Button
                                                as={Link}
                                                href="https://youtu.be/DhMHnSDfYo4"
                                                color="success"
                                                variant="shadow"
                                                target="_blank"
                                                className="font-semibold"
                                            >
                                                📖 คู่มือการส่งเอกสารงานเดี่ยว
                                            </Button>
                                            <Button
                                                as={Link}
                                                href={`https://hci.osp101.dev/hci67/login/index.php?username=${currentUser?.stdid}&password=${currentUser?.key}`}
                                                color="success"
                                                variant="flat"
                                                target="_blank"
                                                className="font-semibold"
                                            >
                                                🌐 ไปยังหน้าส่งเอกสารงานเดี่ยว
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Tab>

                            <Tab key="group" title="งานกลุ่ม">
                                {currentGroup && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Card ข้อมูลกลุ่ม */}
                                        <Card className="w-full p-4 bg-gradient-to-br from-success-50 to-success-100">
                                            <CardHeader className="flex flex-col items-start">
                                                <h4 className="text-lg font-bold">กลุ่ม {currentGroup.id}</h4>
                                                <p className="text-sm text-success-600">{currentGroup.name}</p>
                                            </CardHeader>

                                            <CardBody className="space-y-4">
                                                <div>
                                                    <p className="text-sm text-default-500 mb-1">สมาชิกกลุ่ม</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {users
                                                            .filter(user => user.groupid === currentGroup.id)
                                                            .map((member) => (
                                                                <Tooltip
                                                                    key={member.stdid}
                                                                    content={
                                                                        <div className="p-2">
                                                                            <p className="text-sm">{member.email}</p>
                                                                            <p className="text-xs text-default-500">{member.stdid}</p>
                                                                        </div>
                                                                    }
                                                                >
                                                                    <Chip
                                                                        variant="dot"
                                                                        color="success"
                                                                        className="cursor-pointer"
                                                                    >
                                                                        {member.name}
                                                                    </Chip>
                                                                </Tooltip>
                                                            ))}
                                                    </div>
                                                </div>

                                                <div>
                                                <p className="text-sm text-default-500 mb-1">Username</p>
                                                <Snippet symbol="" color="success" variant="flat" className='w-full'>{currentGroup?.username}</Snippet>
                                            </div>
                                            <div>
                                                <p className="text-sm text-default-500 mb-1">Password</p>
                                                <Snippet symbol="" color="success" variant="flat" className='w-full'>{currentGroup?.key}</Snippet>
                                            </div>
                                            </CardBody>
                                        </Card>

                                        {/* Card นับเวลาถอยหลังงานกลุ่ม */}
                                        <Card className="w-full p-6 bg-gradient-to-br from-default-50 to-default-100">
                                            <h3 className="text-sm md:text-xl font-bold text-center mb-4">⏳ กำหนดส่ง 5 มีนาคม 2568 เวลา 13:00</h3>

                                            <div className="grid grid-flow-col gap-8 justify-center mb-6">
                                                <CountdownItem value={timeLeftSinger.days} label="วัน" />
                                                <CountdownItem value={timeLeftSinger.hours} label="ชั่วโมง" />
                                                <CountdownItem value={timeLeftSinger.minutes} label="นาที" />
                                                <CountdownItem value={timeLeftSinger.seconds} label="วินาที" />
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <Button
                                                    as={Link}
                                                    href="https://youtu.be/DhMHnSDfYo4"
                                                    color="success"
                                                    variant="shadow"
                                                    target="_blank"
                                                    className="font-semibold"
                                                >
                                                    📖 คู่มือการส่งเอกสารงานกลุ่ม
                                                </Button>
                                                <Button
                                                    as={Link}
                                                    href={`https://hci.osp101.dev/hci67/login/index.php?username=${currentGroup.username}&password=${currentGroup.key}`}
                                                    color="success"
                                                    variant="flat"
                                                    target="_blank"
                                                    className="font-semibold"
                                                >
                                                    🌐 ไปยังหน้าส่งเอกสารงานกลุ่ม
                                                </Button>
                                            </div>
                                        </Card>
                                    </div>
                                )}
                            </Tab>
                        </Tabs>

                        <footer className="mt-12 text-center text-sm text-default-500">
                            <p className="flex items-center justify-center gap-2">
                                © 2024 HCI v0.4
                                <span className="w-1 h-1 bg-default-400 rounded-full" />
                                All Rights Reserved
                            </p>
                            <p className="mt-2">
                                Made with ❤️ by{' '}
                                <Link href="http://github.com/OSP101" target="_blank" color="success">
                                    OSP101
                                </Link>{' '}
                                &{' '}
                                <Link href="http://www.facebook.com/picha143" target="_blank" color="success">
                                    Aomsin
                                </Link>
                            </p>
                        </footer>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
