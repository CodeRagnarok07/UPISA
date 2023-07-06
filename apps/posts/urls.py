from django.urls import path
from .views import parrilleros, parrillerosDetail, novedades, novedadesViewDetail


urlpatterns = [
    path('parrilleros', parrilleros, name='parrilleros'),
    path('parrilleros/<str:url>', parrillerosDetail, name='detail_parrilleros'),
    
    path('novedades', novedades, name='novedades'),
    path('novedades/<str:url>', novedadesViewDetail, name='detail_novedades'),
]
