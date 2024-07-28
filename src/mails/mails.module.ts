import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';



@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (confing: ConfigService) => ({
        transport: {
          host: confing.get('MAIL_HOST'),
          secure: false,
          auth: {
            user: confing.get('MAIL_USER'),
            pass: confing.get('MAIL_PASSWORD'),
          },
        }, 
        defaults: {
          from: `"No Reply" <${confing.get('MAIL_USER')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule {}
