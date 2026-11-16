/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 */

import { isStandaloneApp } from "@schematics/angular/utility/ng-ast-utils";
import { getMainFilePath } from "@schematics/angular/utility/standalone/util";
import {
    addRootImport,
    addRootProvider,
} from "@schematics/angular/utility/standalone/rules";
import { Rule, Tree, SchematicContext } from "@angular-devkit/schematics";
import { Schema } from "./schema";

export function ngAdd(options: Schema): Rule {
    return async (tree: Tree, _context: SchematicContext) => {
        const mainFile = await getMainFilePath(tree, options.project); // ← async

        if (isStandaloneApp(tree, mainFile)) {
            return addRootProvider(
                options.project,
                ({ code, external }) =>
                    code`${external("provideNgxOauth2OidcOidc", "ngx-oauth2-oidc")}()`,
            );
        } else {
            return addRootImport(
                options.project,
                ({ code, external }) =>
                    code`${external("NgxOauth2OidcModule", "ngx-oauth2-oidc")}`,
            );
        }
    };
}
// function addRootProvider(project: string, arg1: ({ code, external }: { code: any; external: any; }) => any): void | Rule | PromiseLike<void | Rule> {
//   throw new Error("Function not implemented.");
// }
