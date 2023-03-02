class Course < ActiveRecord::Base
    belongs_to :teachers
    belongs_to :student
  end