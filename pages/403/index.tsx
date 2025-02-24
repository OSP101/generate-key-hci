import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Link,
} from "@heroui/react";
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"


export default function index() {
  return (
    <div className="container	pt-5 flex justify-center mt-10">
            <div>
            <Image src={`403-Error-Forbidden-amico.svg`} alt='' width="400" height={400}/>
            </div>
            <div className="w-1/3 my-auto">
        <h1 className="font-bold from-[#FF72E1] mb-5 to-[#F54C7A] text-5xl bg-clip-text text-transparent bg-gradient-to-b">OOPS!!<br/> Forbidden Error.</h1>
        <span className="font-normal text-m mt-3">Because your email is not allowed to use the website generate-key-hci, if you encounter problems logging in, contact <Link isExternal showAnchorIcon href='m.me/hcibysumonta' color="danger">Click</Link></span>
        <br/>
        <Button color="danger" className="mt-5" onClick={() => signOut({ callbackUrl: '/login' })}>BACK TO LOGIN
      </Button> 
        </div>
      
      </div>
  )
}
