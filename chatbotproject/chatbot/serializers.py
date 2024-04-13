# serializers.py
from rest_framework import serializers
from .models import QnAModel


class QnAModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = QnAModel
        fields = '__all__'
