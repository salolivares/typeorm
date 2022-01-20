import {Entity, PrimaryGeneratedColumn, Column} from "../../../../src";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: "bigint", transformer: {from: (dbValue: string) => BigInt(dbValue), to: (entityValue: bigint) => {if(entityValue === undefined || entityValue === null) return entityValue; else return entityValue.toString();}}})
    id: bigint;

    @Column()
    name: string;
}