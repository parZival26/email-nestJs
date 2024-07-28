import { Module } from '@nestjs/common';
import { MailsModule } from './mails/mails.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
