class Student < ActiveRecord::Base
    belongs_to :user
    has_many :courses
    has_many :teachers, through: :courses
  end