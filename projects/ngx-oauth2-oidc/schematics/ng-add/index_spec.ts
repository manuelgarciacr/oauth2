/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 */

import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { join } from "path";

const collectionPath = join(__dirname, "../collection.json");

const workspaceOptions = {
    name: "test-ws",
    newProjectRoot: "projects",
    version: "17.0.0",
};

const appOptions = {
    name: "my-app",
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    style: "css",
    skipTests: false,
    skipPackageJson: false,
};

describe("ng-add schematic", () => {
    let runner: SchematicTestRunner;

    beforeEach(() => {
        runner = new SchematicTestRunner("schematics", collectionPath);
    });

    it("[standalone] should add provideOauth2 to main.ts", async () => {
        let appTree = await runner.runExternalSchematic(
            "@schematics/angular",
            "workspace",
            workspaceOptions,
        );
        appTree = await runner.runExternalSchematic(
            "@schematics/angular",
            "application",
            { ...appOptions, standalone: true },
            appTree,
        );

        const tree = await runner.runSchematic(
            "ng-add",
            { project: "my-app" },
            appTree,
        );
        const configContent = tree.readContent(
            "/projects/my-app/src/app/app.config.ts",
        )!;

        expect(configContent).toContain("provideOAuth2(");
        expect(configContent).toContain("from 'ngx-oauth2-oidc'");
    });

    it("[NgModule] should add provideOauth2 to AppModule", async () => {
        let appTree = await runner.runExternalSchematic(
            "@schematics/angular",
            "workspace",
            workspaceOptions,
        );
        appTree = await runner.runExternalSchematic(
            "@schematics/angular",
            "application",
            { ...appOptions, standalone: false },
            appTree,
        );

        const tree = await runner.runSchematic(
            "ng-add",
            { project: "my-app" },
            appTree,
        );
        const appModule = tree.readContent(
            "/projects/my-app/src/app/app.module.ts",
        )!;

        expect(appModule).toContain("provideOAuth2(");
        expect(appModule).toContain("from 'ngx-oauth2-oidc'");
    });
});
