from rest_framework import serializers
from .models import Company, Offer, Worker, JobRequest


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('__all__')

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ('__all__')

class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = ('__all__')

class JobRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobRequest
        fields = ('__all__')