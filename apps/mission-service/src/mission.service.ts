import { Injectable, NotFoundException } from '@nestjs/common';
import { PgService } from './pg.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';

@Injectable()
export class MissionService {
  constructor(private readonly pg: PgService) {}

  async findAll() {
    const result = await this.pg.client.query(
      'SELECT * FROM missions ORDER BY created_at DESC',
    );
    return result.rows;
  }

  async findOne(id: string) {
    const result = await this.pg.client.query(
      'SELECT * FROM missions WHERE id = $1',
      [id],
    );
    if (result.rowCount === 0) {
      throw new NotFoundException('Mission not found');
    }
    return result.rows[0];
  }

  async create(data: CreateMissionDto) {
    const id = uuidv4();
    const result = await this.pg.client.query(
      `INSERT INTO missions (id, title, description, price, status)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [id, data.title, data.description, data.price, data.status],
    );
    return result.rows[0];
  }

  async update(id: string, data: UpdateMissionDto) {
    const result = await this.pg.client.query(
      `UPDATE missions SET user_id = $1, title = $2, description = $3, price = $4, status = $5
       WHERE id = $6 RETURNING *`,
      [data.user_id, data.title, data.description, data.price, data.status, id],
    );
    if (result.rowCount === 0) {
      throw new NotFoundException('Mission not found à mettre à jour');
    }
    return result.rows[0];
  }

  async remove(id: string) {
    const result = await this.pg.client.query(
      'DELETE FROM missions WHERE id = $1',
      [id],
    );
    if (result.rowCount === 0) {
      throw new NotFoundException('Mission not found à supprimer');
    }
    return { message: 'Mission supprimée' };
  }
}
