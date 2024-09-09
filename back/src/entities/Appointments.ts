import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Users"

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column("date")
    date: string

    @Column("time")
    time: string

    @Column()
    userId: number

    @Column({
        default: "active"
    })
    status: string

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.appointments)
    user: User
};