from django.urls import path
from .views import index



urlpatterns = [
    path('', index, name='index'),
    path('empresa/', index, name='empresa'),
    path('contacto/', index, name='contacto'),
]