
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (GameViewSet, NewsViewSet, DesignerViewSet, 
                   FranchiseViewSet, CharacterViewSet, ConsoleViewSet)

router = DefaultRouter()
router.register(r'games', GameViewSet)
router.register(r'news', NewsViewSet)
router.register(r'designers', DesignerViewSet)
router.register(r'franchises', FranchiseViewSet)
router.register(r'characters', CharacterViewSet)
router.register(r'consoles', ConsoleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
