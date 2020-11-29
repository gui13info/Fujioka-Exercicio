from django.db import models

# Create your models here.
from django.db import models


class AtendimentoItem(models.Model):

    coordenador = models.CharField(max_length=100)
    assunto = models.CharField(max_length=100)
    descricao = models.TextField()
    data = models.CharField(max_length=20)