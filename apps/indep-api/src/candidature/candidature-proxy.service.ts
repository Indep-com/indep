import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CandidatureProxyService {
  constructor(@Inject('CANDIDATURE_SERVICE') private readonly client: ClientProxy) {}

  create(data: any) {
    return firstValueFrom(this.client.send({ cmd: 'create-candidature' }, data));
  }

  findAll() {
    return firstValueFrom(this.client.send({ cmd: 'get-all-candidatures' }, {}));
  }

  findOne(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'get-candidature-by-id' }, id));
  }

  update(id: string, data: any) {
    return firstValueFrom(this.client.send({ cmd: 'update-candidature' }, { id, ...data }));
  }

  remove(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'delete-candidature' }, id));
  }
}
