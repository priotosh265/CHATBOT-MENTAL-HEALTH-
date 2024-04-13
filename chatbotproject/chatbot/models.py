# models.py
from django.db import models


class QnAModel(models.Model):
    Question_ID = models.IntegerField(primary_key=True)
    Questions = models.TextField()
    Answers = models.TextField()

    def __str__(self):
        return f"Question ID: {self.Question_ID}, Question: {self.Questions}"

