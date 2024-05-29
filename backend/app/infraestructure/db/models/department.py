from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

from app.infraestructure.db.utils.model import BaseModel

class Deparment(BaseModel):
    name = Column(String(100), nullable=False)
    description = Column(String(100), nullable=True)
    cost_center = Column(Integer, nullable=False)
    coord_email = Column(String(200), nullable=False)
    direction = Column(String(255), nullable=False)
    contact = Column(String(255), nullable=False)
    coordinator = Column(String(255), nullable=False)

     #Relations
    school_id = Column(Integer, ForeignKey("school.id"))
    school = relationship("School", back_populates="departments")

    user_deparment = relationship("UserDeparment", back_populates="deparments")