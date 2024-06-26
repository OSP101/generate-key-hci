import { image } from "@nextui-org/react";
import React from "react";
const users = [
    {
        id: 1,
        name: "Supphitan Paksawad Co-TA",
        email: "supphitan.p@kkumail.com",
        stdid: "6330203136",
        key: "1234",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJXFlu73BECmcaLVJQHbcjjdsncvfiaEVAKYyH7QfMQdA9A"
    },
    {
        id: 2,
        name: "pimnapa",
        email: "pimnapa@kkumail.com",
        stdid: "643020399-1",
        key: "zgdiccuseugu",
        groupid: 0,
        sec: 1,
        image: ""
    },
    {
        id: 3,
        name: "Pichamon Boonsre TA",
        email: "pichamon.bo@kkumail.com",
        stdid: "633020313-6",
        key: "1234",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUJiLFyhDzb--jtqgzumW4f5Qhc9lXzNoJbtWhChyaEIg"
    },
    {
        id: 4,
        name: "นางสาวฐิติมา บุญพรมมา",
        email: "thitima.b@kkumail.com",
        stdid: "663380154-6",
        key: "nxjlkqfwcbla",
        groupid: 1,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJpfeqdVrvJf9IzxlqviBZIdmlqRpS7-6307ny4SWcE"
    },
    {
        id: 5,
        name: "นางสาวพิธิดา คำชารี",
        email: "phithida.k@kkumail.com",
        stdid: "663380175-8",
        key: "njhmdtctdwre",
        groupid: 1,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJdvdmTeCWdKn1Y4tUmZS70UaTCBg6AXVnAyGZACuCU"
    },
    {
        id: 6,
        name: "นายภานุวัฒน์ ลครราช",
        email: "phanuwat.l@kkumail.com",
        stdid: "663380179-0",
        key: "jssfricuvceu",
        groupid: 1,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKj4KS1U1pG3LDnQ_WTEkpwbdMilvlq9D-tgRgQHTc0"
    }
    ,
    {
        id: 7,
        name: "นายปกรณ์ รอดปรีชา",
        email: "pakorn.l@kkumail.com",
        stdid: "663380489-5",
        key: "fcwsipwnnzrq",
        groupid: 1,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLZuZQVJ3Hmow_zFH3_Q1dQwU2ALz7PZnYi5Pkd0br2"
    },
    {
        id: 8,
        name: "นายดรัสวัจ ยิ้มพิรัตน์",
        email: "daratsawat.y@kkumail.com",
        stdid: "663380158-8",
        key: "dedwatisrjrb",
        groupid: 2,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKx3udOA9BYP70Wc5byELmFPEYOL3W4IwFWsi_hXTsN"
    },
    {
        id: 9,
        name: "นายธนภัทร สุเพ็ญ",
        email: "thanapat.su@kkumail.com",
        stdid: "663380159-6",
        key: "kwmstbnosplg",
        groupid: 2,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXRiVPBLB04Cn6t2D16w11Or63gL0n0DE8115RESwE6qQ"
    },
    {
        id: 10,
        name: "นายธฤต สุมาลัย",
        email: "tharit.su@kkumail.com",
        stdid: "663380164-3",
        key: "rmkowplvfera",
        groupid: 2,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL7Z9c4QkH31aiBv6l9oNmKWIp5FUJlUie7hwmvYyX5"
    }, {
        id: 11,
        name: "นายพุฒิศานต์ ศรีนันท์ดอน",
        email: "puttisan.s@kkumail.com",
        stdid: "663380176-6",
        key: "hmyyqhxpfnkm",
        groupid: 2,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLXQb9vOxBuNLcqZn4y74bkl5lmW1bk279WkxwTmBxh"
    },
    {
        id: 12,
        name: "นางสาวจิรัฐติกานต์ ชิณวงษ์",
        email: "jiruttikan.c@kkumail.com",
        stdid: "663380148-1",
        key: "phuwrvvqquja",
        groupid: 3,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUiyg_A6xW39_A3FBY4Bs4__CfxN263qaRPGVEA918BCg"
    },
    {
        id: 13,
        name: "นายธีรภัทร สังเกตกิจ",
        email: "thiraphat.sa@kkumail.com",
        stdid: "663380488-7",
        key: "gcovycffyetj",
        groupid: 3,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLLeWDpzE5b2L4snTmFneuKAsT1q2be0QCENfJIxNmD"
    },
    {
        id: 14,
        name: "นางสาวรัชธางค์กูล สิทธี",
        email: "ratchatangkoon.s@kkumail.com",
        stdid: "663380183-9",
        key: "zaaacvzfumuc",
        groupid: 3,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIn1iMj7fed7xi21sq4-9sGTQMUK93WIN4x8Ho_ISny"
    },
    {
        id: 15,
        name: "นายชนกานต์ งามดี",
        email: "chanakan.ng@kkumail.com",
        stdid: "663380150-4",
        key: "pwtouuniktpo",
        groupid: 3,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKy51Zxu16cNy3_Qggw5Eqrnvjl5z5ILICIXhDOUrVd"
    },
    {
        id: 16,
        name: "ณัฐภัทร ประชุมวงษ์",
        email: "nattapat.pr@kkumail.com",
        stdid: "663380002-9",
        key: "xmoedxtvoeah",
        groupid: 4,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLhDBFDb6Idq_tbV8wExM32ApTUhFoOit1emxIrzfRW"
    },
    {
        id: 17,
        name: "ปฏิภาณ แก้วนวล",
        email: "patiphan.k@kkumail.com",
        stdid: "663380003-7",
        key: "xhmjghfdxsbr",
        groupid: 4,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKND_C1ivaPBeW75DNLiPgP4YSxddWq4E6AbAA8DBRj"
    },
    {
        id: 18,
        name: "ชนาธิป สีลาพล",
        email: "chanathip.si@kkumail.com",
        stdid: "663380151-2",
        key: "pafymcrtzssp",
        groupid: 4,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjU2TKFumUEm79SSFOvkuXuzO5E-4x63x0pGKlwfp0IS4Ok"
    },
    {
        id: 19,
        name: "ภัทรวดี วงศ์นอก",
        email: "patarawadee.w@kkumail.com",
        stdid: "663380178-2",
        key: "mevwevikgdmz",
        groupid: 4,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWbVjLjnAT62ds3DtspDcV2uP-wMuIeaG8noGuk0nk1xA"
    },
    {
        id: 20,
        name: "นายธีรภัทร์ ภูมิภักดิ์",
        email: "theeraphat.kh@kkumail.com",
        stdid: "663380166-9",
        key: "gkdsxjjljyyk",
        groupid: 5,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLmT_9Agq3n3uamS6GoECgCRL7k8StI66dvK4LntV-Y"
    },
    {
        id: 21,
        name: "นางสาวปวีณา กุลศิริ",
        email: "paweena.kul@kkumail.com",
        stdid: "663380172-4",
        key: "yqiayisbxetl",
        groupid: 5,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJsNfJ8GAy5hN29tGsClCXMA6izWr6ju6mQxG6Vmhg"
    },
    {
        id: 22,
        name: "นายวัฒชรวิทย์ อดทน",
        email: "watcharawit.o@kkumail.com",
        stdid: "663380497-6",
        key: "wmwrsdhtppil",
        groupid: 5,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIEZnvFo85lAnlCVbjVKiV0QnqO5V5_idSpOt5jktDp"
    },
    {
        id: 23,
        name: "นายอรรถพล อมรทัต",
        email: "autthapon.a@kkumail.com",
        stdid: "663380501-1",
        key: "nkfahdilqiju",
        groupid: 5,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKE15zj4_lAYNA85AebiEEKFORbkbt1VnfTWMq7_twj"
    },
    {
        id: 24,
        name: "นางสาวกรองกาญจน์ ตรีเมฆ",
        email: "krongkan.t@kkumail.com",
        stdid: "663380142-3",
        key: "vyoujkoiktwf",
        groupid: 6,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUJJr44k8Jw-jaZgpWlNghbHT1PlovZd5LcCaVR4UMrTg"
    },
    {
        id: 25,
        name: "นางสาวธนาภา เจริญสุข",
        email: "thanapa.c@kkumail.com",
        stdid: "663380160-1",
        key: "szonhstvyzal",
        groupid: 6,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXVYiZIlKVI9ZJ9vO31wZrAfKQWl57phqwGw01Db0Kvsg"
    },
    {
        id: 26,
        name: "นางสาวปริยากร พละดร",
        email: "priyakorn.p@kkumail.com",
        stdid: "663380170-8",
        key: "wkvkzmubibeb",
        groupid: 6,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWLDGgnldb8tJwCTvDgdr0o7cyoslo8w4MhdDFKgo1afw"
    }, {
        id: 27,
        name: "นายบวรนันต์ ตะบองทอง",
        email: "bowonnun.t@kkumail.com",
        stdid: "663380168-5",
        key: "ijundddfpswt",
        groupid: 6,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJwl8tM6Kg7wgYyMea-9OsbY100i0VsbyiA_jqLl9t0"
    },
    {
        id: 28,
        name: "นายธนดล สาเสน",
        email: "tanadol.s@kkumail.com",
        stdid: "663380487-9",
        key: "ipmwnpkqvvaa",
        groupid: 7,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKbUj9K1BHAp7rGqUn5N3n17cp-AH9rasduv6U38Ddp"
    },
    {
        id: 29,
        name: "ธัชพล คำกำจร",
        email: "thatchaphon.k@kkumail.com",
        stdid: "663380165-1",
        key: "yvbrczwhgaeh",
        groupid: 7,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXNI15t02tAcpamfpwAxpeLJTJrrIFJD3gVj09Dd1DUNQ"
    },
    {
        id: 30,
        name: "ธรณ์ธันย์ นามแสง",
        email: "thornthan.n@kkumail.com",
        stdid: "663380163-5",
        key: "idyzfmqrjsws",
        groupid: 7,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVQkDbaadHznII7QhjkSCWenRZVdyDCLRSf3g1VkaCfOg"
    },
    {
        id: 31,
        name: "อดิศัย เลนนาแซง",
        email: "adisai.l@kkumail.com",
        stdid: "663380499-2",
        key: "grnjtnieqnrf",
        groupid: 7,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocI-nO8SHJ6qPEIp3oEOqihOmNGygEM85SVwlDQYWXy5"
    },
    {
        id: 32,
        name: "นายพงศกร สระแก้ว",
        email: "pongsakorn.sra@kkumail.com",
        stdid: "663380004-5",
        key: "dsxniaqppaji",
        groupid: 8,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKxaj-ZZWwHknf-gRO_VFEfFSIiPlEi8jrNeKxmD572"
    },
    {
        id: 33,
        name: "นายวัฒนวิทย์ สะมะโน",
        email: "wattanawit.s@kkumail.com",
        stdid: "663380005-3",
        key: "dwfninciizmx",
        groupid: 8,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVPMsY3os6pLWWGYCtRFQKx7dnltde-0_E3RKvUljOxJxc"
    },
    {
        id: 34,
        name: "นายชุติพนธ์ หล้าอามาตย์",
        email: "chutipon.l@kkumail.com",
        stdid: "663380485-3",
        key: "qbbilrvnhijp",
        groupid: 8,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWwhk5_YYRv1Xis5mbFwh-wx-9ccaG_YceCXvHlJMFwHg"
    },
    {
        id: 35,
        name: "นายปภพ แสงสมนึก",
        email: "papop.sa@kkumail.com",
        stdid: "663380490-0",
        key: "oqpvurjccbbv",
        groupid: 8,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKel7ct8fWPgB1XlkgzZxpvzE9H962kX_YdraD6G0b0"
    },
    {
        id: 36,
        name: "นางสาววริศรา สังคะโห",
        email: "warisara.sang@kkumail.com",
        stdid: "663380185-5",
        key: "ervygyfpufdl",
        groupid: 9,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL_2g_YAzPmS96w6DQ0ASscpeBUSc7AyKv-cL1e7I7I"
    },
    {
        id: 37,
        name: "นายวงศพันธ์ อนันตวงศ์",
        email: "wongsaphan.a@kkumail.com",
        stdid: "663380496-8",
        key: "hwkgugqeorhm",
        groupid: 9,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWJF9ZX7SaN1nRLlzhM81VGnPxl0lVu3rD1ZVu0mY5kHQ"
    },
    {
        id: 38,
        name: "นายจตุรวิทย์ ปะสังคะเต",
        email: "chaturawit.p@kkumail.com",
        stdid: "663380146-5",
        key: "krojvcsmlhkm",
        groupid: 9,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocItsK-arF-gDq626eC1dZ_RXxjD40KpM_kP0mAuJwje"
    },
    {
        id: 39,
        name: "นายอภิวิชญ์ เสนาหนอก",
        email: "apivich.s@kkumail.com",
        stdid: "663380191-0",
        key: "cwvmpzgpvnxb",
        groupid: 9,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL7DiRWxFxy62sOps53X8pE35Zps19TXi-ObxIVrurv"
    },
    {
        id: 40,
        name: "นายสิรภพ น้อยสา",
        email: "siraphop.n@kkumail.com",
        stdid: "663380187-1",
        key: "srlvxazxehrr",
        groupid: 10,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL53B9DkexaPJhb6q4sAsQG914RcT6Q2XNW9oJu3XQz"
    },
    {
        id: 41,
        name: "นายประสพโชค สมวงษา",
        email: "prasopchok.s@kkumail.com",
        stdid: "663380169-3",
        key: "yvwxfrvfgjbq",
        groupid: 10,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIvZrfkAwSmyZgOGknIVhjnU2n5oWeUb6HjUTBnYhN4"
    },
    {
        id: 42,
        name: "นายพรรษา ปิ่นแคน",
        email: "pansa.p@kkumail.com",
        stdid: "663380174-0",
        key: "olcffidsqrwn",
        groupid: 10,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVdzON5tW46Atal2fO-4bLcjDujYFcQrGd4n-9ECBaRWQ"
    },
    {
        id: 43,
        name: "นางสาวธนิศากร พุดละ",
        email: "thanisakon.p@kkumail.com",
        stdid: "663380161-9",
        key: "mzljotclrbff",
        groupid: 10,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVIwiQlv9BR0AQ8GQeT6iX_6xzX5H_IbjhP57KcRU-lQw"
    },
    {
        id: 44,
        name: "นางสาวธิดารัตน์ อินอุ่นโชติ",
        email: "thidarut.i@kkumail.com",
        stdid: "653380372-9",
        key: "dkxmfmeqqhzm",
        groupid: 11,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJvBcBfRiK0W73weM_arhcyVz1Pb2yK7-bpKA_X8hH5"
    },
    {
        id: 45,
        name: "นางสาวณัฐณิชา รัตน์เพ็ชร",
        email: "natnicha.ra@kkumail.com",
        stdid: "663380001-1",
        key: "wnxuitktmkqp",
        groupid: 11,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWAlpCG4DJuGL4zvNCX-XH7EAtOUGWuAN44KC1c6bLdvA"
    },
    {
        id: 46,
        name: "นางสาวไพริน พรมสะอาด",
        email: "pairin.pr@kkumail.com",
        stdid: "663380196-0",
        key: "yhqtqwxnqmds",
        groupid: 11,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWX_DP1Z7r38o8zuN4WTLfYgQQ5MgICnbTj0QJEMtxSHg"
    },
    {
        id: 47,
        name: "นางสาวชลิตา อ่วมกุล",
        email: "chalita.au@kkumail.com",
        stdid: "663380152-0",
        key: "iozqzamyykbk",
        groupid: 11,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL4r26wWUFyt1tDDZXfJteIi5TGxtfUtfKrNnHqkP7H"
    },
    {
        id: 48,
        name: "นายภูริณัฐ บุญมาถึง",
        email: "phurinat.bo@kkumail.com",
        stdid: "663380180-5",
        key: "ufyohjxhxvxx",
        groupid: 12,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJt-cJUO-AHMmGx_mL8n0eEhrrI0twS9QIqYlABggtt"
    },
    {
        id: 49,
        name: "นางสาววรัชยา จันทร์รัตน์",
        email: "waratchaya.ch@kkumail.com",
        stdid: "663380184-7",
        key: "keytbauaxrhe",
        groupid: 12,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXfjKiUMMV2LEw3XC9kQVhIHADVM7NO01vr-99EzH4TzA"
    },
    {
        id: 50,
        name: "นางสาวสุธินันท์ ลำลอง",
        email: "suthinan.l@kkumail.com",
        stdid: "663380006-1",
        key: "owiazxsbarok",
        groupid: 12,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJgAAHHRictPDwdqg_bsYrWlA4Rq5jg2gPly720FKZa"
    },
    {
        id: 51,
        name: "นายธนิสร คําสิงห์",
        email: "thanisorn.kh@kkumail.com",
        stdid: "663380162-7",
        key: "akafprvdrfrl",
        groupid: 12,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVC0d23_QkzcS-kSBGadL0d8-ohaorpF9nepCzdUcmMQg"
    },
    {
        id: 52,
        name: "นายอโนชา​ เชยทอง",
        email: "anocha.ch@kkumail.com",
        stdid: "663380193-6",
        key: "csavpuzwnllw",
        groupid: 13,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWw8veCvG9_pyLDDeCep46WFG3M50pn8M7OqUUSBe1KTA"
    },
    {
        id: 53,
        name: "นายทวีพงศ์ เหลืองปฐมชัย",
        email: "taweephong.l@kkumail.com",
        sidid: "663380486-1",
        key: "eveqqxddzrsr",
        groupid: 13,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVQr_SEadvbj2GwxwCLs-WVnpA6e9TgBZl9HyUBpddLlg"
    },
    {
        id: 54,
        name: "นายภูวดล ภาโนมัย",
        email: "phuwadol.pa@kkumail.com",
        stdid: "663380182-1",
        key: "rpiwioawzrmm",
        groupid: 13,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL8haKag4SpR24Je9lb7AsiejPc-z_x02WRKizunbxQ"
    },
    {
        id: 55,
        name: "นายอรรถนนท์ บุญน้อย",
        email: "attanon.b@kkumail.com",
        stdid: "663380500-3",
        key: "lrmfyyrxhsih",
        groupid: 13,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjX72HS15e2-yY0eKwqmMaLeeaBW2fTfVJo5pru-87eFcw"
    },
    {
        id: 56,
        name: "นางสาวปริยาภรณ์ พรมรัง",
        email: "pariyapron.p@kkumail.com",
        stdid: "663380492-6",
        key: "arssxbhrwuhp",
        groupid: 14,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjV96anGqy45NNQLlTjbKxyakYuL4W7TYiW5lFutyovi9g"
    },
    {
        id: 57,
        name: "นายจิรโชติ​ ลุนศรี",
        email: "chirachot.l@kkumail.com",
        stdid: "663380149-9",
        key: "tkrbkbnvfnrh",
        groupid: 14,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocK5huNk0OvDb9dmQVbg6gfBXaeqJSWEK3uQhApQ3suv"
    },
    {
        id: 58,
        name: "นายจักรเรศ ชัยศรี",
        email: "jakkaret.c@kkumail.com",
        stdid: "663380147-3",
        key: "ybzvmnshtyqd",
        groupid: 14,
        sec: 1,
        image: "https://lh3.googleusercontent.com/cm/AOgkWRbPDJk43a5zb9cY5ol6yPljHo2B5rEZBJYblxKJTNvZ6dHjKomxHSDRPigErneQ"
    },
    {
        id: 59,
        name: "นายภูมรพี วงษ์​ศรี",
        email: "phumrapee.v@kkumail.com",
        stdid: "663380495-0",
        key: "negxjjaerujo",
        groupid: 14,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUOLbkeFUfDjPWd2EOZmTGHLd1GPSezVGGZujf3GI2XDg"
    },
    {
        id: 60,
        name: "นายฟลอเรนท์ เอ็มฟอดโว",
        email: "florent.m@kkumail.com",
        stdid: "663380177-4",
        key: "jucsesokameo",
        groupid: 15,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWYyvPyeNaUxOew0vy6l0B0pdYHXhMs-9XuPzkPjrfgNw"
    },
    {
        id: 61,
        name: "นายกิตติธัช ปลั่งกลาง",
        email: "kittithat.pl@kkumail.com",
        stdid: "663380144-9",
        key: "moxenbnpihuk",
        groupid: 15,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKJ_OD-JnMXFW3zXrZk5Qj0X8BhgTZdmZ0GEGi-qEbr"
    },
    {
        id: 62,
        name: "นายปลวัชร สุทธมา",
        email: "palawhat.s@kkumail.com",
        stdid: "663380171-6",
        key: "hphxdrekxooo",
        groupid: 15,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJNBWweKauHLHPhhcHAY7h1V0TFVSBIDd8nV7Bavo2y"
    },
    {
        id: 63,
        name: "นายปัญญาเพชร ฤทธิธาดา",
        email: "punyapechr.r@kkumail.com",
        stdid: "663380173-2",
        key: "cbpmrsezssgq",
        groupid: 15,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWACkd5t6jay_e7PeOb9h9z3-6Xyyj_mLUeCQRHWXCZvA"
    },
    {
        id: 64,
        name: "นายภูรินทร์ สุวชาติ",
        email: "phurin.su@kkumail.com",
        stdid: "663380181-3",
        key: "oqftptovkept",
        groupid: 16,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWb2s42RTHJ55HJoWwRkvWSj6kbd_cnWTzb7K_MPRiKAg"
    },
    {
        id: 65,
        name: "นายอุตตมากร บรรหารักษ์",
        email: "autamakorn.b@kkumail.com",
        stdid: "663380192-8",
        key: "xqabpyqwjclp",
        groupid: 16,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWf3KHGiqg34FoIYMs29hCf1WF9gYDB0MiJFp8OidjZ5w"
    },
    {
        id: 66,
        name: "นางสาวกุลศยา จันภูงา",
        email: "kunsaya.j@kkumail.com",
        stdid: "663380145-7",
        key: "udcqryqampia",
        groupid: 16,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVucb2f8vW84vYNv14K9UGQVmxo7wQtCg-E6oyw7pPm2w"
    },
    {
        id: 67,
        name: "นายพชร ศรีสุพัฒน์",
        email: "patchara.sri@kkumail.com",
        stdid: "643020394-1",
        key: "vdcnlcxzustm",
        groupid: 16,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjU86GXQsRo0EyLhiLQ2t7wd6gTii4kyDB2Fvo9IsxVke-o"
    },
    {
        id: 68,
        name: "นางสาวสิริมา ฉายถวิล",
        email: "sirima.ch@kkumail.com",
        stdid: "663380188-9",
        key: "dqffmuxwzrud",
        groupid: 17,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKiKRD9Qr-tRbo64AITm2e6rISyrdDMpueX6UoDeEtR"
    },
    {
        id: 69,
        name: "นาสุทธิพงศ์ การปรีชา",
        email: "suttipong.k@kkumail.com",
        stdid: "663380189-7",
        key: "crsnmxecqkke",
        groupid: 17,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXT2OAiz7PBDUbCjAbG1xeyquRiNsEXCfNq9FUpP4eTOA"
    },
    {
        id: 70,
        name: "นางสาวสุรัสวดี จักรพิมพ์",
        email: "suratsawadee.j@kkumail.com",
        stdid: "663380190-2",
        key: "rwfapzncuekm",
        groupid: 17,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLvL6IIYD5F_AgJ91ymfu_yUmbo4CJxgtMEitM3ZGc6"
    },
    {
        id: 71,
        name: "นายไชยวัฒน์ โสนะชัย",
        email: "chaiyawat.s@kkumail.com",
        stdid: "663380195-2",
        key: "llqeslszgkwn",
        groupid: 17,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjW78Gl-H7b5HmHG6V8-zAghbEaHF0qEdluF8ApUDLGehg"
    },
    {
        id: 72,
        name: "นายไชยวัฒน์ แจ่มกลาง",
        email: "chaiwat.jam@kkumail.com",
        stdid: "663380194-4",
        key: "clzzsgxapjla",
        groupid: 18,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjW75wPuFRyQadsj2osnBnQKTD3dzwdMc9MPOOIpkRhkyw"
    },
    {
        id: 73,
        name: "นายณัชพล สุวรรณอำไพ",
        email: "natchapon.su@kkumail.com",
        stdid: "663380156-2",
        key: "ogefcnbupcue",
        groupid: 18,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLtZJRHC8zHEAFMjzWkvLPnFSesvG7wR60colgiFkni"
    },
    {
        id: 74,
        name: "นายณัฐพันธ์ุ เชตวัน",
        email: "nattapan.c@kkumail.com",
        stdid: "663380157-0",
        key: "sliwttrhtbnj",
        groupid: 18,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXM8ngAQ4FzpBzr_PyGo9gexQ6dVgH3m2uBPTdtH8npyw"
    },
    {
        id: 75,
        name: "นายกิตติิกวิน วิจิตขะจี",
        email: "kittikawin.wi@kkumail.com",
        stdid: "663380143-1",
        key: "ntmlnkesvgbd",
        groupid: 18,
        sec: 2,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKrv3MhCdA4gnXWfxNavXp2M9vw_sVMbw6VrkQOBDaN"
    },
    {
        id: 76,
        name: "เอกปฐวี มีไชยา",
        email: "aekpattawee.m@kkumail.com",
        stdid: "663380582-5",
        key: "grpiihhgfkff",
        groupid: 19,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJMky8fPsIU8IOt2QECUIOkWPxbpelE5KIatZV2y7F2"
    },
    {
        id: 77,
        name: "เจษฎาภรณ์ วิชาสี",
        email: "jetsadaporn.wi@kkumail.com",
        stdid: "663380581-7",
        key: "cywkvvpeuzov",
        groupid: 19,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocK129Q9dQbx8cLE3H3Ptyy4eQv3f_8mSAb8g4-T3vdK"
    },
    {
        id: 78,
        name: "เจตริน ศรีนุกูล",
        email: "jattarin.s@kkumail.com",
        stdid: "663380371-8",
        key: "nrrsroddmuxs",
        groupid: 19,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUVNXWe0RffV54b5nInhhQWm7F4i1OwUKSJgWqDUbtRwQ"
    },
    {
        id: 79,
        name: "กฤษฏ์ ทันหา",
        email: "krit.tha@kkumail.com",
        stdid: "663380337-8",
        key: "xignpueuqmvo",
        groupid: 20,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKHe8TkhvXWUl2xdMKuhY1yB5zUrkhPJQFqqs1d45bY"
    },
    {
        id: 80,
        name: "ชโยคม แพงเนตร",
        email: "chayodom.p@kkumail.com",
        stdid: "663380556-6",
        key: "zixxmecpmqvw",
        groupid: 20,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJFKbsdfzy7y0cUwwqOrA1VRzcphayEdZ6SzI4-8Pm6"
    },
    {
        id: 81,
        name: "ภูมินทร์ ไกรกิติการ",
        email: "phumin.kr@kkumail.com",
        stdid: "663380358-0",
        key: "jzdkplsrrddv",
        groupid: 20,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjV0s_VkoJWu9iyoD5lw_O1adllKMLOfOYbimdHU32cTJg"
    },
    {
        id: 82,
        name: "ณภัทร เปลี่ยนชัย",
        email: "naphat.pl@kkumail.com",
        stdid: "663380632-6",
        key: "zvinposjtfoc",
        groupid: 20,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLTtIgfzXznQiQsdpQLQij4bLGfbmu21VRYuZ1hKTLW"
    },
    {
        id: 83,
        name: "นพฤทธิ์ ฤกษนอก",
        email: "noppharit.l@kkumail.com",
        stdid: "663380562-1",
        key: "cgurakrsumcc",
        groupid: 21,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWdTtuXscvgVPw7LnUbUSHjgb4lqfVE9fk4-0ycLqUe4w"
    },
    {
        id: 84,
        name: "วีรวัต สดศิริ",
        email: "weerawat.so@kkumail.com",
        stdid: "663380574-4",
        key: "tcnlcswpvsox",
        groupid: 21,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJZ-5wI5Aq96qUu58_q9PzSsZpQsBAmLm9rSMPEfuom"
    },
    {
        id: 85,
        name: "ดุลยวัต มูลสาร",
        email: "dulyawat.m@kkumail.com",
        stdid: "663380558-2",
        key: "gjrskwmcetju",
        groupid: 21,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKQ-LmpAGf3l4XTI2LzHMlffFG9Z7XmshL0GU72A91B"
    },
    {
        id: 86,
        name: "ธีรธัช มหาฤทธิ์",
        email: "theerathat.m@kkumail.com",
        stdid: "663380561-3",
        key: "yowobjwdxtug",
        groupid: 21,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWvBJ3fXbYopOlbxrKKi18yd9_M0cyfiJpW6xkqmZpwBA"
    },
    {
        id: 87,
        name: "ชนาธิป ศรีจักรโคตร",
        email: "chanathip.sr@kkumail.com",
        stdid: "663380340-9",
        key: "xasfiitzahsg",
        groupid: 22,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJQ3DdXSGvX8qBYq-zJbxqCKq_QZFJj9Nf5svuBkB_N"
    },
    {
        id: 88,
        name: "ธัญญลักษณ์ สาเสน",
        email: "thanyalak.sas@kkumail.com",
        stdid: "663380560-5",
        key: "jpkoaejfrumm",
        groupid: 22,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJ1HLhWTANfo7njUynboFpI3rmA1cdwj--45G9Hdba0"
    },
    {
        id: 89,
        name: "รสริน ปราณีตพลกรัง",
        email: "sodsarin.p@kkumail.com",
        stdid: "663380569-7",
        key: "munqxjgpvhjn",
        groupid: 22,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJ28ziEPbGVc5uiPzwRxQ95FPmXkIhxEbLKCwKS1S85"
    },
    {
        id: 90,
        name: "ฤทธิเดช สุขสมบูรณ์",
        email: "rittidech.s@kkumail.com",
        stdid: "663380570-2",
        key: "bkgokpvqcueu",
        groupid: 22,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWH5tFHxkd7M3-ShpKBXZVXE-jkqPrRymEf4ZXF-1ETpQ"
    },
    {
        id: 91,
        name: "พงศ์พัฒน์ พิตรพิบูลผล",
        email: "pongpat.pi@kkumail.com",
        stdid: "663380354-8",
        key: "nsncjvzzshtp",
        groupid: 23,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWFFldMMUgJwmSrHk_BKZ-ateCmo29ZB5Fml7nrbOVfEQ"
    },
    {
        id: 92,
        name: "ธีรภัทร บุญมีประเสริฐ",
        email: "teerapat.boo@kkumail.com",
        stdid: "663380349-1",
        key: "aosoavkcmoii",
        groupid: 23,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKZYg4-WJGaCLFk7b5SleM4de8kG1JpZvloTSRGrcus"
    },
    {
        id: 93,
        name: "ศุภชัย คนเพียร",
        email: "suphachai.kh@kkumail.com",
        stdid: "663380576-0",
        key: "uttqrzsufzvd",
        groupid: 23,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIJpiAeMv6LzbNvgT92UwVJ724Fv636wsVNq_MES1_I"
    },
    {
        id: 94,
        name: "ภูผา แก้วทอง",
        email: "phupha.k@kkumail.com",
        stdid: "663380357-2",
        key: "bdidwumrtqkt",
        groupid: 23,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjX21fakuLO5hX7yWg7Ycv8lN2fKotFvLarMPaT5novadA"
    },
    {
        id: 95,
        name: "วิศรุต ไตรยวงศ์",
        email: "wissarut.t@kkumail.com",
        stdid: "663380363-7",
        key: "xelfwytxkdbv",
        groupid: 24,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJe3c_Yp1wwc38LpRQrGj5sxjw3u2J8V0Eqd35A3fYT"
    },
    {
        id: 96,
        name: "เกศกนก ประสมทรัพย์",
        email: "ketkanok.p@kkumail.com",
        stdid: "663380370-0",
        key: "itrwudhzlodj",
        groupid: 24,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKV6nC7RSakQ-l4UpaRBT3JATpp8-59HCrwACda5hlw"
    },
    {
        id: 97,
        name: "ณัฐวุฒิ พัดไธสง",
        email: "natthawut.pha@kkumail.com",
        stdid: "663380345-9",
        key: "mkuuspseiffm",
        groupid: 24,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIf7yoMriPZ6-Tq_6-mXfcEKF_8ofkF-swXpHbeikn9"
    },
    {
        id: 98,
        name: "นุสรา สารธิราช",
        email: "nuchsara.s@kkumail.com",
        stdid: "663380044-3",
        key: "awatffceqlpw",
        groupid: 24,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWd23fYR1X9D3cTThFNZLUv5vrf3uEhTb8nhq5E2LhIsA"
    },
    {
        id: 99,
        name: "จิรัสย์ อารยะพงศ์ภักดี",
        email: "chirus.a@kkumail.com",
        stdid: "663380338-6",
        key: "iubxanxofeqe",
        groupid: 25,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJbPjHFvAfBDONPdKmwaN0ve3jT1ojghPdYmP106hj0"
    },
    {
        id: 100,
        name: "ทิวากรณ์ ผลภิญโญ",
        email: "tiwakorn.ph@kkumail.com",
        stdid: "663380346-7",
        key: "qhtsmbgtevtr",
        groupid: 25,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVWy2gEgWuaDHwby0dNQODvsmx5rMZmgCs9tkVhP8be"
    },
    {
        id: 101,
        name: "นางสาวกัญญาณัฐ เดชโยธิน",
        email: "kanyanat.d@kkumail.com",
        stdid: "663380554-0",
        key: "bnhosbxmcyry",
        groupid: 25,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocI22ONtM6PkzyqaPPeiKWZkBJW-HFRrfP24wkfPF27y"
    },
    {
        id: 102,
        name: "นางสาวสุจิรา สัตถาผล",
        email: "sujira.sa@kkumail.com",
        stdid: "663380366-1",
        key: "qlyiksiycgip",
        groupid: 25,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKDKCI4LBL4mFO2ecQ1cGuwP6mu3LB0Omi8I1itTrhq"
    },
    {
        id: 103,
        name: "นายวรกันต์ ปราบนอก",
        email: "worakan.p@kkumail.com",
        stdid: "663380362-9",
        key: "bvrgmccbinhz",
        groupid: 26,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKb5IPStJjK4OP5fbeK9pWWx96H2gbtdCtRuvhpR6tv"
    },
    {
        id: 104,
        name: "นายบุญชนน ติโนชัง",
        email: "boonchanon.t@kkumail.com",
        stdid: "663380351-4",
        key: "czqajnulmsxf",
        groupid: 26,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKXoduOz62M9NBwccIRJvVBbdaq_Ymm6Q7FjNnP8SnW"
    },
    {
        id: 105,
        name: "นายชาคริต ชาระวงศ์",
        email: "chakhrit.c@kkumail.com",
        stdid: "663380342-5",
        key: "nhntrsinjxnf",
        groupid: 26,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXJcMqkTd8gOgK7oBTxBdIVkn5KihwH6YcSZKBw8gDQfw"
    },
    {
        id: 106,
        name: "นายวัชรพล เดชะคำภู",
        email: "watcharaphol.d@kkumail.com",
        stdid: "663380572-8",
        key: "pztelmdioxnk",
        groupid: 26,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJeOqdgG4g8leS0fS0JbESEUr2gtS-RY10Eqp7u32HH"
    },
    {
        id: 107,
        name: "นายญาณวุฒ ชุ่มใจ",
        email: "yannavut.c@kkumail.com",
        stdid: "663380343-3",
        key: "xyghjtbgppds",
        groupid: 27,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWSbsDY0uxe6HFe4eS0G3HWSuQ8HdS5R0qw0xy6sFenyw"
    },
    {
        id: 108,
        name: "นางสาวกมลทิพย์ กงเพชร",
        email: "gamontip.g@kkumail.com",
        stdid: "663380628-7",
        key: "grpiihhgfkff",
        groupid: 27,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWnTMkQQRDC4MIk8iT_dSE5EBCH_JmTIbmR1w12V6T7eQ"
    },
    {
        id: 109,
        name: "นางสาวณัฐนิชา ทะยานรัมย์",
        email: "natnicha.thay@kkumail.com",
        stdid: "663380633-4",
        key: "ftmzhbwhnata",
        groupid: 27,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKi1B_PoCqHqAEzdLsXV8rUjk5el72rbt9Z-w77v3g"
    },
    {
        id: 110,
        name: "นายนันทภัทร์ จันทชูศักดิ์",
        email: "nantapat.c@kkumail.com",
        stdid: "663380634-2",
        key: "shqxoqysbhwy",
        groupid: 27,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocICgUeV4huSH9ANNAKsHXSO2tTmgo608KEAZn7b-Itz"
    },
    {
        id: 111,
        name: "นางสาวแพรไหม หงษ์สำเริง",
        email: "pramai_hong@kkumail.com",
        stdid: "663380583-3",
        key: "uelstdbnddlw",
        groupid: 28,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWRJ1mjdc3zk4SVqMQasDSw2_dct4_Gv6TvA_wCq6vrDpM"
    },
    {
        id: 112,
        name: "นางสาวพลอยขวัญ อุปสัย",
        email: "ploykwun.u@kkumail.com",
        stdid: "663380355-6",
        key: "luurcyfanhos",
        groupid: 28,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXCptiv7PcCKpMnEcAfaCt4LTM4cEeU18I7Rm6R0A0bOQ"
    },
    {
        id: 113,
        name: "นายอภิรักษ์ สุริยะศรี",
        email: "apirak.su@kkumail.com",
        stdid: "663380637-6",
        key: "ivsvnbrivkis",
        groupid: 28,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKZBSb28sxTtG1vVtrT7v88HnosAbnVQhrHulYTlAkD"
    },
    {
        id: 114,
        name: "นางสาวเพ็ชรพริ้ง มะลิทอง",
        email: "petpring.m@kkumail.com",
        stdid: "663380638-4",
        key: "tkxjzevbbgtv",
        groupid: 28,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIveJXEuR_9YYN0zqGsdLdOguu9Z5M78SFdbTy7iDK1"
    },
    {
        id: 115,
        name: "นางสาวเมธาวี สิทธิชัยเนตร",
        email: "mathawee.sit@kkumail.com",
        stdid: "663380372-6",
        key: "nrrsroddmuxs",
        groupid: 29,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocINNXWiRuhwKM7uq_kP4H6f1_joanMLo13pLDfNk-Xm"
    },
    {
        id: 116,
        name: "นางสาวสุธางศุ์รัตน์ ศรีโรจน์",
        email: "suthangrat.s@kkumail.com",
        stdid: "663380367-9",
        key: "sdrlrybephwv",
        groupid: 29,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUCDmfysHVUst9l43b0Yl251dRkuc8SG2SjU6u9-RYtzg"
    },
    {
        id: 117,
        name: "นางสาวธัญญรัตน์ อาจหาญ",
        email: "thanyarath.a@kkumail.com",
        stdid: "663380559-0",
        key: "gjrskwmcetju",
        groupid: 29,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVsXuvyNGgn_XdaOKtQ1XPkvBtdycMtYjelUh2U4m3DtQ=s64-p-k-rw-no"
    },
    {
        id: 118,
        name: "นายชาคริต อ่วมอ่ำ",
        email: "chakrit.u@kkumail.com",
        stdid: "663380555-8",
        key: "fojhdsknaxgh",
        groupid: 30,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVLHJoWMIM2gQD42d4f3joIwbCGqSprwAFGEL5OiVtYxg"
    },
    {
        id: 119,
        name: "นายปฏิภาณ ธงหาร",
        email: "patiphan.th@kkumail.com",
        stdid: "663380352-2",
        key: "zkvjoznorabk",
        groupid: 30,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVjvjcDlS3z_3S7n2V2rXGxruN9veGIMDZZS32enFEWVQ"
    },
    {
        id: 120,
        name: "นายวจนะ ใต้ระหัน",
        email: "vajana.t@kkumail.com",
        stdid: "663380360-3",
        key: "rhciwdjaqfkv",
        groupid: 30,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUbVDYFd5cjRQ6AsSxyu9cmLLvz2AvOVGaeHV5DCizTSw"
    },
    {
        id: 121,
        name: "นายสาริษฐ์ บุตรช่วง",
        email: "sarid.b@kkumail.com",
        stdid: "663380365-3",
        key: "unaaayrkzrwc",
        groupid: 30,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL4IW7tUUKx5fA2uraCtOiWoY2XDRs6LnVR1tqv870e"
    },
    {
        id: 122,
        name: "นายยศพล ถิรพงศ์ชาติ",
        email: "yotsaphon.t@kkumail.com",
        stdid: "663380568-9",
        key: "dvptexnpnrkq",
        groupid: 31,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLz9B4fxRGAeswpYIaSSe-0NiXpVpl49OtvRuHFxW87"
    },
    {
        id: 123,
        name: "นายธนภัทร สมบูรณ์",
        email: "thanapat.somb@kkumail.com",
        stdid: "663380347-5",
        key: "aqfnonewwmze",
        groupid: 31,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXFLCXUBgrFOWrYYaaHTwgYms8TLsTPTHtb4IXWgZRZTA"
    },
    {
        id: 124,
        name: "นายณัฏฐชัย ไชยรบ",
        email: "nattachai.c@kkumail.com",
        stdid: "663380344-1",
        key: "fydfiduntjhc",
        groupid: 31,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKegB7_nCzWg8Dgz4JUuIHRZOrBbmv1eegX57PWvfE0"
    },
    {
        id: 125,
        name: "นายนวมินทร์ เจียรสุวรรณ",
        email: "nawamin.ch@kkumail.com",
        stdid: "663380564-7",
        key: "kkwnibmlyfkf",
        groupid: 31,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLbJbEeGl8MvcmpF-DLfj9FqMU6fTULPniyztrV7ljo"
    },
    {
        id: 126,
        name: "นางสาวศราพร เบ้าหินลาด",
        email: "saraporn.b@kkumail.com",
        stdid: "663380364-5",
        key: "etybgumybygw",
        groupid: 32,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIr1T4XAdc_X5T8Y4nyvjBbExnF3dNlyq95ypVOT4-z"
    },
    {
        id: 127,
        name: "นางสาวบัญจรัตน์ โยธีเสวต",
        email: "banjarat.y@kkumail.com",
        stdid: "663380565-5",
        key: "yowobjwdxtug",
        groupid: 32,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKIv8Tm_Hhv3srZLOme6btS6_HyVzwxykWokL-r3up6"
    },
    {
        id: 128,
        name: "นางสาวศรัณญา ชัยปลื้ม",
        email: "saranya.ch@kkumail.com",
        stdid: "663380575-2",
        key: "vtfbzrjhhrlp",
        groupid: 32,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLOB0qpzBeF_jzMZNHptYxFgK0vZPGXegf_K6z2oz-I"
    },
    {
        id: 129,
        name: "นางสาวอริศรา สีพาเสน",
        email: "arissara.se@kkumail.com",
        stdid: "663380579-4",
        key: "gmpedeimbyph",
        groupid: 32,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVYMvsY5XWF4X1IZOzOpjJGx1Bk10SZB1tpLK0ejo7L3w"
    },
    {
        id: 130,
        name: "นางสาววิยดา มูลกัน",
        email: "veeyada.m@kkumail.com",
        stdid: "663380573-6",
        key: "ghegkuiqxdhu",
        groupid: 33,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocInAsDkIVfaH1V1tQUx_LvW3jhtMmw8AMXoDqByD8Y4"
    },
    {
        id: 131,
        name: "นางสาวรพีพรรณ ศรีบุญเรือง",
        email: "rapeephan.s@kkumail.com",
        stdid: "663380359-8",
        key: "hdwimkhjrxba",
        groupid: 33,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVwww3a45KjyhUcs6x2eVPfM0J6wY_lR5rt7-_6C6mdXQ"
    },
    {
        id: 132,
        name: "นางสาววนิดา ศรีดวงคำ",
        email: "wanida.sri@kkumail.com",
        stdid: "663380361-1",
        key: "leecexpvhkgn",
        groupid: 33,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXF9R7ugkmELVMP7f5yWah9lMgjpq09Tot1pvVQcflPjQ"
    }, {
        id: 133,
        name: "นายชวกร ฤทธิธรรมกุล",
        email: "chawakorn.r@kkumail.com",
        stdid: "663380341-7",
        key: "rbmovzpspfhm",
        groupid: 33,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJIwbsdnjrGMehxYHFtL4IEuUqNoDWNs1hvgRf42otm"
    },
    {
        id: 134,
        name: "ชญาณภัทร คำสิน",
        email: "chayanapat.k@kkumail.com",
        stdid: "663380630-0",
        key: "sprrjfhjzyon",
        groupid: 34,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjV1iprrVEj_fiZ1xL4fslD-hun7GWNVQP7bYx44TPt-63c"
    },
    {
        id: 135,
        name: "อัครเดช ผาดำ",
        email: "akharadet.p@kkumail.com",
        stdid: "663380368-7",
        key: "dvtohgozbyah",
        groupid: 34,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXDC_vRK7dCb5mkpY6BRM24Qq-zMHBepcxi64kKrBVIRw"
    },
    {
        id: 136,
        name: "สุกิจตรา โคแสงรักษา",
        email: "sukijtra.k@kkumail.com",
        stdid: "663380577-8",
        key: "qhksxpootwju",
        groupid: 34,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocL6O4z_2H58XcT_zcM_w1KC93z3UiDWLcnCFq-apbRL"
    },
    {
        id: 137,
        name: "จักรภัทร พิทักโยธา",
        email: "jakkapat.pi@kkumail.com",
        stdid: "663380629-5",
        key: "rrqvtxgoelnn",
        groupid: 34,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIohG5xpgop0ZphNaRId5zwyeNfAOjYtREizqt7965g"
    },
    {
        id: 138,
        name: "นายนภัสกรณ์ บุตรโคตร",
        email: "naphatsakorn.bu@kkumail.com",
        stdid: "663380563-9",
        key: "cmfrelbinsti",
        groupid: 35,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocIJ0h0V2KzQQaZ2vaVZprg5eKPeI9ra48WsOXdydvlJ"
    },
    {
        id: 139,
        name: "นายฐิติพันธ์ บุตรวงค์",
        email: "thitipun.b@kkumail.com",
        stdid: "663380631-8",
        key: "ntqispnsbwvc",
        groupid: 35,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLG7tqbJjBTyfPIGz4x4XmfAQ28vUIYIFspj8IpDJ_T"
    },
    {
        id: 140,
        name: "นายปวริศ สายโยค",
        email: "pawarit.s@kkumail.com",
        stdid: "663380635-0",
        key: "ailwhoxbvtfc",
        groupid: 35,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLZwNjRW2u3Wr2R5uIBusZeTdm-UKCuKTuoCR5tDrlG"
    },
    {
        id: 141,
        name: "นายอำพล แก้วภักดี",
        email: "amphon.k@kkumail.com",
        stdid: "663380580-9",
        key: "pudlvybnbjzg",
        groupid: 35,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocKvsLCiiDxQkOKmQgBgggACIMjebFZ-O_4KN_B6HVLu"
    },
    {
        id: 142,
        name: "นางสาวฉัฐพร จุลลาศรี",
        email: "chartaporn.j@kkumail.com",
        stdid: "633021074-3",
        key: "vjxhzahfpwit",
        groupid: 36,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUwIzL_7Xs4KFeZIB99UvwJJvqtCDQKDBa7T70h4zqL-A"
    },
    {
        id: 143,
        name: "นางสาวณิชากร รอนแรม",
        email: "nichakorn_ronram@kkumail.com",
        stdid: "633021080-8",
        key: "ibgdmgwapkfc",
        groupid: 36,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLxE0tIB0lWsvuTvLiMHjcd6rerjDox9rxguIeVlsbw"
    },
    {
        id: 144,
        name: "นายวีรชิต ไชยวงศ์ค",
        email: "weerachit.c@kkumail.com",
        stdid: "633021102-4",
        key: "ddpwinkhlolg",
        groupid: 36,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a/ACg8ocLJs1GTNrOLN3CKTRSgIvB_ifaTOcSHXeNqZanUu0qK"
    },
    {
        id: 145,
        name: "นายศุภกร กงชา",
        email: "max.supakorn@kkumail.com",
        stdid: "633021103-2",
        key: "yyfiaekarozf",
        groupid: 36,
        sec: 4,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVm-5yd7NPqdKiHgbK8Ib1LySD2LAny6OwT7rvAeCKr6yQ=s64-p-k-rw-no"
    },
    {
        id: 146,
        name: "นางสาวมิรันตรา ผาสกุล",
        email: "mirantra.p@kkumail.com",
        stdid: "633020926-3",
        key: "nonie",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/cm/AOgkWRaBb3riPsoSlR604jowX4VJWWljZQ8963PqcDlJCdVGpuJsnT7LqQNfMKJBKpdt"
    },
    {
        id: 147,
        name: "นางสาวณัฐชยา พรวนแก้ว",
        email: "nutchaya.pr@kkumail.com",
        stdid: "633020455-6",
        key: "best123",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWFIQhDzEBvjdYaVWaxTHgjI0eRZvLQVdHTkOWKk99ERw"
    },
    {
        id: 148,
        name: "นางสาวปิยะรัตน์ อุปชีวะ",
        email: "piyarat.up@kkumail.com",
        stdid: "643021111-4",
        key: "pungpung",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVnUeMCOpRkHCZWYAENBSi9Qj-g3BLX1tinc1EHtg5TTg"
    },
    {
        id: 149,
        name: "นางสาวภัทรศยา ศรีสง่า",
        email: "pattarasaya.sr@kkumail.com",
        stdid: "643021115-6",
        key: "jj123",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjUfv3l_fBol_otHD8xdCZGDiuqec7lvouNJ6cQrZ4rM-cs"
    },
    {
        id: 150,
        name: "นางสาวอารยา หงษาวงษ์",
        email: "araya.h@kkumail.com",
        stdid: "653380041-8",
        key: "ployploy",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXKgTq-e8xGDssKCWnX34XUJb1kdfoWGuWZuOvgaerzgg"
    },
    {
        id: 151,
        name: "นางสาวเสาวลักษณ์ เปรียบดีสุด",
        email: "saowalak.pri@kkumail.com",
        stdid: "653380040-0",
        key: "aonaon",
        groupid: 0,
        sec: 1,
        image: "https://lh3.googleusercontent.com/cm/AOgkWRYBHRy-C_34CCZOkTr__jAPP-u3NCuWBJOEsLUHR3cNy4Rpwa7Yh65Qh9OLx4_Y"
    },
    {
        id: 152,
        name: "อภิสรา นครสุข",
        email: "aphitsara.na@kkumail.com",
        stdid: "663380578-6",
        key: "rjczgxvmrsfe",
        groupid: 29,
        sec: 3,
        image: "https://lh3.googleusercontent.com/a/ACg8ocJ-7DX6cxSMIKV_2vus11i7R954e371Ru8lr-FKs1zL"
    }
]

const groups = [
    {
        id: 1,
        name: "KKU Say Hi!",
        topic: "แอปพลิเคชันสำหรับหาเพื่อนเรียน",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "แอปพลิเคชันหาเพื่อนใหม่ที่กำลังศึกษาในรั้วมหาวิทยาลัยขอนแก่น โดยค้นหาจากกิจกรรมหรือความชอบที่คล้ายคลึงกัน",
            "สามารถติดต่อพูดคุยกันภายในแอป"
        ],
        username: "g11",
        key: "zgdiccuseugu"
    },
    {
        id: 2,
        name: "KKU transit",
        topic: "แอปพลิเคชั่นติดตามรถชัตเตอร์บัส ด้วยระบบ RFID",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่นที่เดินทางด้วยรถชัตเตอร์บัส",
        details: [
            "เปลี่ยนจากการติดตามด้วย GPS มาเป็นแบบ RFID หรือการระบุด้วยคลื่นวิทยุ โดยการติดตัวรับสัญญาณไว้ที่ตัวรถชัตเตอร์บัส และติดตัวส่งสัญญาณไว้ที่ตัวป้ายสถานีรับ/ส่ง เมื่อรถผ่านสถานีจะทำการตรวจจับและส่งสัญญาณคลื่นให้กันและกัน จากนั้นจะมาระบุตำแหน่งบนแอปพริเคชั่นในรูปแบบจากจุดหนึ่งกำลังมุ่งหน้าไปสู่อีกจุดหนึ่ง"
        ],
        username: "g06",
        key: "kytcuxxuunot"
    },
    {
        id: 3,
        name: "Volunteer FUN",
        topic: "แอปรวบรวม,แนะนำค่ายเก็บชั่วโมงจิตอาสา",
        Target: "นักศึกษามหาวิทยาลัยขอนแแก่นที่กู้กยศ.และได้ทุน",
        details: [
            "รวบรวมค่ายจิตอาสา,จิตอาสาออนไลน์ที่สามารถเก็บชั่วโมงจิตอาสากยศ.และทุนไว้ในแอป",
            "สามารถพูดคุยกับคนที่สนใจไปค่ายเดียวกันได้",
            "บอกชั่วโมงจิตอาสาที่ได้ทำไปแล้ว"
        ],
        username: "g15",
        key: "hisilnevqemf"
    },
    {
        id: 4,
        name: "Ed KKU",
        topic: "Ed KKU",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "รวบรวมและจัดหมวดหมู่รายวิชาของคณะและสาขาของนักศึกษามหาวิทยาลัยขอนแก่นที่เข้าใช้งาน",
            "แจ้งเตือนและอัพเดตข่าวสารหรือคะแนนปัจจุบันของแต่ละรายวิชาที่เรียน",
            "สามารถติดต่อกับบุคลากรภายในมหาวิทยาลัยขอนแก่นได้"
        ],
        username: "g13",
        key: "bzexcopzymqe"
    },
    {
        id: 5,
        name: "KKU CASTER",
        topic: "แอปพลิเคชั่นเกี่ยวกับการเข้าศึกษามหาวิทยาลัยขอนแก่น",
        Target: "นักเรียนมัธยมปลายที่ต้องการเข้าศึกษาที่มหาวิทยาลัยขอนแก่น",
        details: [
            "รับสมัครสอบNetsat  สมรรถนะ และรับสมัครนักเรียนเพื่อเป็นนักศึกษามหาวิทยาลัยขอนแก่น",
            "ชี้แจงข่าวสาร คะแนนสอบ เกณฑ์คะแนน เปรียบเทียบคะแนน ประเมินคะแนน เกณฑ์และตัวอย่างการทำแฟ้มสะสมผลงาน ที่เกี่ยวข้องกับการเข้ามหาวิทยาลัยขอนแก่น",
            "ประกาศผลสอบ การมีสิทธิ์เข้าเรียน การยืนยันตัวตน กรอกข้อมูล และชำระค่าธรรมเนียมการศึกษา ของมหาวิทยาลัยขอนแก่น "
        ],
        username: "g01",
        key: "zwjxotdtobnp"
    },
    {
        id: 6,
        name: "มาเด้อ",
        topic: "แอปพลิเคชันสำหรับค้นหาร้านอาหารเเละหาเพื่อนในโซนมหาวิทยาลัยขอนแก่น และพื้นที่โซนใกล้เคียง",
        Target: "นักศึกษาน้องใหม่มหาวิทยาลัยขอนแก่นและนักศึกษาเดิม ",
        details: [
            "เป็นแอปพลิเคชันสำหรับค้นหาร้านอาหารและคาเฟ่ที่อยู่ในละแวกบริเวณมหาวิทยาลัยขอนแก่น",
            "มีแนะนำเมนูอาหาร สามารเลือกได้ว่าต้องการหาร้านอาหารที่เปิดช่วงเวลาไหนบ้าง และค่าเฟ่ สามารถเลือกหมวดหมู่ได้ไม่ว่าจะเป็นสำหรับค่าเฟ่สำหรับอ่านหนังสือ นั่งชิวกับเพื่อนๆ หรือสำหรับถ่ายรูปสวยๆ",
            "สามารถหาเพื่อนเพื่อทานอาหารร่วมกันได้"
        ],
        username: "g10",
        key: "jvpmdnorgbuf"
    },
    {
        id: 7,
        name: "Mong Rest",
        topic: "แอพลิเคชันสำหรับผู้ประกอบการ ผู้ให้บริการห้องพัก และนักศึกษาหรือผู้ที่ต้องหาที่พักหรือหอพัก",
        Target: "นักศึกษาที่ต้องการหาหอพัก/ย้ายหอพัก",
        details: [
            "เป็นแอปที่รวบรวมหอพักโรงแรม ฯลฯ  โดยมีข้อมูลต่าง ๆ เช่น ตำแหน่งที่ตั้ง ราคา เงื่อนไขของหอพัก มีรีวิว มีระบบแชท มีระบบร้องเรียนสำหรับลูกบ้าน เหมือนกลุ่มไลน์ของคอนโด มีข้อมูลเชิงลึก ให้เจ้าของหอกรอกข้อมูลเช่นห้องว่าง(เหมือนตอนไปซื้อตัวที่โรงหนัง) แล้วคนที่ได้ห้องพักจะได้ key รหัสของห้องนั้น ใช้ในการกรอกในเว็ปเพื่อดูสถานะ ค่าไฟ อะไรต่างๆในห้องของเราได"
        ],
        username: "g08",
        key: "akouvkjnofai"
    },
    {
        id: 8,
        name: "Camp Connect",
        topic: "แอปพลิเคชั่นสำหรับแนะนำค่ายและกิจกรรม",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เป็นการแนะนำค่ายและกิจกรรมต่างๆในมหาลัย",
            "เลือกประเภทของค่ายหรือกิจกรรมที่ต้องการจะเข้าร่วม",
            "แสดงรายการและรายละเอียด"
        ],
        username: "g14",
        key: "aocxgksyymva"
    },
    {
        id: 9,
        name: "KKU FindFood",
        topic: "แอปพลิเคชั่นสำหรับแนะนำร้านอาหารและคาเฟ่รอบมหาวิทยาลัยขอนแก่น",
        Target: "บุคคลทั่วไปและนักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "โชว์ map แนะนำร้านอาหารและคาเฟ่รอบมหาวิทยาลัยขอนแก่นทั้ง 3 โซน คือ หลังมอ กังสดาล และโคลัมโบ",
            "กงล้อหมุนสุ่มร้านอาหารที่สามารถปรับเลือกฟิลเตอร์ได้ เช่น ปรับเลือกราคา ปรับเลือกประเภทอาหารที่ต้องการ และระยะทางที่ต้องการ"
        ],
        username: "g09",
        key: "azqxhjtluxsz"
    },
    {
        id: 10,
        name: "Freshy",
        topic: "แอปพลิเคชั่นช่วยเหลือในการปรับตัวของนักศึกษาใหม่",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น ชั้นปีที่ 1",
        details: [
            "เป็นแอปพลิเคชั่นรวบรวมการบริการแก่นักศึกษาของหน่วยงานต่างๆ และ รวบรวมข้อมูลแนะนำที่จำเป็นสิ่งอำนวยความสะดวกต่าง ๆ ที่นักศึกษาสามารถใช้งานได้ พร้อมทั้ง แสดงตารางเรียน/สอบ,ตารางกิจกรรมภายในมหาวิทยาลัยที่นักศึกษาสามารถเข้าร่วมได้ เพื่อช่วยในการวางแผนเวลาและกิจกรรมของนักศึกษา แอปพลิเคชั่นสามารถทำให้มหาลัยติดตามความคืบหน้าในการปรับตัวของนักศึกษา, เช่น  การเข้าร่วมกิจกรรม  ได้ และ มีการรวบรวมร้านค้าขายอุปกรณ์การเรียนของมหาวิทยาลัย มาโดยสามารถสั่งผ่านแอปได้เลย"
        ],
        username: "g03",
        key: "prnzhusbqnde"
    },
    {
        id: 11,
        name: "WeStay",
        topic: "แอปพลิเคชันสำหรับหาที่พักและรูมเมท",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "ค้นหาที่พักสำหรับนักศึกษา มข. และบอกข้อมูลที่พักอย่างละเอียด",
            "สามารถหารูมเมทได้ โดยสามารถระบุเพศ,อายุ และสามารถติดต่อกันเพื่อพูดคุยกันได้ หากไม่ต้องการรูมเมทสามารถระบุว่าไม่ต้องการรูมเมทได้",
            "มีแผนที่(GPS) สามารถดูการเดินทางไปยังที่พักได้"
        ],
        username: "g07",
        key: "ypoozixnepvx"
    },
    {
        id: 12,
        name: "ติวป่าว",
        topic: "แอปพลิเคชันสำหรับการติวความรู้ทั้งก่อนเข้ามาใน มข. และหลังเข้ามาแล้ว",
        Target: "น้องมัธยมและนักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เปิดโอกาสการหารายได้เสริม",
            "ฝึกทักษะความสามารถ",
            "เป็นการแนะนำแนวทางสำหรับน้องๆที่อยากจะเข้ามาศึกษาต่อ",
            "หาเพื่อนหรือรุ่นพี่",
            "หาคนติวเรื่องเรียนได้"
        ],
        username: "g02",
        key: "bandvtmazvna"
    },
    {
        id: 13,
        name: "KKU Emergency",
        topic: "แอปพลิเคชั่นสำหรับแจ้งเหตุฉุกเฉินภายใน มข.",
        Target: "นักศึกษามหาวิทยาลัยขอนแ่กน",
        details: [
            "นักศึกษาสามารถแจ้งเหตุด่วนที่ไหนก็ได้ภายในมหาวิทยาลัย พร้อมระบุตำแหน่งที่ชัดเจน แอพพลิเคชันจะส่งการแจ้งเตือนทันทีถึงเจ้าหน้าที่หรือผู้ที่เกี่ยวข้องเมื่อมีเหตุการณ์ฉุกเฉินเกิดขึ้น หลังจากแจ้งเหตุไปแล้วสามารถติดตามสถานะของเหตุการณ์ฉุกเฉินที่เราแจ้งไว้ได้ และ ทางแอพจะมีฟังก์ชั่นแนะนำวิธีรับมือเบื้องต้นของเหตุการณ์ที่นักศึกษาแจ้งเข้ามา"
        ],
        username: "g12",
        key: "hobdxargqjkj"
    },
    {
        id: 14,
        name: "KKU market",
        topic: "แอปพลิเคชั่นขายสินค้าและประมูลสินค้าออนไลน์",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เป็นแอปกระจายสินค้าของคณะต่างๆและนักศึกษาในมหาวิทยาลัยขอนแก่น มาทำการขายสินค้า เช่น ผลิตภัณฑ์ทางการเกษตรของคณะเกษตร หรือจะเป็นของที่ไม่ใช้แล้วของนักศึกษา เช่นเสื้อผ้า ของใช้ ก็สามารถนำมาขายได้โดยมีทั้งการประมูลและการขายสินค้าปกติ "
        ],
        username: "g18",
        key: "rfwoarvydnuu"
    },
    {
        id: 15,
        name: "KKU Guide",
        topic: "แอพช่วยแนะนำสถานที่ต่างๆ ในมหาลัยและบอกรายละเอียดวิชา",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เป็นแอพพลิเคชั่นที่ช่วยเหลือนักศึกษาโดยเฉพาะนักศึกษาน้องใหม่ที่ไม่รู้จักสถานที่ต่างๆ โดยการแนะนำเกี่ยวกับสถานที่ต่างๆในมหาวิทยาลัย และตารางเรียนพร้อมกับช่องทางการติดต่ออาจารย์ผู้สอน"
        ],
        username: "g04",
        key: "pjejxzljczui"
    },
    {
        id: 16,
        name: "KKU GO",
        topic: "แอปพลิเคชันสำหรับการเดินทางภายในมหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "ช่วยนักศึกษาในการเดินทางไปสถานที่ต่างๆภายในมหาวิทยาลัยขอนแก่น และช่วยให้ทราบเส้นทางในการเดินทางที่สั้นที่สุดและประหยัดเวลาในการเดินทางมากที่สุด ทั้งยังช่วยให้นักศึกษาเตรียมตัวเผื่อเวลาในการเดินทางได้ถูกต้อง รวมไปถึงช่วยในการค้นหาอาคารเรียน ห้องเรียน ห้องสอบ และสามารถนำทางไปยังอาคาร ห้องเรียน และห้องสอบที่ต้องการได้ "
        ],
        username: "g05",
        key: "frovwhkynbxy"
    },
    {
        id: 17,
        name: "ตุ้มโฮม KKU",
        topic: "แอปพลิเคชันการรวมตัวทำกิจกรรมของนักศึกษามหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เป็นแอปพลิเคชันที่จะช่วยให้นักศึกษาโดยเฉพาะปี1 ได้เข้าร่วมทำกิจกรรมต่างๆภายในมหาวิทยาลัย ซึ่งแอปพลิเคชันนี้จะช่วยให้นักศึกษาได้เจอเพื่อนใหม่ๆที่มีความชื่นชอบที่ตรงกัน เพื่อเป็นการส่งเสริมการทำกิจกรรมสำหรับนักศึกษาและเพื่อความผ่อนคลายจากการเรียน"
        ],
        username: "g16",
        key: "bhnqlpkagyga"
    },
    {
        id: 18,
        name: "HealthHub",
        topic: "แอปพลิเคชันดูแลสุขภาพต่างๆของนักศึกษามหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "แอปพลิเคชันที่ให้ข้อมูลเกี่ยวกับสุขภาพทั้งร่างกายและจิตใจพร้อมกับการให้คำปรึกษาทางด้านสุขภาพต่างๆ รวมถึงสุขภาพจิต และมีฟังก์ชันออกกำลังกาย มีเป้าหมายเพื่อช่วยให้นักศึกษาได้รับข้อมูลข่าวสาร ที่เกี่ยวข้องกับสุขภาพและสามารถเรียนรู้เกี่ยวกับวิธีดูแลสุขภาพที่ถูกต้องได้  ช่วยให้นักศึกษาสามารถจัดการกับความกดดันและเรียนรู้ได้อย่างมีประสิทธิภาพ"
        ],
        username: "g17",
        key: "gyhkzanynxtm"
    },
    {
        id: 19,
        name: "Meet friends KKU",
        topic: "แอปพลิเคชั่นสำหรับหาเพื่อนเรียน หรือ กิจกรรมต่างๆ",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "แอปพลิเคชั่นสำหรับหาเพื่อนในรั่วมหาวิทยาลัยขอนแก่น",
            "สามารถหาเพื่อนที่มีความชอบกิจกรรมคล้ายคลึงกันได้",
            "หาเพื่อนที่เรียนsecเดียวกันกับเราได้"
        ],
        username: "g21",
        key: "oflgebgthrse"
    },
    {
        id: 20,
        name: "Talk KKU",
        topic: "แอปพลิเคชันให้คำปรึกษาเกี่ยวกับการเรียนการใช้ชีวิต",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เป็นแอปพลิเคชันที่ให้คำปรึกษาเกี่ยวกับการเรียนการสอนและการใช้ชีวิตให้กับนักศึกษาในมหาวิทยาลัยขอนแก่น"
        ],
        username: "g25",
        key: "leupjibkquwo"
    },
    {
        id: 21,
        name: "Libraread",
        topic: "แอปพลิเคชันห้องสมุด",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "ค้นหา: ค้นหาหนังสือ สื่อสิ่งพิมพ์ สื่อดิจิทัล",
            "จองหนังสือ",
            "ยืม-คืน หนังสือ สื่อสิ่งพิมพ์ สื่อดิจิทัล",
            "สแกนบาร์โค้ด ตรวจสอบสถานะ ยืม-คืน",
            "อ่านออนไลน์ ผ่านแอปพลิเคชัน",
            "แจ้งเตือน หนังสือครบกำหนดคืน หนังสือพร้อมรับ ข่าวสาร กิจกรรม โปรโมชั่น"
        ],
        username: "g34",
        key: "knjcyzcucuzw"
    },
    {
        id: 22,
        name: "Find Things",
        topic: "แอพพลิเคชันเกี่ยวกับการหาของหายภายในมหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เพื่อให้ผู้ใช้สามารถค้นหาสิ่งของต่างๆที่หาย ได้อย่างรวดเร็วและสะดวก",
            "เพื่อช่วยในการติดตามตำแหน่งของที่สูญหายในกรณีฉุกเฉินและได้รับการช่วยเหลืออย่างมีประสิทธิภาพ",
            "เพื่อสนับสนุนการรักษาความปลอดภัยในพื้นที่มหาวิทยาลัย"
        ],
        username: "g31",
        key: "wgujwcoqeril"
    },
    {
        id: 23,
        name: "Nongmai KKU",
        topic: "แอปพลิเคชันช่วยแนะนำเกี่ยวกับมหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษาใหม่/กลุ่มคนที่ต้องการจะเข้าศึกษาต่อที่มหาวิทยาลัยขอนแก่น",
        details: [
            "เลือกคณะตามลักษณะนิสัย",
            "เลือกดูรายละเอียดคณะทั้งหมด",
            "เลือกดูสาขาย่อยของแต่ละคณะ",
            "ดูความต้องการของคะแนน",
            "ดูค่าเฉลี่ย ของคะแนนที่เข้าได้ สูงต่ำ ของแต่ละปี",
            "ดูวันเวลาการสมัครเข้าแต่ละรอบได้",
            "สามารถตั้งให้แจ้งเตือนในหัวข้อที่ต้องสมัคร ตามเวลาได้",
            "แบบทดสอบเพื่อแนะนำคณะ",
            "ดูรายละเอียดความเป็นมาของมหาลัย"
        ],
        username: "g20",
        key: "avwshvcuyail"
    },
    {
        id: 24,
        name: "Parking Space",
        topic: "แอปพลิเคชันเช็คที่จอดรถในบริเวณมหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "ใช้สำหรับเช็คพื้นที่จอดรถในมหาวิทยาลัยขอนแก่นสามารถรู้ได้ว่าจุดจอดรถบริเวณไหนเต็มแล้วหรือยังว่างอยู่แชะสามารถตรวจสอบผ่านกล้องของแอปที่อยู่ในบริเวณจอดรถ"
        ],
        username: "g30",
        key: "bteqekemzyng"
    },
    {
        id: 25,
        name: "TrackIT",
        topic: "แอปพลิเคชันที่ช่วยในการตัดสินใจเลือกเรียนต่อในแทรคต่างๆ",
        Target: "นักศึกษาสาขาเทคโนโลยีสารสนเทศ ปี1",
        details: [
            "รวบรวมข้อมูลของแทรคต่างๆในคณะ วิเคราะห์โอกาสการได้แทรคตามที่ต้องการ จากเกรดเฉลี่ยสะสม เพื่อเป็นตัวช่วยในการตัดสินใจ"
        ],
        username: "g24",
        key: "hxyhaabhzbqy"
    },
    {
        id: 26,
        name: "KKU SO",
        topic: "แอปพลิเคชันเกี่ยวกับการติดตามข่าวสาร ช่วยเหลือ รายงาน ความเคลื่อนไหวสังคมในมหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษา/บุคลากร/ศิษย์เก่า/ผู้คนบริเวณรอบมหาวิทยาลัย",
        details: [
            "แอปสำหรับการจัดการข่าวสารหรือลงขอความคิดเห็นแสดงความคิดเห็นในรูปแบบสังคม และฟังก์ชันอื่นๆ"
        ],
        username: "g35",
        key: "ncdpwmdruicu"
    },
    {
        id: 27,
        name: "HAR-HOR",
        topic: "แอปพลิเคชันหาหอพักบริเวณมหาวิทยาลัยขอนแก่น",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "แอปพลิเคชันจะรวบรวมทุกหอพักบริเวณมหาวิทยาลัยขอนแก่น พร้อมระบุรายละเอียดของหอ เช่น contact สำหรับติดต่อ , ราคาหอพัก , ค่าน้ำ , ค่าไฟ , รีวิวจากผู้ใช้จริง",
            "แอปพลิเคชันจะอัปเดตห้องว่างแบบ real time พร้อมรูปภาพจริงของหอพัก และรูปภาพจริงของห้อง (ไม่ใช่ห้องตัวอย่าง) เพื่อป้องกันปัญหาหอพัก/ห้องพักไม่ตรงปก",
            "แอปพลิเคชันจะทำการแนะนำห้องที่เหมาะสมกับความต้องการของผู้อยู่อาศัย เช่น ผู้อยู่อาศัยต้องการห้องพักเรทราคา 3,500-4,000 ห่างจากคณะไม่เกิน 500 เมตร โซนใกล้ร้านเหล้า เป็นต้น แอปพลิเคชันจะประมวลผลโดยนำปัจจัยต่าง ๆ มาเปรียบเทียบกัน แล้วทำการสรุปผลว่าหอพักไหนตอบโจทย์มากที่สุด"
        ],
        username: "g29",
        key: "ubrmxhwnwern"
    },
    {
        id: 28,
        name: "Plan KKU",
        topic: "แอปพลิเคชันวางแผนการเรียน",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "แอปจะรวบรวมข้อมูลวิชาของแต่ละคณะว่าปีไหนจะต้องลงทะเบียนวิชาไหนบ้าง",
            "สามารถกรอกเป้าหมาย และเกรดแต่ละวิชา",
            "แอปจะวางแผนการเรียนให้ แล้วบอกแนวทางถ้าทำตามเป้าหมายไม่ได้"
        ],
        username: "g23",
        key: "ljmjblghxneu"
    },
    {
        id: 29,
        name: "MD convenient",
        topic: "แอพพลิเคชันเกี่ยวกับการแพทย์ เพื่อความอำนวยสะดวกแก่นักศึกษา",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "เราจะสามารถใช้เป็นรหัสนักศึกษาเกี่ยวกับนักศึกษาต้องเป็นนักศึกษาในมหาลัยขอนแก่น",
            "สามารถส่งยาที่เป็นยาของโรคประจำตัวให้กับนักศึกษาได้แต่ว่าก็ต้องเก็บค่าส่งประมาณ 50 บาทตามระยะทางอ่ะนะ",
            "ให้ความรู้นักศึกษาให้คำปรึกษาและให้การตรวจเฉพาะทาง"
        ],
        username: "g32",
        key: "neorvetzbhuo"
    },
    {
        id: 30,
        name: "Find Tutor",
        topic: "แอปพลิเคชันค้นหา นศ. นร. หรือ ติวเตอร์มาช่วยสอนในวิชาที่ไม่เข้าใจ",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น/นักเรียนทั่วไป",
        details: [
            "ช่วยให้นักศึกษาที่ไม่เข้าใจในวิชานั้นๆ ได้มีคนมาช่วยสอนในวิชานั้นๆ",
            "ได้รู้จักคนใหม่ๆ หรือ คนเก่งๆในวิชานั้นๆ และยังได้เข้าสังคม",
            "ทำให้ user ได้มีกำลังใจในการเรียนในคณะในสาขาต่อไป",
            "ช่วยเพิ่มคุณภาพ นศ. นร. และมหาลัยดีขึ้น"
        ],
        username: "g26",
        key: "befrugvafgot"
    },
    {
        id: 31,
        name: "Guide food",
        topic: "แอปพลิเคชันแนะนำร้านอาหารแถวมข",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่น",
        details: [
            "แนะนำร้านอาหาร",
            "ค้นหาร้านอาหารที่อยากกิน",
            "นำทางไปร้านอาหาร",
            "ดูรีวิวได้"
        ],
        username: "g27",
        key: "ruaqgbnrvqkj"
    },
    {
        id: 32,
        name: "jobjive",
        topic: "แอปพลิเคชันหางานพาร์ทไทม์",
        Target: "นักศึกษามหาลัยขอนแก่นที่ต้องการหารายได้",
        details: [
            "ช่วยหางานพาร์ทไทม์ให้นักศึกษาที่อยากหารายได้เสริมในเวลาว่าง"
        ],
        username: "g28",
        key: "kgmfyccmfaio"
    },
    {
        id: 33,
        name: "summarize",
        topic: "แอปพลิเคชั่นคำนวนรายรับรายจ่าย",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่นและบุคคลทั่วไป",
        details: [
            "ช่วยคำนวนรายรับรายจ่ายจากการโอนเงินและสามารถสรุปค่าใช้จ่ายได้ทำให้ง่ายต่อการวางแผนการใช้เงินและออมเงิน"
        ],
        username: "g33",
        key: "xfsnneueagle"
    },
    {
        id: 34,
        name: "ไม่พบข้อมูล",
        topic: "ไม่พบข้อมูล",
        Target: "ไม่พบข้อมูล",
        details: [
            "ไม่พบข้อมูล"
        ],
        username: "g36",
        key: "nnclsshptkbn"
    },
    {
        id: 35,
        name: "Kaikhong KKU",
        topic: "แอปพลิเคชันขายของสำหรับนักศึกษา",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่นและบุคคลภายนอก",
        details: [
            "สร้างรายได้ให้นักศึกษาและสร้างความสะดวกสบายในการค้าขายผลิตภัณฑ์หรืออาหารที่นักศึกษาต้องการขายโดยให้นักศึกษาที่ใช้แอปพลิเคชันสามารถสร้างร้านเป็นของตัวเองและลงของที่ต้องการขาย"
        ],
        username: "g19",
        key: "kmzzfadblnvr"
    },
    {
        id: 36,
        name: "Make friends ",
        topic: "แอปพลิเคชันหาเพื่อน",
        Target: "นักศึกษามหาวิทยาลัยขอนแก่นที่ต้องการหาเพื่อนที่มีความชอบคล้ายกัน",
        details: [
            "เลือกเพศ ชั้นปี คณะ ที่ต้องการทำความรู้จัก",
            "ใส่ข้อมูล รูปภาพตนเอง และสิ่งที่สนใจ เช่น อาหารที่ชอบ แนวเพลง ประเภทหนังสือ หนัง หรือสถานที่ที่อยากไป",
            "ระบบทำการจับกลุ่มผู้ใช้งาน3คนที่เลือกความสนใจใกล้เคียงกัน",
            "เริ่มต้นแชทผ่านแอปพลิเคชัน"
        ],
        username: "g22",
        key: "oxwkybeodafp"
    },
    {
        id: 37,
        name: "ไม่พบข้อมูล",
        topic: "ไม่พบข้อมูล",
        Target: "ไม่พบข้อมูล",
        details: [
            "ไม่พบข้อมูล"
        ],
        username: "g37",
        key: "iqclncjyjuuy"
    },
    {
        id: 0,
        name: "TA Test",
        topic: "ทดสอบระบบงาน",
        Target: "TA",
        details: [
            "User group test TA"
        ],
        username: "g00",
        key: "00000"
    }
]

export { users, groups };