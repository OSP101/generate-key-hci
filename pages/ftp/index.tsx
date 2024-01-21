import React, { useState, useEffect, useRef } from 'react'
import { Snippet } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon"
import { signOut } from 'next-auth/react';
import { useSession, signIn } from "next-auth/react"


interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function index() {
    const { data: session } = useSession()

    const calculateTimeLeftSinger = (): TimeLeft => {
        const thaiTimeZone = 'Asia/Bangkok';
        const targetDate = new Date('2024-03-13T00:00:00'); // Set your countdown date here
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
        const targetDate = new Date('2024-03-23T00:00:00'); // Set your countdown date here
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



    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">HCI</a>
                </div>
                <div className="flex-none gap-2">

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

            <div className="min-h-screen flex flex-col items-center">

                <h3 className="text-xl text-center font-extrabold">HCI Mini project</h3>

                <div className=" max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <div className=" w-full sm:px-6 py-4">
                        <div className="flex w-full flex-col">
                            <Tabs aria-label="Options" color='success' className=' text-white'>
                                <Tab key="photos" title="งานเดี่ยว" className=' text-white'>
                                    <div className="grid md:grid-cols-2 items-center gap-4 w-full m-4">
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
                                                        <p className="text-small text-default-500">633020334-8</p>
                                                    </div>
                                                </CardHeader>
                                                <Divider />
                                                <CardBody>
                                                    <p className='text-md'>Username และ Password สำหรับเข้าสู่ระบบ</p>
                                                    <br />
                                                    <p className='text-small text-default-500'>Username:</p>
                                                    <Snippet size="sm" color="success" hideSymbol>6330203348</Snippet>
                                                    <p className='text-small text-default-500 pt-1'>Password:</p>
                                                    <Snippet size="sm" color="success" hideSymbol>zgdiccuseugu</Snippet>
                                                </CardBody>
                                                <Divider />
                                                <CardFooter>
                                                    <p className='text-small text-default-500'>update: 17/01/2024 19:48:19</p>

                                                </CardFooter>
                                            </Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xl text-center font-extrabold pb-1 text-black">กำหนดส่งวันจันทร์ ที่ 20 มีนาคม 2567 เวลา 13:00</h3>
                                            <h3 className="text-xl text-center font-extrabold pb-6 text-black">เหลือเวลาอีก</h3>

                                            <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                    <span style={{ "--value" : timeLeftSinger.days } as React.CSSProperties}></span>
                                                    </span>
                                                    days
                                                </div>
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeftSinger.hours } as React.CSSProperties}></span>
                                                    </span>
                                                    hours
                                                </div>
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeftSinger.minutes } as React.CSSProperties}></span>
                                                    </span>
                                                    min
                                                </div>
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeftSinger.seconds } as React.CSSProperties}></span>
                                                    </span>
                                                    sec
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-content pt-5">
                                                <Button
                                                    href="https://github.com/nextui-org/nextui"
                                                    as={Link}
                                                    color="success"
                                                    showAnchorIcon
                                                    variant="solid"
                                                >
                                                    ลิงก์เว็บไซต์สำหรับส่งเอกสารงานเดี่ยว
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab key="music" title="งานกลุ่ม">
                                    <div className="grid md:grid-cols-2 items-center gap-4 w-full m-4">
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
                                                        <p className="text-small text-default-500">633020334-8</p>
                                                    </div>
                                                </CardHeader>
                                                <Divider />
                                                <CardBody>
                                                    <p className='text-md'>กลุ่มที่ 1</p>
                                                    <Chip
                                                        startContent={<CheckIcon size={18} height={undefined} width={undefined} />}
                                                        variant="bordered"
                                                        color="success"
                                                        className='mt-1'
                                                    >
                                                        สุพพิธาน ภักสวัสดิ์
                                                    </Chip>
                                                    <Chip
                                                        startContent={<CheckIcon size={18} height={undefined} width={undefined} />}
                                                        variant="bordered"
                                                        color="success"
                                                        className='mt-1'
                                                    >
                                                        สุพพิธาน ภักสวัสดิ์
                                                    </Chip>
                                                </CardBody>
                                                <Divider />
                                                <CardBody>
                                                    <p className='text-md'>Username และ Password สำหรับเข้าสู่ระบบ</p>
                                                    <br />
                                                    <p className='text-small text-default-500'>Username:</p>
                                                    <Snippet size="sm" color="success" hideSymbol>6330203348</Snippet>
                                                    <p className='text-small text-default-500 pt-1'>Password:</p>
                                                    <Snippet size="sm" color="success" hideSymbol>zgdiccuseugu</Snippet>
                                                </CardBody>
                                                <Divider />
                                                <CardFooter>
                                                    <p className='text-small text-default-500'>update: 17/01/2024 19:48:19</p>

                                                </CardFooter>
                                            </Card>
                                        </div>
                                        <div>

                                            <h3 className="text-xl text-center font-extrabold pb-1 text-black">กำหนดส่งวันจันทร์ ที่ 6 มีนาคม 2567 เวลา 13:00</h3>
                                            <h3 className="text-xl text-center font-extrabold pb-6 text-black">เหลือเวลาอีก</h3>

                                            <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
                                                    </span>
                                                    days
                                                </div>
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
                                                    </span>
                                                    hours
                                                </div>
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
                                                    </span>
                                                    min
                                                </div>
                                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                                    <span className="countdown font-mono text-5xl">
                                                        <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
                                                    </span>
                                                    sec
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-content pt-5">
                                                <Button
                                                    href="#"
                                                    as={Link}
                                                    color="success"
                                                    showAnchorIcon
                                                    variant="solid"
                                                >
                                                    ลิงก์เว็บไซต์สำหรับส่งเอกสารงานกลุ่ม
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>

                        </div>



                    </div>

                </div>
                <p className='text-small text-default-500'>Copyright 2024 © HCI</p>

            </div>
        </div>
    )
}
