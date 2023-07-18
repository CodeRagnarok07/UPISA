from django.urls import path, include
from rest_framework import routers

from .views import ProductListView, DetailProductListView, categoryListView



# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'', SucursalesListView)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('producto/',  ProductListView.as_view()),
    path('producto/<str:url>/',  DetailProductListView.as_view()),
    path('categorias/',  categoryListView.as_view(),  ),
    # path('subCategorias/',  ProductListView.as_view()),


   
]