import { Injectable } from '@nestjs/common';
import { encode } from 'blurhash';
import * as fs from 'fs';
import * as sharp from 'sharp';
import * as path from 'path';
import * as uuid from 'uuid';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFile(file: Express.Multer.File, userId: string) {
    const fileName = uuid.v4() + path.extname(file.originalname);
    const filePath = path.join(__dirname, '..', '..', '..', 'public', fileName);

    fs.writeFileSync(filePath, file.buffer);

    const image = await sharp(file.buffer).raw().ensureAlpha().toBuffer({
      resolveWithObject: true,
    });

    const { data, info } = image;
    const blurHash = encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      4,
      4,
    );

    const fileRecord = await this.prismaService.file.create({
      data: {
        originalName: file.originalname,
        blurHash,
        filePath: `${fileName}`,
        user: { connect: { id: userId } },
      },
    });
    return fileRecord;
  }
}
