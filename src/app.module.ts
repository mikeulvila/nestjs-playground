import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';

@Module({
  imports: [AreasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
