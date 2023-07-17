from django.urls import path, include
from rest_framework import routers

from .views import RecetaListView, DetailRecetaListView



# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'', SucursalesListView)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('receta/',  RecetaListView.as_view()),
    path('receta/<str:url>/',  DetailRecetaListView.as_view()),

]