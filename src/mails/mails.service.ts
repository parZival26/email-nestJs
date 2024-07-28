import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailsService {
  constructor(private readonly mailerService: MailerService ) {}

  async sendUserConfirmation(user:string, email: string) {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D'
    await this.mailerService.sendMail({
      to: email,
      subject: 'Win a prize',
      template: './welcome',
      context:{
        name: user,
        url
      }
    })
  }

}
