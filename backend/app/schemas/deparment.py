from pydantic import BaseModel, Field, EmailStr

from app.schemas.model import GeneralResponse

from .school import SchoolResponse

class DepartmentBase(BaseModel):
    name: str
    description: str
    coord_email: str
    school_id: int
    coordinator : str | None
    cost_center: int | None

class DepartmentCreate(DepartmentBase):
    pass


class DeparmentUpdate(DepartmentBase):
    pass

class DeparmentInDB(DepartmentBase):
    id: int

    class Config:
        orm_mode = True

class DepartmentResponse(DeparmentInDB):
    school: SchoolResponse