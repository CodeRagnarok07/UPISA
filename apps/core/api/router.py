from django.urls import path, include
from rest_framework import routers

from .views import SucursalesListView, HomeBannerListView



# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'', SucursalesListView)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('sucursales/',  SucursalesListView.as_view()),
    path('banners/',  HomeBannerListView.as_view()),

   
]