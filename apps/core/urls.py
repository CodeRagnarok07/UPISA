from django.urls import path
from .views import index, about



urlpatterns = [
    path('', index, name='index'),
    path('empresa/', about, name='empresa'),
    path('contacto/', index, name='contacto'),
]