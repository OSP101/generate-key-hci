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
} from "@nextui-org/react";
import Image from 'next/image'

export default function Custom404() {
    return (
        <div className="container	pt-5 flex justify-center mt-10">
            <div>
            <Image src={`Minions.svg`} alt='' width="400" height={400}/>
            </div>
            <div className="w-1/3 my-auto">
        <h1 className="font-bold from-[#FF72E1] mb-5 to-[#F54C7A] text-5xl bg-clip-text text-transparent bg-gradient-to-b">OOPS!! PAGE<br/>NOT FOUND.</h1>
        <span className="font-normal text-m mt-3">The page you were looking for was not found. This page may no longer exist or its name has changed.</span>
        <br/>
        <Button color="danger" className="mt-5">
        <Link href="/ftp" color="foreground">BACK TO HOME</Link>
      </Button> 
        </div>
      
      </div>
    )
  }