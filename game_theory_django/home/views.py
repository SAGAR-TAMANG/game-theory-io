from django.shortcuts import render
import random

# Create your views here.
def index(request):
  return render(request, 'index.html')

def play(request):
    if 'choice_list' not in request.session:
        # If choice_list is not in the session, generate and store it
        choice_list = generate_choice_list()
        request.session['choice_list'] = choice_list
    else:
        # Retrieve the existing choice_list from the session
        choice_list = request.session['choice_list']

    return render(request, 'play.html', {'choice_list': choice_list})

def generate_choice_list():
    # Generate a random sequence of 10 choices
    return [random.choice(['cooperate', 'defect']) for _ in range(10)]
