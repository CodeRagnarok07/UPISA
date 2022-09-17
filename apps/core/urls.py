from django.urls import path
from .views import index, about, contactView


urlpatterns = [
    path('', index, name='index'),
    path('empresa/', about, name='empresa'),
    path('contacto/', contactView, name='contacto'),
]
