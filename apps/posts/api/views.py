

from rest_framework.response import Response
from rest_framework.views import APIView




from core.pagination import CustomPagination, PaginationHandlerMixinApiView
from django.db.models import Q


from posts.models import TrucosYConsejos, Novedades
from .serializer import TrucosYConsejosSerializer, NovedadesSerializer, DetailTrucosYConsejosSerializer, DetailNovedadesSerializer

import random


class TrucosYConsejosListView(APIView, PaginationHandlerMixinApiView):
    queryset = TrucosYConsejos.objects.all()
    serializer_class = TrucosYConsejosSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None, *args, **kwargs):
        queryset = TrucosYConsejos.objects.all()

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

class DetailTrucosYConsejosListView(APIView):
    queryset = TrucosYConsejos.objects.all()

    serializer_class = DetailTrucosYConsejosSerializer

    serializer_more = TrucosYConsejosSerializer

    def get(self, request, url):
        queryset = TrucosYConsejos.objects.filter(url=url)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})
        similares = list(TrucosYConsejos.objects.all().exclude(url=url))
        if len(similares) > 2:
            similares = random.sample(similares, 3)
        serializer_more = self.serializer_more(similares, many=True, context={'request': request})

        return Response({
            "current":serializer.data[0],
            "more": serializer_more.data
        })






class NovedadesListView(APIView, PaginationHandlerMixinApiView):
    queryset = Novedades.objects.all()
    serializer_class = NovedadesSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None, *args, **kwargs):
        queryset = Novedades.objects.all()

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


class DetailNovedadesListView(APIView):
    queryset = Novedades.objects.all()

    serializer_class = DetailNovedadesSerializer

    serializer_more = NovedadesSerializer

    def get(self, request, url):
        queryset = Novedades.objects.filter(url=url)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        similares = list(Novedades.objects.all().exclude(url=url))
        if len(similares) > 2:
            similares = random.sample(similares, 3)

        serializer_more = self.serializer_more(similares, many=True, context={'request': request})

        return Response({
            "current":serializer.data[0],
            "more": serializer_more.data
        })

