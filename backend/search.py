from googlesearch import search
from bs4 import BeautifulSoup
import requests
import sys

text_file_path = 'links.txt'
temp_file_path = 'temp_output.txt'

def google_search(query):
    try:
        results = search(query,lang="en")

        lines = []
        for i, result in enumerate(results, start=1):
            new_data = result + "\n"
            lines.append(new_data)
            if i == 10:
                break
        
        with open(text_file_path, 'w') as file:
            file.writelines(lines)
        file.close()
    
        try:
            with open(text_file_path, 'r') as file:
                lines = file.read()
            file.close()
        
            arr = lines.split("\n")
            for i in range(2):
                url = arr[i]
                response = requests.get(url)
                html_content = response.text

                soup = BeautifulSoup(html_content, 'html.parser')
                paragraphs = soup.find_all('p')
                for paragraph in paragraphs:
                    if(len(paragraph.text) > 50):
                        with open(temp_file_path, 'a') as temp_file:
                            temp_file.write(paragraph.text + '\n')

        except Exception as e:
            print(f"An error occured: {e}")

    except Exception as e:
        print(f"An error occurred: {e}")

search_query = sys.argv[1] if len(sys.argv) > 1 else "wikipedia"
google_search(search_query)

