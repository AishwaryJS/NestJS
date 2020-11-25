import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiamondsModule } from './diamonds/diamonds.module';

@Module({
  imports: [DiamondsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
