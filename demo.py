from googlesearch import search

def google_search(query):
    try:
        # Perform the Google search
        results = search(query,lang="en")

        # Display the search results
        for i, result in enumerate(results, start=1):
            print(f"{i}. {result}")
            if(i==10):
                break

    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
search_query = input("Enter your search query: ")
google_search(search_query)
