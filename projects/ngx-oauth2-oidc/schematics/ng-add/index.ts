/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 */

import {
    addRootProvider,
} from "@schematics/angular/utility/standalone/rules";
import { getMainFilePath } from "@schematics/angular/utility/standalone/util";
import { isStandaloneApp } from "@schematics/angular/utility/ng-ast-utils";
import { Rule, Tree, SchematicContext } from "@angular-devkit/schematics";
import { Schema } from "./schema";

export function ngAdd(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {

        const mainFile = await getMainFilePath(tree, options.project);
        const isStandalone = isStandaloneApp(tree, mainFile);

        // Leer el archivo donde addRootProvider escribiría
        const targetFile = isStandalone
            ? `${mainFile.replace("main.ts", "app/app.config.ts")}`
            : `${mainFile.replace("main.ts", "app/app.module.ts")}`;

        const content = tree.readText(targetFile) ?? "";

        if (content.includes("provideOAuth2(")) {
            context.logger.info(
                `👁️  "${targetFile}": provideOAuth2 already registered.`,
            );
            return;
        }

        return addRootProvider(
            options.project,
            ({ code, external }) =>
                code`${external("provideOAuth2", "ngx-oauth2-oidc")}()`,
        );
    };
}
