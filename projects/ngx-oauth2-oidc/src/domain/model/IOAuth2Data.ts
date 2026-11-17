import {
    IOAuth2Configuration,
    IOAuth2Metadata,
} from "..";

/** Data object. Contains all the data used by the oauth2 service. It's divided into sections */
const data = {
    /** Configuration section. Configuration options and method default parameters */
    configuration: {} as IOAuth2Configuration,

    /** Metadata section.
     * Fields loaded from the discovery document override configuration values.
     * Method parameters override fields loaded from the discovery document and configuration settings. */
    metadata: {} as IOAuth2Metadata,
};

/** Data object sections */
export const dataSections = [
    ...Object.keys(data),
] as (keyof typeof data)[];

/** Data object type */
export interface IOAuth2Data extends Partial<typeof data> {}
