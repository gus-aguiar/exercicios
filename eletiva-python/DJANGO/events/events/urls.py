from django.urls import path
from events.views import index


urlpatterns = [
    path("", index, name="home-page")
    #   path("/rota-comentada", função-que-será-executada, name="nome-que-identifica-a-rota")
]
