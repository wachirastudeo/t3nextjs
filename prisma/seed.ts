import { prisma } from "~/server/db"
import {faker} from '@faker-js/faker'
import { Leave, LeaveStatus, Prisma } from "@prisma/client"

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
    const userIds:number[]= [admin.id]
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
        userIds.push(user.id)
    }

    //create leave 
    const numOfLeave = 100 
 
    
    for(let i=0;i<numOfLeave;i++){
        const status:LeaveStatus = faker.helpers.arrayElement(['PENDING','APPROVED','REJECTED'])
        const userId = faker.helpers.arrayElement(userIds)
        const leaveDate = faker.date.future().toISOString()
        const createLeaveInput:Prisma.LeaveCreateInput ={
            leaveDate:leaveDate,
            reason:faker.lorem.paragraph(),
            status:status,
            user:{
                connect:{id:faker.helpers.arrayElement(userIds)}
            },
            rejectionReason:status ==='REJECTED'?faker.lorem.paragraph():undefined,

    
        }
        await prisma.leave.upsert({
            where:{
                userId_leaveDate:{
                    userId,
                    leaveDate
                }
            },
            update:{},
            create:createLeaveInput
        })
    }

    //create articles 

    const numOfArticle = 20 
    


}
main().then(async()=>{    // หลังเชื่อมต่อจบก็ตัดการเชื่อมต่อ
    await prisma.$disconnect()

}).catch(async(e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)

})