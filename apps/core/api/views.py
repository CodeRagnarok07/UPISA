

from rest_framework.response import Response
from rest_framework.views import APIView


from core.models import Sucursales, HomeBanner
from .serializer import SucursalesSerializer , HomeBannerSerializer

from core.pagination import CustomPagination, PaginationHandlerMixinApiView
from django.db.models import Q



class SucursalesListView(APIView):
  
    queryset = Sucursales.objects.all()
    serializer_class = SucursalesSerializer

    def get(self, request, format=None, *args, **kwargs):
        queryset = Sucursales.objects.all()
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        return Response(serializer.data)



class HomeBannerListView(APIView, PaginationHandlerMixinApiView):
  
    queryset = HomeBanner.objects.all().order_by("-order")
    serializer_class = HomeBannerSerializer

    def get(self, request, format=None, *args, **kwargs):

        queryset = HomeBanner.objects.all().order_by("order")

        serializer = self.serializer_class(queryset, many=True, context={'request': request})
        return Response(serializer.data)