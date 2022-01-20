import { ColumnCommonOptions } from "./ColumnCommonOptions";

/**
 * Describes all options for PrimaryGeneratedColumn decorator with numeric uuid strategy.
 */
export interface PrimaryGeneratedColumnUUIDOptions extends Pick<ColumnCommonOptions, "transformer"> {

    /**
     * Column name in the database.
     */
    name?: string;

    /**
     * Column comment. Not supported by all database types.
     */
    comment?: string;

}
