import requests

url = 'https://www.wionews.com/entertainment/eminems-death-hoax-infuriates-fans-heres-how-the-fake-news-spread-online-668199'
response = requests.get(url)
html_content = response.text
from bs4 import BeautifulSoup

soup = BeautifulSoup(html_content, 'html.parser')
# Example: Extract all the text from paragraph tags
paragraphs = soup.find_all('p')
for paragraph in paragraphs:
    print(paragraph.text)


