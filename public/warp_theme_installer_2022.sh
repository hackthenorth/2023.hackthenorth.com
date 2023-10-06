#!/bin/bash

# Command for running this bash script (hosted)
# curl -s -N 'https://hackthenorth.com/warp_theme_installer.sh' | bash
# Command for running this bash script (local), also please 
# ensure you've added execute permissions! (chmod +x ./warp_theme_installer.sh):
# ./warp_theme_installer.sh

# Theme Configuration
readonly THEME_NAME="hack_the_north"
readonly THEME_CONTENT='
# Hack the North 2022 Warp Theme
#
# Exclusive theme for Hack the North attendees. 
# Please see documentation for Warp themes at:
# https://docs.warp.dev/features/themes
# You can find more themes at:
# https://github.com/warpdotdev/themes
#
# Credits for design assets go to the Hack the 
# North team (https://hackthenorth.com/).

--- 
accent: "#43AFDE"
background: "#182027"
background_image:
  path: "hack_the_north_2022_bg.png"
  opacity: 15
details: darker
foreground: "#E1E2E3"
terminal_colors: 
  bright: 
    black: "#7c95af"
    blue: "#99e6fe"
    cyan: "#99c6f3"
    green: "#99fe9e"
    magenta: "#fd87cd"
    red: "#fe9999"
    white: "#f3f3f3"
    yellow: "#fcfe99"
  normal: 
    black: "#6683a2"
    blue: "#88E2FE"
    cyan: "#87BDF1"
    green: "#88FE8D"
    magenta: "#FD73C5"
    red: "#FE8888"
    white: "#f1f1f1"
    yellow: "#FCFE88"
'
# Warp Variables
readonly WARP_THEME_DIR="$HOME/.warp/themes"
# Colors
readonly RESET="\033[0m"
readonly BLACK="\033[0;30m"
readonly BOLD="\033[1m"
readonly DIM="\033[2m"
readonly GREEN_BOLD="\033[1;32m"
readonly RED_BOLD="\033[1;31m"
readonly BACKGROUND_LIGHT_GREEN="\033[102m"
readonly BACKGROUND_LIGHT_RED="\033[101m"
# Hack the North background image
readonly HACK_THE_NORTH_IMAGE_NAME="hack_the_north_2022_bg.png"
readonly HACK_THE_NORTH_IMAGE_PATH="https://hackthenorth.com/${HACK_THE_NORTH_IMAGE_NAME}"
curl "https://hackthenorth.com/hack_the_north_2022_bg.png" --output "${WARP_THEME_DIR}/${HACK_THE_NORTH_IMAGE_NAME}"
printf "${GREEN_BOLD}✓${RESET} ${BOLD}Installing theme:${RESET}${DIM} ${THEME_NAME}${RESET}\n"
# Check if WARP_THEME_DIR exists
if [ ! -d "${WARP_THEME_DIR}" ]; then
	printf "${GREEN_BOLD}✓${RESET} ${BOLD}Creating Warp Theme Directory:${RESET}${DIM} ${WARP_THEME_DIR}${RESET}\n"
	mkdir -p "${WARP_THEME_DIR}"
fi
# Check if theme file already exists
if [ -f "${WARP_THEME_DIR}/${THEME_NAME}.yaml" ]; then
	printf "${RED_BOLD}✗${RESET} ${BOLD}Theme already exists:${RESET} ${DIM}${WARP_THEME_DIR}/${THEME_NAME}.yaml\n\n"
	printf "${BLACK}${BACKGROUND_LIGHT_RED} Next steps ${RESET}\n\n"
	printf "Delete the file to continue\n"
	printf "Copy and paste ${DIM}rm ${WARP_THEME_DIR}/${THEME_NAME}.yaml ${RESET}into your terminal\n" 
	exit 1
fi
touch "${WARP_THEME_DIR}/${THEME_NAME}.yaml"
echo "${THEME_CONTENT}" > "${WARP_THEME_DIR}/${THEME_NAME}.yaml"	
printf "${GREEN_BOLD}✓${RESET} ${GREEN}Successfully installed the Hack the North theme!\n\n"
printf "${BLACK}${BACKGROUND_LIGHT_GREEN} Next steps ${RESET}\n\n"
printf "Restart Warp and select ${GREEN_BOLD}Hack the North ${RESET}from the Theme Picker\n\n"
printf "Don't know how to open the Theme Picker? ${GREEN_BOLD}https://docs.warp.dev/features/themes#how-to-access-it${RESET}\n"
printf "${DIM}Enjoy your new theme!${RESET}\n"
