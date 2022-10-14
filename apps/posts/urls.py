from django.urls import path
from .views import parrilleros, viewDetail



urlpatterns = [
    path('parrilleros', parrilleros, name='parrilleros'),
    path('parrilleros/<str:url>', viewDetail, name='detail_parrilleros'),
]