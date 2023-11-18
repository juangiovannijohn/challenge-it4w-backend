import { Module } from '@nestjs/common';
import { DigimonsService } from './digimons.service';
import { DigimonsController } from './digimons.controller';

@Module({
  controllers: [DigimonsController],
  providers: [DigimonsService],
})
export class DigimonsModule {}
