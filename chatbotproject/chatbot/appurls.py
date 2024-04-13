# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views, Homepageview

router = DefaultRouter()
router.register(r'qna', views.QnAModelViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('home/', Homepageview.homepageview, name="homepageurl")
    # Add other URL patterns as needed
]
