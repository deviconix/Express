#!/bin/bash

# Получаем текущий каталог, в котором находится скрипт
current_dir=$(dirname "$(realpath "$0")")

# Добавляем текущий каталог и все его подкаталоги к переменной PATH
export PATH=$PATH:$current_dir