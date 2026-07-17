#!/usr/bin/env bash
# Demonstration commands from the manuscript; review and configure a real remote before use.
git init
dvc init
dvc remote add -d myremote s3://mybucket/datasets
dvc add data/my_dataset.csv
git add data/my_dataset.csv.dvc
git commit -m "Add initial dataset"
dvc push
dvc stage add -n preprocess -d data/raw_data.csv -o data/preprocessed_data.csv python preprocess.py data/raw_data.csv data/preprocessed_data.csv
dvc stage add -n train -d data/preprocessed_data.csv -o models/model.pkl python train_model.py data/preprocessed_data.csv models/model.pkl
git pull
dvc pull
