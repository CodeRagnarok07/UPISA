from django.urls import path
from django.views.generic import TemplateView
from .views import index,  contactView


urlpatterns = [
    path('', index, name='index'),
    path('contacto/', contactView, name='contacto'),

    path('empresa/', TemplateView.as_view(template_name="empresa/index.html"), name='empresa'),
    path('cerdo/', TemplateView.as_view(template_name="cerdo/index.html"), name='cerdo'),
    path('promo/', TemplateView.as_view(template_name="promo/index.html"), name='promo'),
    path('test/', TemplateView.as_view(template_name="test.html"), name='test'),

]
