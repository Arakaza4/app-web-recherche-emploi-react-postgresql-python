from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=50)
    score = models.IntegerField()
    bio = models.CharField(max_length=80)
    offers = models.CharField(max_length=80)
    email = models.CharField(max_length=80)
    password = models.CharField(max_length=80)


class Offer(models.Model):
    title = models.CharField(max_length=80)
    location = models.CharField(max_length=80)
    company = models.CharField(max_length=80)
    jobType = models.CharField(max_length=80)
    publicationDate = models.DateField()
    bio = models.CharField(max_length=80)
    companyId = models.ForeignKey(Company, on_delete=models.CASCADE)


class Worker(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    email = models.CharField(max_length=80)
    password = models.CharField(max_length=80)
    bio = models.CharField(max_length=80)


class JobRequest(models.Model):
    workerID = models.ForeignKey(Worker, on_delete=models.CASCADE)
    offerId = models.ForeignKey(Offer, on_delete=models.CASCADE)


class Test(models.Model):
    name = models.CharField(max_length=50)
    users = models.IntegerField()
    email = models.CharField(max_length=80)
    password = models.CharField(max_length=80)
    bio = models.CharField(max_length=80)
