import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Photo from './photo.entity';

export enum PhotoTagEnum {
  PORTRAIT = 'portrait',
  NATURE = 'nature',
  CARTOON = 'cartoon',
}

@Entity()
export default class PhotoTags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'tag_type',
    type: 'enum',
    enum: PhotoTagEnum,
    default: PhotoTagEnum.PORTRAIT,
  })
  tagType: PhotoTagEnum;

  @ManyToOne(() => Photo, (photo) => photo.tags)
  @JoinColumn({ name: 'photo_id' })
  tag: Photo;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
