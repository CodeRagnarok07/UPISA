

from rest_framework.response import Response
from rest_framework.views import APIView




from core.pagination import CustomPagination, PaginationHandlerMixinApiView
from django.db.models import Q


from products.models import Product
from .serializer import ProductSerializer ,DetailProductSerializer



class ProductListView(APIView, PaginationHandlerMixinApiView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None, *args, **kwargs):
        queryset = Product.objects.all()

        search = request.GET.get('search', '')
        year = request.GET.get('year', '')
        if year:
            queryset = queryset.filter(fecha__year=year)
        if search:
            queryset = queryset.filter(Q(titulo__icontains=search))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True, context={'request': request}).data)
        else:
            serializer = self.serializer_class(queryset, many=True, context={'request': request})

        return Response(serializer.data)

class DetailProductListView(APIView):
    queryset = Product.objects.all()
    serializer_class = DetailProductSerializer

    def get(self, request, url):
        print(url)
        queryset = Product.objects.filter(url=url)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})
        return Response(serializer.data)

