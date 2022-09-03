from django.urls import path
from .views import index, subPage



urlpatterns = [
    path('', index, name='index'),
    path('page/', subPage, name='subPage'),
]