import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DigimonsModule } from './digimons/digimons.module';

@Module({
  imports: [DigimonsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
