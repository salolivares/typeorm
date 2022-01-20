import {PrimaryGeneratedColumnType} from "../../driver/types/ColumnTypes";
import { ColumnCommonOptions } from "./ColumnCommonOptions";

/**
 * Describes all options for PrimaryGeneratedColumn decorator with identity generation strategy.
 */
export interface PrimaryGeneratedColumnIdentityOptions extends Pick<ColumnCommonOptions, "transformer"> {

    /**
     * Column type. Must be one of the value from the ColumnTypes class.
     */
    type?: PrimaryGeneratedColumnType;

    /**
     * Column name in the database.
     */
    name?: string;

    /**
     * Column comment. Not supported by all database types.
     */
    comment?: string;

    /**
     * Identity column type. Supports only in Postgres 10+.
     */
    generatedIdentity?: "ALWAYS"|"BY DEFAULT";
}
