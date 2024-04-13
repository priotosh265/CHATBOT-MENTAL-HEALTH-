# views.py
from rest_framework import viewsets
from rest_framework.response import Response

from .models import QnAModel
from .serializers import QnAModelSerializer


class QnAModelViewSet(viewsets.ModelViewSet):
    queryset = QnAModel.objects.all()
    serializer_class = QnAModelSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)
