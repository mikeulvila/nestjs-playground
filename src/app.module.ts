import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './areas/entities/area.entity';
import { AreaTag } from './areas/entities/area-tag.entity';

@Module({
  imports: [
    AreasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'main',
      entities: [Area, AreaTag],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
