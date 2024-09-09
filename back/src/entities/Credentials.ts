import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 12
    })
    username: string

    @Column({
        length: 15
    })
    password: string

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential
};