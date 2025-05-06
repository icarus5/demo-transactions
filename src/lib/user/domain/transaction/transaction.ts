import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numberOperation: string;

  @Column()
  codeSecurity: string;

  @Column()
  destinationAccount: string;

  @Column()
  userId: string;

  @Column()
  account: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ type: 'decimal', precision: 12, scale: 3 })
  amount: number;

  @Column()
  state: string;

  @Column()
  type: 'credit' | 'debit';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column()
  isActive: boolean;

  @Column()
  createUser: string;
}
