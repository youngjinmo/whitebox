import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LinkExtra } from '@link-extras/link-extra.entity';

@Entity({ name: 'link' })
export class Link {
   @PrimaryGeneratedColumn({ type: 'number', name: 'id' })
   @ManyToOne(() => LinkExtra, (linkExtras) => linkExtras.targetLink)
   id: number;

   @Column({ type: 'varchar', length: 255, name: 'uri', nullable: false, unique: true })
   uri: string;

   @Column({ type: 'varchar', length: 255, name: 'redirectionUri', nullable: false })
   redirectionUri: string;

   @Column({ type: 'number', nullable: true })
   userId: number;
}
