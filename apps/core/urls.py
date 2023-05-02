from django.urls import path
from django.views.generic.base import TemplateView


# from .views import index, about, contactView


urlpatterns = [
    # path('', index, name='index'),
    # path('empresa/', about, name='empresa'),
    # path('contacto/', contactView, name='contacto'),


    path("", TemplateView.as_view(template_name="index.html"))
]
