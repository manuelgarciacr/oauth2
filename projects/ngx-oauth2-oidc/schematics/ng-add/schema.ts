/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 */

export interface Schema {
    // Name of the project.
    project: string;
    // Name of the login component.
    loginComponent?: string;
    // Skip the automatic installation of packages. You will need to manually install the dependencies later.
    skipInstall: boolean;
}
