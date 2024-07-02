import {
   Column,
   CreateDateColumn,
   DeleteDateColumn,
   Entity,
   ManyToOne,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from 'typeorm';
import { Link } from '../link/link.entity';

@Entity({ name: 'user' })
export class User {
   @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
   @ManyToOne((type) => Link, (link) => link.userId)
   id: number;

   @Column({ type: 'varchar', length: 255, name: 'email', nullable: false, unique: true })
   email: string;

   @Column({ type: 'number', name: 'usage', nullable: false })
   usage: number;

   @CreateDateColumn({ name: 'created_at', nullable: false })
   createdAt: Date;

   @DeleteDateColumn({ name: 'deleted_at', nullable: true })
   deletedAt: Date;

   @UpdateDateColumn({ name: 'withdrawn_at', nullable: true })
   withdrawnAt: Date;

   @UpdateDateColumn({ name: 'password_updated_at', nullable: true })
   passwordUpdatedAt: Date;

   @UpdateDateColumn({ name: 'last_login_at', nullable: true })
   lastLoginAt: Date;
}
