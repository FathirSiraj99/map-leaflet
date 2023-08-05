import { Injectable } from '@nestjs/common';
import { place_type } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PlacetypeService {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<place_type[]> {
        return this.prismaService.place_type.findMany()
    }

    async findById(id: string): Promise<place_type> {
        return this.prismaService.place_type.findFirst({ where: { id } })
    }

    async createData(data: { nameType: string }): Promise<place_type> {
        return this.prismaService.place_type.create({ data })
    }

    async updateData(id: string, data: { typeName: string }): Promise<place_type> {
        return this.prismaService.place_type.update({
            where: { id },
            data
        })
    }

    async deleteData(id: string): Promise<place_type> {
        return this.prismaService.place_type.delete({ where: { id } })
    }

}
