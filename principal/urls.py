from django.urls import path
from .views import inicio, quienesSomos, galeria

urlpatterns = [
    path('inicio', inicio, name="inicio"),
    path('quienes_somos', quienesSomos, name="quienes_somos"),
    path('galeria', galeria, name="galeria"),
]