from django.urls import path
from .views import productos, detail, category_productos



urlpatterns = [
    path('', productos, name='products'),
    path('<str:category>/', category_productos, name='category_productos'),
    path('<str:category>/<str:url>/', detail, name='product_detail'),
]