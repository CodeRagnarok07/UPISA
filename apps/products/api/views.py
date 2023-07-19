

from rest_framework.response import Response
from rest_framework.views import APIView




from core.pagination import CustomPagination, PaginationHandlerMixinApiView
from django.db.models import Q


from products.models import Product, Categoria, CategoriaSub, ValoresNutricionales
from .serializer import ProductSerializer ,DetailProductSerializer, CategoriaSerializer, CategoriaSubSerializer, ValoresNutricionalesSerializer



class ProductListView(APIView, PaginationHandlerMixinApiView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None, *args, **kwargs):
        destacados = request.GET.get('destacados', '')
        if destacados:
            queryset = Product.objects.filter(destacado=True)
        else:
            queryset = Product.objects.all()

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

        queryset = Product.objects.filter(url=url)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})
        return Response(serializer.data[0])


class categoryListView(APIView, PaginationHandlerMixinApiView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

    def get(self, request, format=None, *args, **kwargs):
     
        queryset = Categoria.objects.all()
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        return Response(serializer.data)
