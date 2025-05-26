
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from .models import Game, News
from datetime import date


class GameAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.game = Game.objects.create(
            title="Test Game",
            image="https://example.com/image.jpg",
            description="A test game",
            release_date=date.today()
        )
        self.url = reverse('game-list')

    def test_get_games(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)


class NewsAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.news = News.objects.create(
            title="Test News",
            image="https://example.com/news.jpg",
            date=date.today(),
            excerpt="A test news excerpt",
            content="Full content of the news article"
        )
        self.url = reverse('news-list')

    def test_get_news(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
