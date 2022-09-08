from django.urls import path
from .views import parrilleros



urlpatterns = [
    path('parrilleros', parrilleros, name='parrilleros'),
]