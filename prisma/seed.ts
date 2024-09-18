import { prisma } from "~/server/db"
import {faker} from '@faker-js/faker'
import { Prisma } from "@prisma/client"

async function main(){

    // create admin
    const admin = await prisma.user.upsert({ // upsert หาข้อมูลเจอให้ทำอะไร
        where:{email:'adminpae@gmail.com'},
        update:{},
        create:{
            email:'adminpae@gmail.com',
            name:'admin',
            password:'password',
            role:'ADMIN',
            image:faker.image.avatar(),

        }
    })


// facke create user 10 user  use facker loop where email
    const numOfUser =10  
    for(let i=0;i<numOfUser;i++){

        const createUserInput:Prisma.UserCreateInput ={
            name:faker.internet.displayName(),
            password:faker.internet.password(),
            email:faker.internet.email(),
            image:faker.image.avatar(),
            role:faker.helpers.arrayElement(['ADMIN','MANAGER','MEMBER']),


        }
        const user = await prisma.user.upsert({  
            where:{email:createUserInput.email},//หา email ไม่ซ้ำแล้วสร้าง
            update:{},
            create:createUserInput,  // สร้างจาก facker ด้านบน
            
            
        })
    }

}
main().then(async()=>{    // หลังเชื่อมต่อจบก็ตัดการเชื่อมต่อ
    await prisma.$disconnect()

}).catch(async(e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)

})