"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.i18n import i18n_patterns
from django.utils.translation import gettext_lazy
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

# if 'rosetta' in settings.INSTALLED_APPS:
#     urlpatterns += [
#         re_path(r'^rosetta/', include('rosetta.urls'))
#     ]

urlpatterns = [
    path(gettext_lazy('admin/'), admin.site.urls),

    path('i18n/', include('django.conf.urls.i18n')),
    path('summernote/', include('django_summernote.urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# /es /en /fr /zh


# NewFrontVite
newFrontUrlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),
    path("empresa/", TemplateView.as_view(template_name="index.html")),
    path("productos/", TemplateView.as_view(template_name="index.html")),
    path("productos/<str:url>/", TemplateView.as_view(template_name="index.html")),
    path("parrilleros/", TemplateView.as_view(template_name="index.html")),
    path("novedades/", TemplateView.as_view(template_name="index.html")),
    path("recetas/", TemplateView.as_view(template_name="index.html")),
    path("contacto/", TemplateView.as_view(template_name="index.html")),
]


# Api
apiUrlpatterns = [
    path('core/', include('core.api.router')),
    path('posts/', include('posts.api.router')),
    path('posts/', include('receta.api.router')),
    path('posts/products/', include('products.api.router')),
]


urlpatterns +=[
    path('', include(newFrontUrlpatterns)),
    path('api/', include(apiUrlpatterns)),
]

urlpatterns +=i18n_patterns(
    path('', include('core.urls')),
    path('productos/', include('products.urls')),
    path('recetas/', include('receta.urls')),
    path('posts/', include('posts.urls')),
)

#  Front vite





