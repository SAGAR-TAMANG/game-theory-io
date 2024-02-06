from django.urls import path
from .views import index, play

urlpatterns = [
    path('', index),
    path('play/', play, name = 'cpu_solatire_play'),
]