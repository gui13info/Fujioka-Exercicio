from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import AtendimentoItem
from .serializers import AtendimentoItemSerializer


class AtendimentoItemViewSet(viewsets.ModelViewSet):

    serializer_class = AtendimentoItemSerializer
    queryset = AtendimentoItem.objects.all()
