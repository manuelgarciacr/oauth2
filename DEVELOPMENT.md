# PROJECT DEVELOPMENT

## Versions

* oauth2 v0.0.0
* ngx-oauth2-oidc v0.0.1

## Generation (Initial commit)

```bash
#!/bin/bash

# Generate workspace
ng new oauth2 --no-create-application --commit=false

# Generate ngx-oauth2-oidc library
cd oauth2/
ng generate library ngx-oauth2-oidc
```
## DEVELOPMENT.md document created

## MIT License

```
oauth2/LICENSE document
oauth2/angular.json: scripts "test:license01", "test:license02" and "test:license03"

README.md files license:
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.   

*.ts files license:
/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 */
```
## Tree-shaking configuration

1. Tree-shaking only applies to production build
1. ES Modules with static imports
    ```
    // ngx-oauth2-oidc/src/public-api.ts
    export * from './lib/ngx-oauth2-oidc.service';
    export * from './lib/ngx-oauth2-oidc.component';
    ```
1. Bundler without side effects
    ```
    // ngx-oauth2-oidc/package.json
    "sideEffects": false
    ```
## ngx-oauth2-oidc/package.json fields

```
    "author": "Manuel García Criado <manuel.garcia.cr@hotmail.com>",
    "description": "Angular Service for Oauth2.0 + PKCE + OIDC",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "https://github.com/manuelgarciacr/oauth2.git"
    },
    "homepage": "https://www.npmjs.com/package/ngx-oauth2-oidc",
    "keywords": [
        "oauth2",
        "PKCE",
        "OIDC",
        "auth"
    ],
    "private": false,
```

## Testing

```
// oauth2/package.json
"test": "CHROME_BIN=/snap/bin/brave ng test",
"test:ci": "CHROME_BIN=/snap/bin/brave ng test --no-watch  --no-progress --browsers=ChromeHeadless --code-coverage",
```

## Creation of schematics skeleton for the library

```
.
├── projects
│   └── ngx-oauth2-oidc
│       ├── schematics
│       │   ├── ng-add
│       │   │   ├── index_spec.ts
│       │   │   ├── index.ts
│       │   │   ├── schema.json
│       │   │   └── schema.ts
│       │   ├── ng-schematic
│       │   │   ├── index_spec.ts
│       │   │   └── index.ts
│       │   └── collection.json
│       ├── .gitignore
│       ├── package.json (M)
│       ├── tsconfig.schematics.json
│       ├── tsconfig.spec.json (M)
│       └── ...
├── DEVELOPMENT.md (M)
├── package.json (M)
└── ...

// ngx-oauth2-oidc/package.json
{
    "keywords": [
        "schematics",
        ...
    ],
    "schematics": "./schematics/collection.json",
    "scripts": {
        "build": "rm -r ../../dist/ngx-oauth2-oidc && tsc -p tsconfig.schematics.json",
        "postbuild": "copyfiles schematics/*/schema.json schematics/*/files/** schematics/collection.json ../../dist/ngx-oauth2-oidc/",
        "test": "npm run build && jasmine ../../dist/ngx-oauth2-oidc/schematics/**/*_spec.js"
    },
    "ng-add": {
        "save": "dependencies"
    },
    ...
}

// ngx-oauth2-oidc/tsconfig.spec.json
{
    ...,
    "include": [
        "src/**/*.spec.ts",
        "src/**/*.d.ts"
    ],
    "exclude": [
        "schematics/**/*"
    ]
}

// oauth2/package.json
{
    ...,
    "scripts": {
        "test:schematics": "npm --prefix projects/ngx-oauth2-oidc run test",
        "test:license01": "year=$(date +%Y) && find $(find projects -depth \\( -name 'src' -o -name 'schematics' \\) -type d | grep -v node_modules) -name '*.ts'  -exec grep -LE \"^ \\* Copyright \\(c\\) ($year|[0-9]{4}-$year) Manuel García Criado\" {} \\;",
        "test:license02": "find $(find projects -depth \\( -name 'src' -o -name 'schematics' \\) -type d | grep -v node_modules) -name '*.ts'  -exec grep -L \"^ \\* SPDX-License-Identifier: MIT\" {} \\;",
        ...
    },
    "devDependencies": {
        "copyfiles": "^2.4.1",
        "jasmine": "^7.0.0",
        ...
    }
}

oauth2 $ npm install
```

## ***TODO:***

```
Probar Tree-shaking. (Tamaños del bundle)
```

