# -*- coding: utf-8 -*-
"""
Created on Tue Jan 30 22:12:56 2024

@author: Asus
"""

# -*- coding: utf-8 -*-
"""
Created on Tue Jan 30 22:03:25 2024

@author: Asus
"""

import requests
from bs4 import BeautifulSoup

def scrape_headlines_and_save(url, output_file):
    # Send an HTTP request to the specified URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the HTML elements containing the headlines
        # You'll need to inspect the HTML structure of the website to determine the appropriate tags and classes
        headlines = soup.find_all('h3')  # Example: finding all h2 tags

        # Extract and save the headlines to a text file
        with open(output_file, 'w', encoding='utf-8') as file:
            for headline in headlines:
                file.write(headline.text.strip() + '\n\n')

        print(f"Headlines saved to {output_file}")
    else:
        print(f"Failed to retrieve content. Status code: {response.status_code}")

# Example usage
url_to_scrape = 'https://www.thehindubusinessline.com/topic/fake-news/'
output_file_path = 'headlines1.txt'
scrape_headlines_and_save(url_to_scrape, output_file_path)