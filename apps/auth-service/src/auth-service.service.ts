import { KAFKA_TOPICS } from '@app/kafka/index';
import { KAFKA_SERVICE } from '@app/kafka/kafka.module';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';


@Injectable()
export class AuthServiceService {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkClient: ClientKafka,
    // private readonly dbService: DatabaseService,
    // private readonly jwtService: JwtService,
  ) {}

  async onModuleInit() {
    // connect to kafka when module initializes
    await this.kafkClient.connect();
  }

  getHello(): string {
    return 'Hello World!';
  }

  simulateUserRegistaration(email:string){
    //publish events to kafka
    this.kafkClient.emit(KAFKA_TOPICS.USER_REGISTERED,{
      email,
      timestamp: new Date().toISOString(),
    });

    return {message: `User registered : ${email}`};
    
  }
}
