
"""
WSGI config for gamepedia_api project.

It exposes the WSGI callable as a module-level variable named ``application``.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gamepedia_api.settings')

application = get_wsgi_application()
