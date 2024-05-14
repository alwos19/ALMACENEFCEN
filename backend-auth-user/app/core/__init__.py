from functools import lru_cache
from pydantic import BaseSettings

class Settings(BaseSettings):
    """Settings for the application."""
    #: The application name
    APP_NAME: str = "service auth user"
    #: The application version
    APP_VERSION: str = "0.0.1"
    #: The application debug mode
    DEBUG: bool = False
     #: The application api version
    API_V1_STR: str = "/api/v1"
    #: Login date base
    DATABASE_URL: str
    #: Access token expiration time
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 10080  # 7 days
    #: Secret key
    SECRET_KEY: str
    #: Algorithm for JWT
    ALGORITHM: str = "HS256"

@lru_cache()
def get_settings() -> BaseSettings:
    """Get the application settings."""
    return Settings()

settings:Settings= Settings()