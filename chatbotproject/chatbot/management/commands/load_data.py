# management/commands/load_data.py
from django.core.management.base import BaseCommand
import json
from ...models import QnAModel


class Command(BaseCommand):
    help = 'Load data from JSON file into QnAModel'

    def handle(self, *args, **options):
        with open('data.json', 'r') as f:
            data = json.load(f)
            for item in data:
                QnAModel.objects.create(question_id=item['question_id'], question=item['question'], answer=item['answer'])
