from django.contrib import admin

# Register your models here.

from .models import Company, Offer, Worker, JobRequest

admin.site.register(Company)
admin.site.register(Offer)
admin.site.register(Worker)
admin.site.register(JobRequest)