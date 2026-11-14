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

