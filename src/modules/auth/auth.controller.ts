import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { RequestWithUser } from 'src/types/auth.type';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LocalAuthGuard } from './guards/local.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signIn(@Req() request: RequestWithUser) {
    return this.authService.signIn(request.user._id.toString()); // need toString() because validate in strategy return UserDocument, _id: ObjectId
  }
}
