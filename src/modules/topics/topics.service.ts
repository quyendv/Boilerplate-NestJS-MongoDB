import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { Topic } from './entities/topic.entity';
import { TopicRepository } from './repositories/topic.repository';

@Injectable()
export class TopicsService extends BaseService<Topic, TopicRepository> {
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly topicRepository: TopicRepository) {
    super(topicRepository);
  }
}
