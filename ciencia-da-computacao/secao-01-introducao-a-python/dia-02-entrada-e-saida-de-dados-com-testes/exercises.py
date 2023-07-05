import json
import csv


with open("books.json") as file:
    books = json.load(file)


def get_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if category in categories:
                categories[category] += 1
            else:
                categories[category] = 1
    return categories


def get_percentage_for_category():
    categories = get_categories(books)
    result = []
    for category in categories:
        percentage = categories[category] / len(books) * 100
        result.append((category, percentage))
    return result


result = get_percentage_for_category()

filename = "category_percentages.csv"

# Write the data to the CSV file
with open(filename, "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["Category", "Percentage"])  # Write header row
    writer.writerows(result)  # Write data rows
