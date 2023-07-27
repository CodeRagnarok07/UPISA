

from rest_framework.response import Response
from rest_framework.views import APIView







from pages.models import Contenido, Pagina, Seccion
from .serializer import PaginaSerializer, SeccionSerializer



class PageDetail(APIView):
    queryset = Pagina.objects.all()
    serializer_class = PaginaSerializer

    def get(self, request, pk):
        print(pk)
        queryset = Pagina.objects.filter(pk=pk)

        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        return Response(serializer.data[0])


class SeccionDetail(APIView):
    queryset = Seccion.objects.all()
    serializer_class = SeccionSerializer

    def get(self, request, pk):
        queryset = Seccion.objects.filter(pk=pk)

        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        return Response(serializer.data[0])

