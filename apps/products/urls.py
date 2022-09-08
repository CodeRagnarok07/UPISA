from django.urls import path
from .views import productos, detail



urlpatterns = [
    path('', productos, name='products'),
    path('a/<str:url>/', detail, name='product_detail'),
]