
from django.db import models


class Game(models.Model):
    title = models.CharField(max_length=255)
    image = models.URLField()
    description = models.TextField()
    release_date = models.DateField()
    rating = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    franchise = models.ForeignKey('Franchise', on_delete=models.SET_NULL, null=True, blank=True, related_name='games')
    
    def __str__(self):
        return self.title


class News(models.Model):
    title = models.CharField(max_length=255)
    image = models.URLField()
    date = models.DateField()
    excerpt = models.TextField()
    content = models.TextField()
    
    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'
    
    def __str__(self):
        return self.title


class Designer(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    bio = models.TextField()
    company = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.name


class Franchise(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(null=True, blank=True)
    description = models.TextField()
    publisher = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name


class Character(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(null=True, blank=True)
    description = models.TextField()
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='characters')
    
    def __str__(self):
        return self.name


class Console(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(null=True, blank=True)
    description = models.TextField()
    manufacturer = models.CharField(max_length=255)
    release_date = models.DateField()
    
    def __str__(self):
        return self.name
