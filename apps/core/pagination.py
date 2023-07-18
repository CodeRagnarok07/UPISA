from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


# querys api/?page=4?limit=100&offset=400
class CustomPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'limit'
    max_page_size = 100

    def get_paginated_response(self, data):
        print(self.page[0], "page")
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'items_count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            # 'page_size': self.page_size,
            'results': data
        })


class PaginationHandlerMixinApiView(object):
    @property
    def paginator(self):
        if not hasattr(self, '_paginator'):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        else:
            pass
        return self._paginator

    def paginate_queryset(self, queryset):

        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset,
                                                self.request, view=self)

    def get_paginated_response(self, data):
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data)
