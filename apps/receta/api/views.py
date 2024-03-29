

from rest_framework.response import Response
from rest_framework.views import APIView




from core.pagination import CustomPagination, PaginationHandlerMixinApiView
from django.db.models import Q


from receta.models import Receta, Galeria

from .serializer import RecetaSerializer, DetailRecetaSerializer


class RecetaListView(APIView, PaginationHandlerMixinApiView):
    queryset = Receta.objects.all()
    serializer_class = RecetaSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None, *args, **kwargs):
        queryset = Receta.objects.all()
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True, context={'request': request}).data)
        else:
            serializer = self.serializer_class(queryset, many=True, context={'request': request})
        return Response(serializer.data)

import random

class DetailRecetaListView(APIView):
    queryset = Receta.objects.all()
    serializer_class = DetailRecetaSerializer
    serializer_more = RecetaSerializer

    def get(self, request, url):
        queryset = Receta.objects.filter(url=url)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})


        similares = list(Receta.objects.all().exclude(url=url))
        if len(similares) > 2:
            similares = random.sample(similares, 3)

        serializer_more = self.serializer_more(similares, many=True, context={'request': request})

        return Response({
            "current":serializer.data[0],
            "more": serializer_more.data
        })



