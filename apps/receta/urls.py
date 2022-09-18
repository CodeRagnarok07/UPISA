from django.urls import path
from .views import viewList, viewDetail



urlpatterns = [
    path('', viewList, name='recetas'),
    path('<str:url>', viewDetail, name='receta_detail'),
]