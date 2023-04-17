from django.urls import path
from .views import CompanyList, CompanyDetail, CompanyVacancyList, VacancyList, VacancyDetail, TopTenVacancies

urlpatterns = [
    path('companies/', CompanyList.as_view()),
    path('companies/<int:pk>/', CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacancyList.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetail.as_view()),
    path('vacancies/top_ten/', TopTenVacancies.as_view()),
]
