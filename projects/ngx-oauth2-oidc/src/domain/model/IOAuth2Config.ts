/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 *
 * Public API Surface of ngx-oauth2-oidc
 */

import { IOAuth2Options, IOAuth2Metadata } from "..";

/** Config object. Contains all the data used by the oauth2 service. It's divided into sections */
const config = {
    /** Options section. Configuration options default parameters */
    options: {} as IOAuth2Options,

    /** Metadata section.
     * Fields loaded from the discovery document override configuration values.
     * Method parameters override fields loaded from the discovery document and configuration settings. */
    metadata: {} as IOAuth2Metadata,
};

export const configSectionsNames = [
    ...Object.keys(config),
] as (keyof typeof config)[];

/** Config object type */
export interface IOAuth2Config extends Partial<typeof config> {}
