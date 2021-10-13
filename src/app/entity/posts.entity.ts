import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, Index, PrimaryColumn } from 'typeorm';

@Entity({name: 'app_posts'})
export class PostsEntity { 
  @PrimaryGeneratedColumn()
  ID: bigint;

  @Column()
  post_author: number;

  @Column()
  post_date: Date;

  @Column()
  post_date_dmt: Date;

  @Column('longtext')
  post_content: String;

  @Column('text')
  post_title: String;

  @Column('text')
  post_excerpt: String;

  @Column({length:20})
  post_status: String;

  @Column({length:20})
  comment_status: String;

  @Column({length:20})
  ping_status:String;

  @Column({length:255})
  post_password: String;

  @Index("post_name",{unique: false})
  @Column({length:200})
  post_name: String;

  @Column('text')
  to_ping: String;

  @Column('text')
  pinged: String;

  @Column()
  post_modified: Date;

  @Column()
  post_modified_gmt: Date;

  @Column('longtext')
  post_content_filtered: String;

  @Column({ type:"bigint"} )
  post_parent: number;

  @Column({length:255})
  guid: String;

  @Column({ type:"int"} )
  menu_order: number;

  @Column({length:20})
  post_type: String;

  @Column({length:100})
  post_time_type: String;

  @Column({ type:"bigint"})
  comment_count: number;
}