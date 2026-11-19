#!/bin/bash
set -e

PROJECT="${1}"

rm -rf "projects/$PROJECT"

node -e "
const fs = require('fs');
const j = JSON.parse(fs.readFileSync('angular.json', 'utf8'));
delete j.projects['$PROJECT'];
if (j.cli?.defaultProject === '$PROJECT') delete j.cli.defaultProject;
fs.writeFileSync('angular.json', JSON.stringify(j, null, 2));
"
