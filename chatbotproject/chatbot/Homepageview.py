from django.shortcuts import render
import requests
from .models import QnAModel


def homepageview(request):
    if request.method == 'POST':
        question_id = request.POST.get('userinput')  # Adjusted to 'question_id'
        api_endpoint = f'http://127.0.0.1:8000/api/qna/{question_id}'

        response = requests.get(api_endpoint)

        if response.status_code == 200:
            data = response.json()
            # Extracting only particular values based on keys
            values_string = data.get('Answers', '')  # Assuming Answers is a string
            values = values_string.split()  # Split the string into a list of values
            return render(request, 'Home.html', {'values': values})
        else:
            # Set default values if the request fails
            values = []
            return render(request, 'Home.html', {'values': values})
    else:
        return render(request, 'Home.html')
