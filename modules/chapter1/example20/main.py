import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
household_incomes = pd.read_csv("household_incomes.csv")

# View the first few rows
print(household_incomes.head())

# Summary statistics for numerical columns
print(household_incomes.describe())

# Check for missing values
print(household_incomes.isnull().sum())

# Visualize the income distribution
household_incomes["Income"].hist()
plt.title("Distribution of Household Incomes")
plt.xlabel("Income")
plt.ylabel("Frequency")
plt.savefig("income_hist.png", dpi=120, bbox_inches="tight")
print("Saved histogram to income_hist.png")
# plt.show()  # disabled for non-interactive runs; book listing uses show()
