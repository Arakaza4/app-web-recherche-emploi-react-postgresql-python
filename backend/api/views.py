from rest_framework import generics

from .models import Company, Offer, Worker, JobRequest
from .serializers import CompanySerializer, OfferSerializer, WorkerSerializer, JobRequestSerializer

# Create your views here.


class CompanyList(generics.ListCreateAPIView):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()


class OfferList(generics.ListCreateAPIView):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()

class OfferDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()


class WorkerList(generics.ListCreateAPIView):
    serializer_class = WorkerSerializer
    queryset = Worker.objects.all()

class WorkerDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WorkerSerializer
    queryset = Worker.objects.all()


class JobRequestList(generics.ListCreateAPIView):
    serializer_class = JobRequestSerializer
    queryset = JobRequest.objects.all()

class JobRequestDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JobRequestSerializer
    queryset = JobRequest.objects.all()