

from rest_framework.response import Response
from rest_framework.views import APIView


from core.models import Sucursales
from .serializer import SucursalesSerializer

from core.pagination import CustomPagination, PaginationHandlerMixinApiView
from django.db.models import Q



class SucursalesListView(APIView, PaginationHandlerMixinApiView):
  
    queryset = Sucursales.objects.all()
    serializer_class = SucursalesSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None, *args, **kwargs):
        queryset = Sucursales.objects.all()

        search = request.GET.get('search', '')
        year = request.GET.get('year', '')
        if year:
            queryset = queryset.filter(fecha__year=year)
        if search:
            queryset = queryset.filter(Q(titulo__icontains=search))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
