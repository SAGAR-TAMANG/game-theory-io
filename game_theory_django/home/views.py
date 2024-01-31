from django.shortcuts import render
import random

# Create your views here.
def index(request):
  return render(request, 'index.html')

def play(request):
  choice = random.choice(['cooperate.mp4', 'defect.mp4'])
  print("Choice: ", choice)
  return render(request, 'play.html', {'choice':choice})