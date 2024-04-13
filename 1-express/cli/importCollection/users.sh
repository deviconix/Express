#!/bin/bash

# путь к скрипту относительный
script_dir=$(dirname "${BASH_SOURCE[0]}")

# путь к скрипту абсолютный
absolute_path=$(realpath "$script_dir")

# Поднимаемся на один уровень вверх
parent_dir=$(dirname "$absolute_path")

# Поднимаемся еще на один уровень вверх
root_dir=$(dirname "$parent_dir")

# Чтение параметров из файла конфигурации
source $absolute_path/config/users.conf

# нельзя после и перед равно ставить пробелы
pathJSON="${root_dir}${file}"

# Проверка существования файла с данными
if [ ! -f "$pathJSON" ]; then
  echo "Файл с данными не найден: $pathJSON"
  exit 1
fi

# Выполнение импорта данных в базу данных
mongoimport --db "$db" --collection "$collection" --file "$pathJSON" --jsonArray

echo "Импорт данных завершен"