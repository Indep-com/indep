import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MissionProxyService {
  private readonly baseUrl = 'http://localhost:4004'; // peut devenir 'http://mission-service:4004'

  async findAll() {
    const { data } = await axios.get(`${this.baseUrl}/missions`);
    return data;
  }

  async findOne(id: number) {
    const { data } = await axios.get(`${this.baseUrl}/missions/${id}`);
    return data;
  }

  async create(dto: any) {
    const { data } = await axios.post(`${this.baseUrl}/missions`, dto);
    return data;
  }

  async update(id: number, dto: any) {
    const { data } = await axios.patch(`${this.baseUrl}/missions/${id}`, dto);
    return data;
  }

  async delete(id: number) {
    const { data } = await axios.delete(`${this.baseUrl}/missions/${id}`);
    return data;
  }
}
