import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateMataKuliahDto} from './dto/create-matakuliah.dto';
import {UpdateMataKuliahDto} from './dto/update-matakuliah.dto';
import { MataKuliahService } from './matakuliah.service';

@Controller('matakuliah')
export class MataKuliahController {
    constructor(private readonly service: MataKuliahService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }
        
    @Post()
    create(@Body() dto: CreateMataKuliahDto) {
        return this.service.create(dto);
    }

    @Get(':kode')
    findOne(@Param('kode') kode: string) {
        return this.service.findOne(kode);
    }

    @Put(':kode')
    async update(@Param('kode') kode: string, @Body() dto: UpdateMataKuliahDto) {
        try {
            return this.service.update(kode, dto);
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error.message || 'Update failed',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Delete(':kode')
    remove(@Param('kode') kode: string) {
        return this.service.remove(kode);
    }
}
