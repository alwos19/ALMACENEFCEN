from typing import List
from app.schemas import school
from app.core.config import get_settings

settings = get_settings()

init_schools: List[school.SchoolCreate] =[
    school.SchoolCreate(
        name ="ADMIN",
        description = "ADMIN",
        cost_center = 0,
        email_dean = "jhon.jaramilloe@udea.edu.co",
        direction ="ADMIN",
        contact ="ADMIN",
        dean ="ADMIN"
    )
]