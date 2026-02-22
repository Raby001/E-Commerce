import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private tasksRepo: Repository<Task>){}

  createTask(taskData: Partial<Task>){
    const task = this.tasksRepo.create(taskData);
    return this.tasksRepo.save(task);
  }

  getTask(id: number){
    return this.tasksRepo.findOne({ where: {id}, relations: ['user']});
  }

  async updateTask(id: number, updateData: Partial<Task>){
    await this.tasksRepo.update({id}, updateData);
    return this.getTask(id);
  }

  deleteTask(id: number){
    return this.tasksRepo.delete(id);
  }

}
