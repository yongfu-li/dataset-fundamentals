#!/usr/bin/env bash
# Book workflow; requires a configured DVC remote before execution.
dvc add sensor_data/April_2024.csv
git commit -m "Added April 2024 sensor data"
dvc push
