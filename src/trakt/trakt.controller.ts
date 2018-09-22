import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('trakt')
export class TraktController {
  @Get('callback')
  @UseGuards(AuthGuard('trakt'))
  registerToken () {
    return 'hello'
  }
}
