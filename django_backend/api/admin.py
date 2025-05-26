
from django.contrib import admin
from .models import Game, News, Designer, Franchise, Character, Console

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'release_date', 'rating')
    search_fields = ('title', 'description')

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')
    search_fields = ('title', 'excerpt', 'content')

@admin.register(Designer)
class DesignerAdmin(admin.ModelAdmin):
    list_display = ('name', 'birth_date', 'company')
    search_fields = ('name', 'company')

@admin.register(Franchise)
class FranchiseAdmin(admin.ModelAdmin):
    list_display = ('name', 'publisher')
    search_fields = ('name', 'publisher')

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    list_display = ('name', 'game')
    search_fields = ('name',)

@admin.register(Console)
class ConsoleAdmin(admin.ModelAdmin):
    list_display = ('name', 'manufacturer', 'release_date')
    search_fields = ('name', 'manufacturer')
