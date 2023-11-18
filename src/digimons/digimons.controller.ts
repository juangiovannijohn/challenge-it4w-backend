import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { DigimonsService } from './digimons.service';

@Controller('digimons')
export class DigimonsController {
  constructor(private readonly digimonsService: DigimonsService) {}


  @Get()
  findAll(@Req() request: Request) {
    const queryParams = request['query'];
    console.log('Parámetros de la consulta:', queryParams);
    return this.digimonsService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('Parámetros de la consulta===<<<<:', id);
    return this.digimonsService.findOne(+id);
  }

}
