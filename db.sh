#!/bin/bash

project_dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
mkdir -p ${project_dir}/.db
mkdir -p ${project_dir}/.snapshots

dotenv() {
    grep -i "$1=" "${project_dir}/.env" | sed -E "s/^(.*)=[[:space:]]?//g"
}

save_snapshot() {
    local git_sha=$(git rev-parse --short HEAD)
    echo "saving db snapshot as: ${git_sha}"
    docker exec $(dotenv MYSQL_CONTAINER_NAME) /usr/bin/mysqldump -u$(dotenv MYSQL_ROOT_USER) --password=$(dotenv MYSQL_ROOT_PASSWORD) --all-databases > "${project_dir}/.snapshots/${git_sha}.sql"
}

restore_snapshot(){
    echo "restoring previous snapshot: $1"
    cat ${project_dir}/.snapshots/$1.sql | docker exec -i $(dotenv MYSQL_CONTAINER_NAME) /usr/bin/mysql -u$(dotenv MYSQL_ROOT_USER) --password=$(dotenv MYSQL_ROOT_PASSWORD) $(dotenv MYSQL_DATABASE)
}

[[ $1 == "save" ]] && save_snapshot

[[ $1 == "restore" ]] && restore_snapshot $2
 