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
import { SchematicsException } from "@angular-devkit/schematics";
import { readWorkspace } from "@schematics/angular/utility";

export function ngAdd(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {

        const workspace = await readWorkspace(tree);
        const project = workspace.projects.get(options.project);

        if (!project && !options.project) {
            const projects = [...workspace.projects.keys()];
            throw new SchematicsException(
                `❌  Multiple projects found: ${projects.join(", ")}. ` +
                    `Specify one with --project <name>.`,
            );
        }

        if (!project) {
            throw new SchematicsException(
                `❌  Project "${options.project}" does not exist. ` +
                    `Available: ${[...workspace.projects.keys()].join(", ")}`,
            );
        }

        // A partir de aquí, TypeScript sabe que project no es undefined
        if (project.extensions["projectType"] !== "application") {
            throw new SchematicsException(
                `❌  Project "${options.project}" is a ${project.extensions["projectType"] ?? "unknown"}, not an application. ` +
                    `Use --project <application> to target an application.`,
            );
        }

        if (!project.targets?.has("build")) {
            throw new SchematicsException(
                `❌  Project "${options.project}" has no "build" target. ` +
                    `It might be a library. Use --project <application> to target an application.`,
            );
        }

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
