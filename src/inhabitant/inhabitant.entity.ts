import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('inhabitant', { schema: 'public' })
export class InhabitantEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 20 })
  name: string;

  @Column({ name: 'hungry', type: 'int' })
  hungry: number;

  @Column({ name: 'occupation', type: 'varchar', length: 10 })
  occupation: string;

  @Column({ name: 'age', type: 'int' })
  age: number;

  @Column({ name: 'money', type: 'int' })
  money: number;

  @Column({ name: 'ban', type: 'boolean' })
  ban: boolean;

  @CreateDateColumn({
    name: 'create_time',
    type: 'timestamp without time zone',
  })
  create_time: Date;

  @UpdateDateColumn({
    name: 'update_time',
    type: 'timestamp without time zone',
  })
  update_time: Date;

  @Column({ name: 'update_user_id', type: 'varchar', length: 128 })
  update_user_id: string;
}
