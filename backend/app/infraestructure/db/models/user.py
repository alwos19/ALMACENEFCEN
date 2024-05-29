from sqlalchemy import Column, String, Integer, Boolean
from sqlalchemy.orm import relationship


from app.infraestructure.db.utils.model import BaseModel

class User(BaseModel):
    email = Column(String(100), unique=True)
    names = Column(String(100), nullable=True)
    last_names = Column(String(100), nullable=True)
    address = Column(String(100), nullable=True)
    age = Column(Integer, nullable=True)
    hashed_password = Column(String(300), nullable=False)
    is_superuser = Column(Boolean, nullable=False, default=False)
    active = Column(Boolean, nullable=True, default=True)

    #Relations
    user_deparment = relationship("UserDeparment", back_populates="users")