import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DigimonsService {

  async findAll(queryParams:any) {
    const pageSize = queryParams.pageSize ? queryParams.pageSize : 20
    const page = queryParams.page ? queryParams.page : 0
    const attribute = queryParams.attribute ? queryParams.attribute : null
    const level = queryParams.level ? queryParams.level : null

    try {
      const response = await axios.get('https://www.digi-api.com/api/v1/digimon', {
        params: {
          pageSize,
          page,
          attribute,
          level,
        },
      });
      return response.data;
    } catch (error) {
   
      console.log({error})
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const response = await axios.get('https://www.digi-api.com/api/v1/digimon/'+id);
      return response.data;
    } catch (error) {
   
      console.log({error})
      throw error;
    }
  }

}
