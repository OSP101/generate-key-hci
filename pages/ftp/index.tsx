import React, { useState, useEffect, useRef } from 'react'
import { Snippet } from "@nextui-org/react";
import { Tooltip, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Divider, Link, Image, Button, Switch } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import CheckIcon from "./CheckIcon"
import { signOut } from 'next-auth/react';
import { useSession, signIn } from "next-auth/react"
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { IoIosInformationCircle } from "react-icons/io";

import { users, groups } from '../../data/data';



interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function index() {
    const { data: session } = useSession()
    const { theme, setTheme } = useTheme()
    const [isSelected, setSelected] = useState(false)


    // console.log(theme)
    const swit = () => {
        if (isSelected) {

            setSelected(false)
            console.log("Dark")
            setTheme('dark')
        } else {

            setSelected(true)
            console.log("Light")
            setTheme('light')
        }
    }

    const calculateTimeLeftSinger = (): TimeLeft => {
        const thaiTimeZone = 'Asia/Bangkok';
        const targetDate = new Date('2024-03-06T13:00:00'); // Set your countdown date here
        const currentDate = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', { timeZone: thaiTimeZone });

        const difference = targetDate.getTime() - currentDate.getTime(); // Set your countdown date here
        let timeLeftSinger: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeftSinger = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeftSinger;
    };

    const [timeLeftSinger, setTimeLeftSinger] = useState<TimeLeft>(calculateTimeLeftSinger());

    const calculateTimeLeft = (): TimeLeft => {
        const thaiTimeZone = 'Asia/Bangkok';
        const targetDate = new Date('2024-03-20T13:00:00'); // Set your countdown date here
        const currentDate = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', { timeZone: thaiTimeZone });

        const difference = targetDate.getTime() - currentDate.getTime(); // Set your countdown date here
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeftSinger(calculateTimeLeftSinger());
            setTimeLeft(calculateTimeLeft());

        }, 1000);

        return () => clearInterval(timer);
    }, []);
    const router = useRouter()


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

                    <Switch
                        size="lg"
                        onClick={swit}
                        color="success"
                        thumbIcon={({ className }) =>
                            isSelected ? (
                                <svg
                                    className={className}
                                    aria-hidden="true"
                                    focusable="false"
                                    height="1em"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                >
                                    <g fill="currentColor">
                                        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                                        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    className={className}
                                    aria-hidden="true"
                                    focusable="false"
                                    height="1em"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                >
                                    <path
                                        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                                        fill="currentColor"
                                    />
                                </svg>

                            )
                        }
                    >
                    </Switch>


                </div>

                <div className="min-h-screen flex flex-col items-center">

                    <h3 className="text-xl text-center font-extrabold">HCI Mini project</h3>

                    <div className=" max-w-6xl w-full p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md sm:m-0 md:m-0">
                        <div className=" w-full sm:px-6 py-4">
                            <div className="flex w-full flex-col">
                                {users.map((user, userIndex) => (
                                    user.email === session?.user?.email ? (
                                        <Tabs key={userIndex} aria-label="Options" color='success' className=' text-white'>
                                            <Tab key="photos" title="งานเดี่ยว" className=' text-white'>
                                                <div className="grid md:grid-cols-2 items-center gap-4 w-full  ms:m-0">
                                                    <div className="md:max-w-md w-full">
                                                        <Card className="max-w-[400px]">
                                                            <CardHeader className="flex gap-3">
                                                                <Image
                                                                    alt="nextui logo"
                                                                    height={60}
                                                                    radius="sm"
                                                                    src={session?.user?.image || undefined}
                                                                    width={60}
                                                                />
                                                                <div className="flex flex-col">
                                                                    <p className="text-md">{session?.user?.name}</p>
                                                                    <p className="text-small text-default-500">{session?.user?.email}</p>
                                                                    <p className="text-small text-default-500">{user.stdid} Section: {user.sec}</p>
                                                                </div>
                                                            </CardHeader>
                                                            <Divider />
                                                            <CardBody>
                                                                <p className='text-md'>Username และ Password สำหรับเข้าสู่ระบบ</p>
                                                                <br />
                                                                <p className='text-small text-default-500'>Username:</p>
                                                                <Snippet size="sm" color="success" hideSymbol>{user.stdid}</Snippet>
                                                                <p className='text-small text-default-500 pt-1'>Password:</p>
                                                                <Snippet size="sm" color="success" hideSymbol>{user.key}</Snippet>
                                                            </CardBody>
                                                            <Divider />
                                                            <CardFooter>
                                                                <p className='text-small text-default-500'>update: 13/02/2024 09:48:19</p>

                                                            </CardFooter>
                                                        </Card>
                                                    </div>
                                                    <div>

                                                        <h3 className={`text-xl text-center font-extrabold pb-1 ${theme == "light" ? "text-black" : ""}`}>กำหนดส่งวันจันทร์ ที่ 20 มีนาคม 2567 เวลา 13:00</h3>
                                                        <h3 className={`text-xl text-center font-extrabold pb-6 ${theme == "light" ? "text-black" : ""}`}>เหลือเวลาอีก</h3>

                                                        <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className={`countdown font-mono text-5xl ${theme == "light" ? "text-black" : ""}`}>
                                                                    <span style={{ "--value": timeLeft.days } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                days
                                                            </div>
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className="countdown font-mono text-5xl">
                                                                    <span style={{ "--value": timeLeft.hours } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                hours
                                                            </div>
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className="countdown font-mono text-5xl">
                                                                    <span style={{ "--value": timeLeft.minutes } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                min
                                                            </div>
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className="countdown font-mono text-5xl">
                                                                    <span style={{ "--value": timeLeft.seconds } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                sec
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col justify-content pt-5">
                                                            <Button
                                                                href="https://youtu.be/_TtbrybuyyA"
                                                                as={Link}
                                                                color="success"
                                                                showAnchorIcon
                                                                variant="flat"
                                                                target='blank'
                                                            >
                                                                คู่มือสำหรับส่งเอกสารงานเดี่ยว
                                                            </Button>
                                                            <Button
                                                                href={`https://hcibysumonta.com/hci66/login/index.php?username={user.stdid}`}
                                                                as={Link}
                                                                color="success"
                                                                showAnchorIcon
                                                                variant="flat"
                                                                className='mt-3'
                                                                target='blank'
                                                            >
                                                                ลิงก์เว็บไซต์สำหรับส่งเอกสารงานเดี่ยว
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab key="music" title="งานกลุ่ม">
                                                <div className="grid md:grid-cols-2 items-center justify-start gap-4 w-full">
                                                    <div className="md:max-w-md w-full">

                                                        <Card className="max-w-[400px]">
                                                            <CardHeader className="flex gap-3">
                                                                <Image
                                                                    alt="nextui logo"
                                                                    height={60}
                                                                    radius="sm"
                                                                    src={session?.user?.image || undefined}
                                                                    width={60}
                                                                />
                                                                <div className="flex flex-col">
                                                                    <p className="text-md">{session?.user?.name}</p>
                                                                    <p className="text-small text-default-500">{session?.user?.email}</p>
                                                                    <p className="text-small text-default-500">{user.stdid} Section: {user.sec}</p>
                                                                </div>
                                                            </CardHeader>
                                                            <Divider />

                                                            {groups.map((group, groupIndex) => (
                                                                group.id === user.groupid ? (<div key={groupIndex}>
                                                                    <CardBody>
                                                                        <Tooltip key={groupIndex} color='success' placement='right' content={
                                                                            <div className="px-1 py-1">
                                                                                <div className="text-small font-bold"><b>กลุ่มที่:</b> {group.id} {group.name}</div>
                                                                                <div className="text-tiny"><b>หัวข้อ:</b> {group.topic}</div>
                                                                                <div className="text-tiny"><b>กลุ่มเป้าหมาย:</b> {group.Target}</div>
                                                                                <div className="text-tiny"><b>การทำงานของแอป:</b> </div>
                                                                                {group.details.map((detail, detailIndex) => (
                                                                                    <li key={detailIndex} className="text-tiny">{detail}</li>
                                                                                ))}

                                                                            </div>}>
                                                                            <Button variant="flat" className="capitalize">กลุ่มที่: {group.id} {group.name}</Button>
                                                                        </Tooltip>
                                                                        {users.map((userall, userIndexAll) => (
                                                                            userall.groupid === group.id ? (
                                                                                <Tooltip key={userIndexAll} color='success' placement='right' content={
                                                                                    <div className='flex py-1'>
                                                                                        <Image
                                                                                            alt="nextui logo"
                                                                                            height={100}
                                                                                            radius="sm"
                                                                                            src={userall.image || undefined}
                                                                                            width={60}
                                                                                        />
                                                                                        <div className="flex flex-col ms-1">
                                                                                            <p className="text-small font-bold">{userall.name}</p>
                                                                                            <p className="text-tiny">{userall.email}</p>
                                                                                            <p className="text-tiny">{userall.stdid} Section: {userall.sec}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                }>
                                                                                    <Chip
                                                                                        key={userIndexAll}
                                                                                        startContent={<CheckIcon size={18} height={undefined} width={undefined} />}
                                                                                        variant="bordered"
                                                                                        color="success"
                                                                                        className='mt-1'
                                                                                    >
                                                                                        {userall.name}
                                                                                    </Chip>
                                                                                </Tooltip>
                                                                            ) : null

                                                                        ))}


                                                                    </CardBody>
                                                                    <Divider />
                                                                    <CardBody>
                                                                        <p className='text-md'>Username และ Password สำหรับเข้าสู่ระบบ</p>
                                                                        <br />
                                                                        <p className='text-small text-default-500'>Username:</p>
                                                                        <Snippet size="sm" color="success" hideSymbol>{group.username}</Snippet>
                                                                        <p className='text-small text-default-500 pt-1'>Password:</p>
                                                                        <Snippet size="sm" color="success" hideSymbol>{group.key}</Snippet>
                                                                    </CardBody>
                                                                </div>) : null
                                                            ))}

                                                            <Divider />
                                                            <CardFooter>
                                                                <p className='text-small text-default-500'>update: 13/02/2024 18:48:19</p>

                                                            </CardFooter>
                                                        </Card>

                                                    </div>
                                                    <div>

                                                        <h3 className={`text-xl text-center font-extrabold pb-1 ${theme == "light" ? "text-black" : ""}`}>กำหนดส่งวันจันทร์ ที่ 06 มีนาคม 2567 เวลา 13:00</h3>
                                                        <h3 className={`text-xl text-center font-extrabold pb-6 ${theme == "light" ? "text-black" : ""}`}>เหลือเวลาอีก</h3>

                                                        <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className={`countdown font-mono text-5xl ${theme == "light" ? "text-black" : ""}`}>
                                                                    <span style={{ "--value": timeLeftSinger.days } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                days
                                                            </div>
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className="countdown font-mono text-5xl">
                                                                    <span style={{ "--value": timeLeftSinger.hours } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                hours
                                                            </div>
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className="countdown font-mono text-5xl">
                                                                    <span style={{ "--value": timeLeftSinger.minutes } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                min
                                                            </div>
                                                            <div className={`flex flex-col ${theme == "light" ? "text-black" : ""}`}>
                                                                <span className="countdown font-mono text-5xl">
                                                                    <span style={{ "--value": timeLeftSinger.seconds } as React.CSSProperties} className={theme == "light" ? "text-black" : ""}></span>
                                                                </span>
                                                                sec
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col justify-content pt-5">
                                                            <Button
                                                                href="https://youtu.be/_TtbrybuyyA"
                                                                as={Link}
                                                                color="success"
                                                                showAnchorIcon
                                                                variant="flat"
                                                                target='blank'
                                                            >
                                                                คู่มือสำหรับส่งเอกสารงานกลุ่ม
                                                            </Button>
                                                            {groups.map((group, groupIndex) => (
                                                                group.id === user.groupid ? (
                                                                    <Button
                                                                        href={`https://hcibysumonta.com/hci66/login/`}
                                                                        as={Link}
                                                                        color="success"
                                                                        showAnchorIcon
                                                                        variant="flat"
                                                                        className='mt-3'
                                                                        target='blank'
                                                                    >
                                                                        ลิงก์เว็บไซต์สำหรับส่งเอกสารงานกลุ่ม
                                                                    </Button>
                                                                ) : null))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    ) : null
                                ))}
                            </div>
                        </div>

                    </div>
                    <p className='text-small text-default-500 mb-3 mt-1'>© 2024 HCI v0.4 All Rights Reserved. made with by <a href="http://github.com/OSP101" target="_blank">OSP101</a> and <a href="http://www.facebook.com/picha143" target="_blank" rel="noopener noreferrer">Aomsin</a></p>

                </div>
            </div>
        </>
    )
}
