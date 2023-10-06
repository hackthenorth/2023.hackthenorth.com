#!/bin/bash

# Command for running this bash script (hosted)
# curl -s -N 'https://hackthenorth.com/warp_theme_installer.sh' | bash
# Command for running this bash script (local), also please 
# ensure you've added execute permissions! (chmod +x ./warp_theme_installer.sh):
# ./warp_theme_installer.sh

# Theme Configuration
readonly THEME_NAME="hack_the_north_2023"
readonly THEME_CONTENT='
# Hack the North 2023 Warp Theme
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
background: "#1f1e1f"
accent: "#f236e8"
foreground: "#ffffff"
background_image:
  path: "hack_the_north_2023_warp_bg.png"
  opacity: 20
details: darker
terminal_colors:
  normal:
    black: "#616161"
    red: "#ff8272"
    green: "#b4fa72"
    yellow: "#fefdc2"
    blue: "#a5d5fe"
    magenta: "#ff8ffd"
    cyan: "#d0d1fe"
    white: "#f1f1f1"
  bright:
    black: "#8e8e8e"
    red: "#ffc4bd"
    green: "#d6fcb9"
    yellow: "#fefdd5"
    blue: "#c1e3fe"
    magenta: "#ffb1fe"
    cyan: "#e5e6fe"
    white: "#feffff"
name: "Hack the North 2023"
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
readonly HACK_THE_NORTH_IMAGE_NAME="hack_the_north_2023_warp_bg.png"
readonly HACK_THE_NORTH_IMAGE_PATH="https://hackthenorth.com/${HACK_THE_NORTH_IMAGE_NAME}"
curl "https://hackthenorth.com/hack_the_north_2023_warp_bg.png" --output "${WARP_THEME_DIR}/${HACK_THE_NORTH_IMAGE_NAME}"
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
printf "${GREEN_BOLD}✓${RESET} ${GREEN}Successfully installed the Hack the North 2023 theme!\n\n"
printf "${BLACK}${BACKGROUND_LIGHT_GREEN} Next steps ${RESET}\n\n"
printf "You can now select the ${GREEN_BOLD}Hack the North 2023 ${RESET} theme from the Theme Picker\n\n"
printf "Don't know how to open the Theme Picker? ${GREEN_BOLD}https://docs.warp.dev/features/themes#how-to-access-it${RESET}\n"
printf "${DIM}Enjoy your new theme!${RESET}\n"
