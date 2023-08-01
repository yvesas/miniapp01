import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 256 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  firstName: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  phone: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}