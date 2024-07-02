import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'link_extras' })
export class LinkExtra {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ type: 'number', name: 'targetLink' })
   targetLink: number;

   @Column({})
   ip: string;

   @Column({})
   userAgent: string;
}
