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

    @Column({ name: 'idCard', type: 'nvarchar', length: 128 })
    idCard: string;

    @Column({ name: 'name', type: 'nvarchar', length: 20 })
    name: string;

    @Column({ name: 'hungry', type: 'int' })
    hungry: number;

    @Column({ name: 'occupation', type: 'nvarchar', length: 10 })
    occupation: string;

    @Column({ name: 'age', type: 'int' })
    age: number;

    @Column({ name: 'money', type: 'int' })
    money: number;

    @Column({ name: 'ban', type: 'boolean' })
    ban: boolean;

    @CreateDateColumn({ name: 'create_time', type: 'datetime' })
    create_time: Date;

    @UpdateDateColumn({ name: 'update_time', type: 'timestamp without time zone' })
    update_time: Date;

    @Column({ name: 'update_user_id', type: 'nvarchar', length: 128 })
    update_user_id: string;
}
