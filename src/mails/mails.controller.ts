import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @Get()
  async sendTestEmail() {
    await this.mailsService.sendUserConfirmation("Mauricio", "maome@hotmail.com");
    return "Email sent";
  }
  
}
