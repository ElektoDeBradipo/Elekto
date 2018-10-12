import { Injectable } from '@nestjs/common';
import { graphqls2s } from 'graphql-s2s';
import { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);

@Injectable()
export class SchemaService {
  async transpileSchema(sourcePath: string) {
    const source = await readFileAsync(sourcePath, 'utf8');
    return graphqls2s.transpileSchema(source);
  }
}
