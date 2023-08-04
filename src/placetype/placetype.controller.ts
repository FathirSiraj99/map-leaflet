import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlacetypeService } from './placetype.service';
import { type_place } from '@prisma/client';

@Controller('placetype')
export class PlacetypeController {
    constructor(private placetypeService: PlacetypeService) { }

    @Get()
    async findAll(): Promise<type_place[]> {
        return await this.placetypeService.findAll()
    }

    @Get('id')
    async findById(@Param('id') id: string): Promise<type_place> {
        return await this.placetypeService.findById(id)
    }

    @Post()
    async createData(@Body() data: { typeName: string }): Promise<type_place> {
        return await this.placetypeService.createData(data)
    }

    @Put('id')
    async updateData(@Param('id') id: string, @Body() data: { typeName: string }): Promise<type_place> {
        return await this.placetypeService.updateData(id, data)
    }

    @Delete('id')
    async deleteData(@Param('id') id: string): Promise<type_place> {
        return await this.placetypeService.deleteData(id)
    }

}
