from rest_framework import serializers

from .models import AtendimentoItem


class AtendimentoItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = AtendimentoItem
        fields = '__all__'
