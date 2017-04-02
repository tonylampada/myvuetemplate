#!/bin/bash
RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\e[0;33m'


# Because you don't deserve having to memorize a bunch of commands
# Instructions:
# 1) ". dev.sh"
# 2) "devhelp"
# 3) Be happy


export PROJ_BASE="$(realpath $(dirname ${BASH_SOURCE[0]}))"
echo $PROJ_BASE
CD=$(pwd)

STATIC_DIR=/somewhere/else/static/ # change this is you need it


function devhelp {
    echo -e "${GREEN}devhelp${RESTORE}           Prints this ${RED}help${RESTORE}"
    echo -e ""
    echo -e "${GREEN}frontrun${RESTORE}          Runs dev env on ${RED}http://localhost:8080${RESTORE}"
    echo -e ""
    echo -e "${GREEN}frontbuild${RESTORE}        Builds the frontend on ${RED}dist${RESTORE} folder"
    echo -e ""
    echo -e "${GREEN}copy2www${RESTORE}          Does a ${RED}frontbuild${RESTORE} e copies the results somewhere else"
    echo -e ""
    echo -e "${GREEN}jstests${RESTORE}           Runs js ${RED}unit tests${RESTORE}"
    echo -e ""
}

function frontrun {
    CD=$(pwd)
    cd $PROJ_BASE
    npm run dev
    exitcode=$?
    cd $CD
    return $exitcode
}

function frontbuild {
    CD=$(pwd)
    cd $PROJ_BASE
    npm run build
    exitcode=$?
    cd $CD
    return $exitcode
}

function copy2www {
    frontbuild
    mkdir -p $STATIC_DIR
    cp -Rf dist/* $STATIC_DIR
    return $exitcode
}

function jstests {
    CD=$(pwd)
    cd $PROJ_BASE
    npm run unit
    exitcode=$?
    cd $CD
    return $exitcode
}

function echo_red {
    echo -e "\e[31m$1\e[0m";
}

function echo_green {
    echo -e "\e[32m$1\e[0m";
}

function echo_yellow {
    echo -e "${YELLOW}$1${RESTORE}";
}

devhelp
