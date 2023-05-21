from django.urls import path
from django.views.generic import TemplateView
from .views import index, about, contactView


urlpatterns = [
    path('', index, name='index'),
    path('cerdo', TemplateView.as_view(template_name="cerdo.html"), name='cerdo'),
    path('empresa/', about, name='empresa'),
    path('contacto/', contactView, name='contacto'),
]
