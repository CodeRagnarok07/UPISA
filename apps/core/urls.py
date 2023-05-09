from django.urls import path
from django.views.generic.base import TemplateView


# from .views import index, about, contactView


urlpatterns = [
    # path('', index, name='index'),
    # path('empresa/', about, name='empresa'),
    # path('contacto/', contactView, name='contacto'),


    path("", TemplateView.as_view(template_name="index.html"), name="index"),
    path("productos", TemplateView.as_view(template_name="productos.html"), name="productos"),
    path("empresa", TemplateView.as_view(template_name="empresa.html"), name="empresa"),
    path("parrilleros", TemplateView.as_view(template_name="parrilleros.html"), name="parrilleros"),
    path("novedades", TemplateView.as_view(template_name="novedades.html"), name="novedades"),
    path("recetas", TemplateView.as_view(template_name="recetas.html"), name="recetas"),
    path("contacto", TemplateView.as_view(template_name="contacto.html"), name="contacto"),



]
