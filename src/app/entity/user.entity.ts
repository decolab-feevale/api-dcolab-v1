import { Entity, Column, PrimaryGeneratedColumn, Index, Timestamp } from 'typeorm';

@Entity({name: 'app_users'})

export class UserEntity{
  @PrimaryGeneratedColumn()
  ID: bigint;

  @Index("user_login_key",{unique: false})
  @Column({length:60})
  user_login: String;

  @Column()
  user_pass: string;

  @Index("user_nicename",{unique: false})
  @Column({length:50})
  user_nicename: String;

  @Index("user_email",{unique: false})
  @Column({length:100})
  user_email: string;

  @Column({length:100})
  user_url: String;

  @Column()
  user_registered: Date;

  @Column()
  user_activation_key: String;

  @Column()
  user_status: number;

  @Column({length:250})
  display_name: String;
}