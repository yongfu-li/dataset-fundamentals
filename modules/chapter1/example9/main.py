import h5py
import numpy as np

with h5py.File("example.h5", "w") as hdf:
    data = np.random.rand(100, 100)
    hdf.create_dataset("random_data", data=data)
    group = hdf.create_group("experiment")
    group.create_dataset("temperature", data=np.linspace(0, 100, 100))
    group.create_dataset("pressure", data=np.linspace(1, 10, 100))

with h5py.File("example.h5", "r") as hdf:
    print("Datasets in root:", list(hdf.keys()))
    random_data = hdf["random_data"][:]
    print("Shape of 'random_data':", random_data.shape)
