from django.urls import path, include
from rest_framework import routers

from .views import NovedadesListView, TrucosYConsejosListView, DetailTrucosYConsejosListView, DetailNovedadesListView



# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'', SucursalesListView)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('novedades/',  NovedadesListView.as_view()),
    path('novedades/<str:url>/',  DetailNovedadesListView.as_view()),
    path('trucos/',  TrucosYConsejosListView.as_view()),
    path('trucos/<str:url>/',  DetailTrucosYConsejosListView.as_view()),

   
]