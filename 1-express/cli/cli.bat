@echo off
REM Отключаем вывод команд в консоли

REM Проходим по всем поддиректориям текущего каталога
for /d %%I in ("%CD%\*") do (
    REM Добавляем каждую поддиректорию к переменной PATH
    set "PATH=%%I;%PATH%"
)
