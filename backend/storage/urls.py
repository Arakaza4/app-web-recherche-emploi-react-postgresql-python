"""
URL configuration for storage project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from api.views import CompanyList, CompanyDetail, OfferList, OfferDetail, WorkerList, WorkerDetail, JobRequestList, JobRequestDetail
#from django.urls import path
#from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('company/', CompanyList.as_view()),
    path('company/<int:pk>/', CompanyDetail.as_view()),
    path('offer/', OfferList.as_view()),
    path('offer/<int:pk>/', OfferDetail.as_view()),
    path('worker/', WorkerList.as_view()),
    path('worker/<int:pk>/', WorkerDetail.as_view()),
    path('jobrequest/', JobRequestList.as_view()),
    path('jobrequest/<int:pk>/', JobRequestDetail.as_view()),
    #path('offer/', views.create_offer, name='create_offer'),
]
