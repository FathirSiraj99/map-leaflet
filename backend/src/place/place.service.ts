import { Injectable } from '@nestjs/common';
import { place } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlaceService {
    constructor (private prismaService : PrismaService){}

    async findView(): Promise<place>{
        return this.prismaService.$queryRawUnsafe ('SELECT typle_place.')
    }

    async findAll(): Promise<place[]>{
        return this.prismaService.place.findMany()
    }

    async findById(id : string): Promise<place>{
        return this.prismaService.place.findUnique({where:{id}})
    }   

    async createData(data : {name : string, description : string , latitude : string , longitude : string, type_placeid:string}): Promise<place>{
        return this.prismaService.place.create({data})
    }

    async updataData(id : string, data : {name : string, description : string , latitude : string , longitude : string, type_placeid:string}): Promise<place>{
        return this.prismaService.place.update({
            where:{
                id
            },
            data,
        })
    }

    async deleteData(id : string): Promise<place>{
        return this.prismaService.place.delete({
            where :{
                id
            }
        })
    }

    }
